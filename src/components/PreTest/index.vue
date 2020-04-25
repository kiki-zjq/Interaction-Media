<template>
    <div class="block">
        <h2>{{language=='Chinese'?'课前测试':'Pre-Course Test'}}</h2>
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
            0,1,0,3,3,1,2,1,1,0
        ],
        questions:[
            '1.下面说法种正确的是:',
            '2.在Java语言中，以下关于类的继承的描述，正确的是:',
            '3.选择设置布局管理器的选项，该选项将容器分成2行3列:',
            '4.下面关于Spring的说法中错误的是:',
            '5.下面关于数据持久化概念的描述，错误的是:',
            `6.JSP中'include'的指令的作用是把JSP程序、HTML网页或者其他( )嵌入到当前的网页中。`,
            '7.（ ）是JSP中最基本的对象，它是用户与服务器进行交互的基础。',
            '8.下列哪种connector运行模式能利用Java的异步IO处理，可以通过少量的线程处理大量的请求( )',
            '9.在MySQL内部有4种常见日志，哪种日志是不能直接cat或more文本查阅日志内容？',
            '10.当使用MongoDB应用场景中，需要使用全文检索，需建立何种索引？'
        ],
        answers:[
            //第一题
            ['A. Java程序的main方法必须写到class里面',
             'B. Java程序可以有多个main方法',
             'C. Java程序中类名必须与文件名一样',
             'D. Java程序中的main方法内如果只有一条语句，可以不用大括号括起来'
            ],
            //第二题
            ['A. 一个类可以继承多个父类',
             'B. 一个类可以拥有多个子类',
             'C. 子类可以使用父类的所有方法',
             'D. 子类一定比父类有更多的成员方法'
            ],
            //第三题
            ['A. setLayout(new GridLayout(2, 3))',
             'B. setLayout(new GridLayout(3, 2))',
             'C. setLayout(3, 2)',
             'D. setLayout(new FlowLayout(3, 2))'
            ],
            //第四题
            [
                'A. Spring是一系列轻量级Java EE框架的集合',
                'B. Spring中包含一个“依赖注入”模式的实现',
                'C. 使用Spring可以实现声明式事务',
                'D. Spring提供了AOP方式的日志系统',
            ],
            //第五题
            [
                'A. 保存在内存中数据的状态是瞬时状态',
                'B. 持久状态的数据在关机后数据依然存在',
                'C. 数据可以由持久状态转换为瞬时状态',
                'D. 将数据转化为持久状态的机制称为数据持久化',
            ],
            //第六题
            [
                'A. 可执行程序',
                'B. 文本文件',
                'C. 批处理文件',
                'D. ASP代码',
            ],
            //第七题
            [
                'A. Response对象',
                'B. Session对象',
                'C. Application对象',
                'D. Request对象',
            ],
            //第八题
            [
                'A. BIO',
                'B. NIO',
                'C. APR',
                'D. None',
            ],
            //第九题
            [
                'A. 错误日志(err-log)',
                'B. 二进制日志(bin-log)',
                'C. 查询日志(query-log)',
                'D. 慢查询日志(slow-log)',
            ],
            //第十题
            [
                'A. 文本索引',
                'B. 哈希索引',
                'C. 地理位置索引',
                'D. 子文档索引',
            ],
        ],
        descriptions:[

           [
            '解析1:',
            'A: 正确',
            'B: Java程序中只能有一个main方法',
            'C: 如果一个编译单元(文件)中含有public的类,则文件名必须与类名一致,如果没有public类,则文件可以随意命名',
            'D: main函数也是一个函数，大括号是函数的必要组成部分',
            ],

            [
             '解析2:',
              'A: 一个类只能继承一个父类',
              'B: 正确',
              'C: 子类不能使用父类private封装的方法',
              'D: 子类可以和父类成员方法数量相同',
            ],

            [
             '解析3:',
             'GridLayout（row，column），前面的参数是row，后面的参数是column'
            ],

            [
              '解析4:',
              `spring没有提供AOP方式的日志系统 AOP为Aspect Oriented Programming的缩写，意为：面向切面编程，
              通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。AOP是OOP的延续，是软件开发中的
              一个热点，也是Spring框架中的一个重要内容，是函数式编程的一种衍生范型。 Spring通过对AOP的支持，
              借助log4j等Apache开源组件实现了日志系统。`
            ],

            [
             '解析5:',
             `数据持久化就是将内存中的数据模型转换为存储模型,以及将存储模型转换为内存中的数据模型的统称. 
             数据模型可以是任何数据结构或对象模型，故不符合D选项。`
            ],

            [
             '解析6:',
             `include指令用于在当前JSP中包含其他文件，被包含的文件可以是JSP、HTML或文本文件，在JAVA WEB
             中可使用include指令对页面进行布局。`
            ],

            [
             '解析7:',
             `首先ABCD都是JSP的基本内置对象。其中application对象可以实现Web应用程序中多个客户端的信息共享，是用户与服务器进行交互的基础。`
            ],

            [
             '解析8:',
             'A: BIO: 一个线程处理一个请求',
             'B: NIO: 利用Java的异步IO处理，可以通过少量的线程处理大量的请求',
             'C: APR: 即Apache Portable Runtime，从操作系统层面解决io阻塞问题',
             'D: 不满足题意',   
            ],

            [
             '解析9:',
             `二进制日志是二进制的，所以我们不能直接使用cat或more命令进行查看，而是需要通过一些别的命令查看其内容`
            ],

            [
             '解析10:',
             `要使Mongodb能够进行全文搜索，首先要对搜索的字段建立文本索引。建立文本索引的关键字是text，我们既可以建立单个字段的文本索引，
             也可以建立包含多个字段的复合文本索引`
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