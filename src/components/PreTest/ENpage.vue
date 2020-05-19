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
            0,1,0,3,3,1,2,1,1,0
        ],
        questions:[
            '1.Which of the following statements is true:',
            '2.In the Java language, the following description of class inheritance is correct:',
            '3.Select the option to set up the layout manager, which divides the container into two rows and three columns:',
            '4.What is wrong with the following statement about Spring:',
            '5.The following description of the concept of data persistence, which is wrong:',
            `6.The 'include' directive in a JSP inserts a JSP program, HTML page, or other () into the current page.`,
            '7.() is the most basic object in JSP, which is the basis for user interaction with the server.',
            `8.Which of the following connector running modes can take advantage of Java's asynchronous IO processing, allowing a small number of threads to process a large number of requests ()`,
            `9.There are 4 kinds of common logs in MySQL. Which one can't directly refer to the log contents in cat or more text?`,
            `10.When using MongoDB in application scenarios, full-text retrieval is needed. What kind of index should be established?`
        ],
        answers:[
            //The first question
            [`A. The Java program's main method must be written into class`,
             'B. Java programs can have multiple main methods',
             'C. The class name in a Java program must be the same as the file name',
             'D. If there is only one statement inside the main method in a Java program, it can be enclosed without curly braces'
            ],
            //The second question
            ['A. A class can inherit from more than one parent class',
             'B. A class can have multiple subclasses',
             'C. A subclass can use all the methods of its parent class',
             'D. A subclass must have more member methods than a parent class'
            ],
            //The third question
            ['A. setLayout(new GridLayout(2, 3))',
             'B. setLayout(new GridLayout(3, 2))',
             'C. setLayout(3, 2)',
             'D. setLayout(new FlowLayout(3, 2))'
            ],
            //The fourth question
            [
                'A. Spring is a collection of lightweight Java EE frameworks',
                'B. An implementation of the "dependency injection" pattern is included in Spring',
                'C. Declarative transactions can be implemented using Spring',
                'D. Spring provides an aop-style logging system',
            ],
            //The fifth problem
            [
                'A. The state of data held in memory is instantaneous',
                'B. Persistent state data remains after shutdown',
                'C. Data can be transformed from a persistent state to a transient state',
                'D. The mechanism for converting data to a persistent state is called data persistence',
            ],
            //The sixth question
            [
                'A. Executable program',
                'B. Text file',
                'C. Batch file',
                'D.The ASP code',
            ],
            //The seventh question
            [
                'A. The Response object',
                'B. The Session object',
                'C. The Application object',
                'D. The Request object',
            ],
            //The eighth problem
            [
                'A. BIO',
                'B. NIO',
                'C. APR',
                'D. None',
            ],
            //The ninth question
            [
                'A.The error log(err-log)',
                'B. Binary log(bin-log)',
                'C. Query log(query-log)',
                'D. Slow query log(slow-log)',
            ],
            //The tenth question
            [
                'A. The text index',
                'B. The hash index',
                'C. Geographical location index',
                'D. Subdocument index',
            ],
        ],
        descriptions:[

           [
            'Analysis 1:',
            'A: True',
            'B: There can be only one main method in a Java program',
            'C: If a compilation unit (file) contains a public class, the file name must be the same as the class name, and if there is no public class, the file can be named as you like',
            'D: The main function is also a function, and curly braces are a necessary part of the function',
            ],

            [
             'Analysis 2:',
              'A: A class can inherit from only one parent class',
              'B: True',
              'C:Subclasses cannot use methods encapsulated by a parent class, private',
              'D: A subclass can have the same number of member methods as a parent class',
            ],

            [
             'Analysis 3:',
             'GridLayout（row，column）, the first parameter is row, and the second parameter is column'
            ],

            [
              'Analysis 4:',
              `Spring does not provide an aop-style logging system. AOP stands for Aspect Oriented Programming.
               A technique for uniform maintenance of program functions through precompilation and runtime dynamic proxies. AOP is a continuation of OOP and is in software development. 
             A hot spot, and an important part of the Spring framework, is a derivative paradigm of functional programming. Spring, through its support for AOP,The logging system is implemented 
             with the help of Apache open source components such as log4j.`
            ],

            [
             'Analysis 5:',
             `Data persistence is a general term used to convert the data model in memory to the storage model and the storage model to the data model in memory. 
             The data model can be any data structure or object model, so it does not match option D.`
            ],

            [
             'Analysis 6:',
             `The include directive is used to include other files in the current JSP, which can be JSP, HTML, or text files. In the JAVA WEB, you can use the include directive to lay out pages.`
            ],

            [
             'Analysis 7:',
             `First of all, ABCD is the basic built-in object of JSP. Among them, the application object can realize the information sharing of multiple clients in the Web application, which is the basis for the user to interact with the server. `
            ],

            [
             'Analysis 8:',
             'A: BIO: A thread processes a request',
             `B: NIO: With Java's asynchronous IO processing, a large number of requests can be processed through a small number of threads`,
             'C: APR: Apache Portable Runtime solves the IO blocking problem at the operating system level',
             'D: Does not satisfy the question',   
            ],

            [
             'Analysis 9:',
             `The binary log is binary, so we can't view it directly using the cat or more commands, but we need to view its contents through some other command`
            ],

            [
             'Analysis 10:',
             `To enable Mongodb to perform full-text search, the first step is to establish a text index of the searched fields. The key word for text indexing is text. 
              We can create either a text index for a single field or a composite text index with multiple fields`
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