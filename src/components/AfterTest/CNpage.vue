<template>
    <div class="block">
        <!-- <h2>{{language=='Chinese'?'课后测试':'After-Course Test'}}</h2> -->
        <h2>课后测试</h2>
        <!-- <div class="divider"></div> -->

            <!-- <Card
                v-for = "(q,index) in questions"
                :key = "index"
                :class = "index"
                :question='questions[index]'
                :answers='answers[index]' 
                :correct='corrects[index]' 
                @next='handleNext'
            /> -->
            <Card
                v-if = this.isTest
                class='card'
                :percentage='percentage'
                :question='questions[this.index]'
                :answers='answers[this.index]' 
                :correct='corrects[this.index]' 
                :description='descriptions[this.index]'
                @next='handleNext'
                @result='handleResult'
            />

            <resultCard
                v-if = !this.isTest
                :know='alreadyKnow'
                :unknow='dontKnow'
                :correct='correctNum'
                @check = "drawer=true"
            />
        <!---------------------------------------------------------------->
        <!-- <transition name='el-zoom-in-center'>
            <Card
                v-show='show1' 
                :question='questions[1]'
                :answers='answers[1]' 
                :correct='corrects[1]' 
                @next='handleNext'
            />
        </transition> -->
        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :with-header="false"
            size = "40%">
            

            <div style='margin:40px'>
                <checkCard
                    v-for = "(q,index) in questions"
                    :key = "index"
                    :question='questions[index]'
                    :answers='answers[index]' 
                    :correct='corrects[index]' 
                    :myAnswers ='myAnswers[index]'
                />
                
            </div>
        </el-drawer>

</div>
</template>

<script>
import Card from './components/Card';
import resultCard from './components/resultCard';
import checkCard from './components/checkCard';


