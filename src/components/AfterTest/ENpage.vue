<template>
    <div class="block">
        <h2>{{language=='Chinese'?'课后测试':'After-Course Test'}}</h2>
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
import Card from './components/CardEN';
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
            '1.Which of the following statements is incorrect？',
            '2.Which of the following constraints can be used to define a member constant？',
            '3.Regarding sleep() and wait(), which of the following statements is wrong？',
            '4.Which of the following statements about Bean injection in Spring is correc？',
            '5.Which of the following statements about persistence support for the Spring framework is wrong:',
            `6.In JSP, the following page directive sets the scripting language to be used to be Java, and imports it!Java rmi. *!And java.util.* packages.The right is`,
            '7.In JSP, the () action is used to forward requests to other JSP pages.',
            '8.Which of the following annotation methods can be used in a JSP and cannot be viewed by the client？',
            '9.What is the relationship between database DB, database system DBS, database management system DBMS？',
            '10.According to the different purposes of model application, the model can be divided into:'
        ],
        answers:[
            //第一题
            ['A. Double is a reference data type',
             'B. char is the basic data type',
             'C. String is the basic data type ',
             'D. double is the basic data type'
            ],
            //第二题
            ['A. static',
             'B. final',
             'C. abstract',
             'D. No modifier can be used'
            ],
            //第三题
            ['A. Sleep is a method of the Thread class, and wait is a method of the Object class；',
             'B. Sleep does not release the object lock, wait to abandon the object lock; ',
             'C. Sleep suspends the thread, but the monitor state remains, and automatically resumes when it is over.',
             'D. Enter the wait lock pool after wait, and only get the object lock into running state after issuing a notify method against this object.'
            ],
            //第四题
            [
                'A. Beans can be divided into constructor injection and automatic loading depending on how they are injected',
                'B. At the same time, the dependency relationship is established by using constructor injection to construct the object',
                'C. Constructor injection is more appropriate when there are many objects in the relationship',
                'D. The constructor is specified through the constructor-index property, under which the location of the index is specified',
            ],
            //第五题
            [
                'A. Spring does not have its own persistence solution, but rather a collection of existing popular persistence frameworks',
                'B. Spring USES JDBC templates to encapsulate JDBC database operations',
                'C. Spring provides a unified programming approach to various persistence technologies',
                'D. Spring converts checked exceptions for database access to runtime exceptions',
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
                'A. <!—comment–>',
                'B. <%comment%>',
                'C. <%–comment–%>',
                'D. <%!comment%>',
            ],
            //第九题
            [
                'A. DB includes DBS and DBMS',
                'B. DBMS includes DB and DBS',
                'C. DBS includes DB and DBMS',
                'D. DBMS、DB and DBS do not have relationship',
            ],
            //第十题
            [
                'A. Relational and non-relational models',
                'B. Conceptual model and data model',
                'C. Conceptual and relational models',
                'D. Information model and non-relational model',
            ],
        ],
        descriptions:[

           [
            'Analysis 1:',
            `Basic data types include byte、int、char、long、float、double、boolean and short。 `
            ],

            [
             'Analysis 2:',
              `Static static member variable (this variable is unique, i.e. this variable is Shared between multiple instances)
               Final member constants (must be assigned an initial value at definition time or in the constructor)
               A final static member constant, whose initialization value must be given when the constant is defined.`
            ],

            [
             'Analysis 3:',
             'Notify then enters the object lock pool and is ready to acquire the lock, rather than immediately.'
            ],

            [
              'Analysis 4:',
              `The two ways of Spring dependency injection are 
              to construct an injection and to set an injection.
              For construction injection, Spring needs to instantiate all 
              instances of its dependencies at the same time as it creates 
              the Bean instance.For complex dependencies, the use of construct 
              injection can lead to overstaffing of the constructor.Constructor-arg 
              elements are used in the bean element to set the constructor injection of 
              the value attribute value, with the type attribute of the element specifying 
              the parameter type, and the index attribute specifying the index position of 
              the parameter in the constructor parameter list`
            ],
            [
             'Analysis 5:',
             `Spring provides integrated support for multiple persistence technologies, 
             and with the DAO abstraction provided by the Spring framework, developers can 
             interact with data access technologies (such as JDBC, Hibernate, JDO, TopLink) in a unified way.
             JdbcTemplate is a utility template class provided by Spring for manipulating RDBMS with JDBC, 
             simplifying JDBC operations.Spring provides DataAccessException, an exception class 
             that encapsulates the exceptions of many existing database access technologies 
             and provides us with an exception system that is independent of the underlying database, 
             so we can easily handle various data access exceptions. The exception class is RuntimeException.`
            ],

            [
             'Analysis 6:',
             `The page directive describes some features of the page in the following syntax: 
             <% @page property name 1= "value 1" property name 2= "value 2"...Note: Spaces are used between properties`
            ],

            [
             'Analysis 7:',
             `The < JSP :forward> action is used to redirect the current JSP page to another page, 
             where the user sees the address of the current page and the content of the other page.`
            ],

            [
             'Analysis 8:',
              `JSP implicit in the annotations are: / / comment / * * / comment and - comments - % > 
              < % JSP in explicit annotations are: <!- comments - > `
           
            ],

            [
             'Analysis 9:',
             `Database system refers to the computer system after the introduction of database technology, 
             it is mainly composed of five parts: hardware system, database set, database management system and related software, 
             database administrator and user.C) it is a good idea. D) it is a good idea.`
            ],

            [
             'Analysis 10:',
             `According to the different application purposes of the model, 
             it can be divided into two categories or two levels: one is the conceptual model (also known as information model), 
             the other is the data model (such as network, hierarchy, relational model).The former models data 
             and information from the user's point of view, while the latter models data from the computer system's point of view.B) 
             it is a good idea.`
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
                this.alreadyKnow.push('Java Frame')
            }else{
                this.dontKnow.push('Java Frame')
            }
            if(countBase>=1){
                storeKnow[3] = true
                this.alreadyKnow.push('Database')
            }else{
                this.dontKnow.push('Database')
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