export default {
    components:{
        Card,
        resultCard,
        checkCard,
    },
    data() {
      return {
        correctNum:0,
        alreadyKnow:[],
        dontKnow:[],
        drawer:false,
        isTest:true,
        percentage:10,
        know:[],
        index:0,
                corrects:[
                    2,1,3,1,2,3,0,2,2,1
                ],
        questions:[
            '1.下列说法不正确的是：',
            '2.以下哪个约束符可用于定义成员常量：',
            '3.关于sleep()和wait()，以下描述错误的一项是：',
            '4.下面对Spring中Bean的注入说法正确的是：',
            '5.下面对Spring框架的持久化支持说法错误的是：',
            `6.在JSP中，以下的page指令设置了使用的脚本语言是Java，且导入了!java.rmi.*!和java．util.*包．正确的是：`,
            '7.在JSP中，（）动作用于将请求转发给其他JSP页面。',
            '8.下列注释方式可以再JSP中使用并且客户端无法查看的是__：',
            '9.数据库DB、数据库系统DBS、数据库管理系统DBMS 三者之间的关系是：',
            '10.根据模型应用的不同目的，可以将模型分为：'
        ],
        answers:[
            //第一题
            ['A. Double是引用数据类型',
             'B. char是基本数据类型',
             'C. String是基本数据类型 ',
             'D. double是基本数据类型'
            ],
            //第二题
            ['A. static',
             'B. final',
             'C. abstract',
             'D. No modifier can be used'
            ],
            //第三题
            ['A. sleep是线程类（Thread）的方法，wait是Object类的方法；',
             'B. sleep不释放对象锁，wait放弃对象锁；',
             'C. sleep暂停线程、但监控状态仍然保持，结束后会自动恢复；',
             'D. wait后进入等待锁定池，只有针对此对象发出notify方法后获得对象锁进入运行状态。'
            ],
            //第四题
            [
                'A. Bean根据注入方式不同可以分为构造方法注入和自动装载',
                'B. 使用构造方法注入构造对象的同时，完成依赖关系的建立',
                'C. 在关系的对象很多时，使用构造方法注入更适合',
                'D. 构造方法通过constructor-index属性来指定，在该标签下要指定索引的位置',
            ],
            //第五题
            [
                'A. Spring没有自己的持久化方案，它集合了现有的流行持久化框架',
                'B. Spring采用JDBC模板封装了JDBC的数据库操作',
                'C. Spring对各种持久化技术提供了统一的编程方式',
                'D. Spring将数据库访问的checked异常转换为运行时异常',
            ],
            //第六题
            [
                'A. ＜%＠ page Language=“Java”, import=”java.rmi.;java.uitl. ”%”>',
                'B. ＜%＠ page language=“Java” Import=”java.rmi.,java.uitl. ”%”>',
                'C. ＜%＠ page language=“Java”; import=”java.rmi.;java.uitl. ”%”>',
                'D. ＜%＠ page language=“Java” import=”java.rmi.* ,java.uitl.* ”%>',
            ],
            //第七题
            [
                'A. forward',
                'B. include',
                'C. useBean',
                'D. setProperty',
            ],
            //第八题
            [
                'A. <!—注释–>',
                'B. <%注释%>',
                'C. <%–注释–%>',
                'D. <%!注释%>',
            ],
            //第九题
            [
                'A. DB包括DBS和DBMS',
                'B. DBMS包括DB和DBS',
                'C. DBS包括DB和DBMS',
                'D. DBMS、DB和DBS之间没有关系',
            ],
            //第十题
            [
                'A. 关系模型和非关系模型',
                'B. 概念模型和数据模型',
                'C. 概念模型和关系模型',
                'D. 信息模型和非关系模型',
            ],
        ],
        descriptions:[

           [
            '解析1:',
            `基本数据类型包括byte、int、char、long、float、double、boolean和short。 `
            ],

            [
             '解析2:',
              `static 静态成员变量(在定义这个变量的类的实例中,这个变量是唯一的,即多个实例间这个变量为共享的)
               final 成员常量(必须在定义时或在构造方法中赋初值)
               final static 静态成员常量,必须在定义这个常量时给定其初始化值 `
            ],

            [
             '解析3:',
             'Notify后是进入对象锁定池，准备获得锁，而不是立即获得。'
            ],

            [
              '解析4:',
              `Spring依赖注入的两种方式是构造注入和设值注入。对于构造注入，Spring在创建Bean实例时，
              需要同时实例化其依赖的全部实例。对于复杂的依赖关系，若使用构造注入，会导致构造器过于臃肿。
              在bean元素中使用constructor-arg元素来设值属性值的构造函数注入，可以通过该元素的type属性
              指定参数类型，index属性指定该参数在构造函数参数列表中的索引位置 `
            ],

            [
             '解析5:',
             `Spring对多个持久化技术提供了集成的支持，借助于Spring框架提供的DAO抽象，
             开发者能够以统一的方式同数据访问技术（比如JDBC、Hibernate、JDO、TopLink）进行交互。
             JdbcTemplate是Spring为借助JDBC操作RDBMS而提供的实用模版类，简化了JDBC操作。Spring提供了DataAccessException，
             这个异常类对现有多种数据库访问技术的异常进行封装，为我们提供了一个与底层数据库无关的异常体系，
             因此可以方便地处理各种数据访问异常，该异常类是RuntimeException。`
            ],

            [
             '解析6:',
             `page指令对页面的某些特征进行描述，语法格式为：<%@ page 属性名1=“值1” 属性名2=“值2” …%> 
             注意：属性之间用空格表示`
            ],

            [
             '解析7:',
             `<jsp:forward>动作用来把当前的jsp页面重导到另一个页面上，用户看到的地址是当前网页的地址，内容则是另一个网页的。`
            ],

            [
             '解析8:',
              `JSP中的隐式注释有：// 注释   /*   */ 注释和<%-- 注释 --%>JSP中的显式注释有：<!—注释–> `
           
            ],

            [
             '解析9:',
             `数据库系统是指引进数据库技术后的计算机系统，它主要由5部分构成：硬件系统、数据库集合、数据库管理系统及相关软件、数据库管理员和用户。所以据此本题答案应选C。`
            ],

            [
             '解析10:',
             `根据模型的不同应用目的，可以将它分为两类或两个层次：一是概念模型（也称信息模型），二是数据模型（如网状、层次、关系模型）。
             前者是按用户的观点来对数据和信息建模，后者是按计算机系统的观点对数据建模。所以本题答案应选B。`
            ]
        
        ],
        
        
        myAnswers:[],//myAnswer存储我的每一道题答案
      };
    },
    methods:{
        handleNext(prop,myAnswer){
            //this['show'+this.index]=false;
            this.know[this.index] = prop;
            this.myAnswers[this.index] = myAnswer;
                this.index += 1;
                this.percentage+=10;
            
            
            //this['show'+this.index]=true;
            // $('.card').slideUp("1500",()=>{
            //     this.index += 1;
            //     $('.card').slideDown("1500")
            // });
        },
        handleResult(prop,myAnswer){
            this.know[this.index] = prop;
            this.myAnswers[this.index] = myAnswer;
            console.log(this.know);
            console.log(this.myAnswers);
            let countSE = 0 , countStruct = 0 , countWeb = 0, countBase = 0;
            this.know.forEach( (element,index) => {
                if (element)this.correctNum+=1;

                if(index<3){
                    if(element){
                        countSE++
                    }
                }

                if(index>=3 && index <5){
                    if(element){
                        countStruct++
                    }
                }

                if(index >= 5 && index<8){
                    if(element){
                        countWeb ++
                    }
                }

                if(index >= 8 && index<10){
                    if(element){
                        countBase ++
                    }
                }


            });

            let storeKnow = [false,false,false,false]
            if(countSE>=2){
                storeKnow[0] = true
                this.alreadyKnow.push('JavaSE')
            }else{
                this.dontKnow.push('JavaSE')
            }
            if(countWeb>=2){
                storeKnow[1] = true
                this.alreadyKnow.push('JavaWeb')
            }else{
                this.dontKnow.push('JavaWeb')
            }
            if(countStruct>=1){
                storeKnow[2] = true
                this.alreadyKnow.push('Java 常用框架')
            }else{
                this.dontKnow.push('Java 常用框架')
            }
            if(countBase>=1){
                storeKnow[3] = true
                this.alreadyKnow.push('数据库')
            }else{
                this.dontKnow.push('数据库')
            }
            

            this.isTest = false;
            this.$store.commit('changeKnow',storeKnow)
        }
    },
    mounted(){
        this.index = 0;
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
  };
</script>

<style>
.block{
    text-align: left;
    margin-bottom: 200px;
}
.block h2{
        width:fit-content;
        display: inline-block;
        padding:2px 12px 4px;
        border-bottom: 4px #FF4F4F solid;
    }
.radio{
    margin-top:5%;
    margin-bottom: 5%;
    font-family: Microsoft JhengHei;
}
.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 230px;
        margin-top: -18px;
    }
.block .activity-content{
    font-size:14px;
    line-height:24px;
    margin-bottom:-20px;
}

.el-drawer__body {
    overflow: auto;
    /* overflow-x: auto; */
}

/*2.隐藏滚动条，太丑了*/
.el-drawer__container ::-webkit-scrollbar{
    display: none;
}
</style>