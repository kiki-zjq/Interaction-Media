<template>

    <div class='SyntaxContent'>
        <h2>Spring</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            Spring Introduction
        </div>

        <span style='margin-left:30px'>Spring is an open source framework created to address the complexity of enterprise application development. One of the main advantages of a framework is its layered architecture, which allows you to choose which components to use while providing an integrated framework for J2EE application development.</span><br/>
        <br/><span style='margin-left:30px'>In part 1 of this three-part Spring series, I'll introduce you to the Spring framework. I'll describe the framework's capabilities from the perspective of its underlying model, and then discuss the two most interesting modules: Spring aspect-oriented programming (AOP) and the inversion of control (IOC) container. We'll then use several examples to demonstrate how the IOC container works in a typical application use case scenario. These examples will also form the basis for an expanded discussion later in this series, where you'll see how the Spring framework implements AOP constructs through Spring AOP.</span>
        
        <br/><img style="margin-top:30px;" width="80%" src='./Spring1.png'/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            Spring framework architecture
        </div>

        <span style='margin-left:30px'>The Spring framework is a layered architecture consisting of seven well-defined modules. The Spring modules are built on top of the core container, which defines how beans are created, configured, and managed, as shown in figure </span><br/>
        
        <img style="margin-top:30px;" width="80%" src='./Spring2.png'/>
        <br/><span style='margin-left:30px'>Each module (or component) that makes up the Spring framework can exist independently or be implemented jointly with one or more other modules. </span><br/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            IOC and AOP
        </div>

        <span style='margin-left:30px'>The basic concept of the <b>inversion of control pattern (also known as dependency intervention)</b> is: do not create objects, but describe how to create them. It does not directly connect to objects and services in the code, but describes which components need which services in the configuration file. The container (in the case of the Spring framework, the IOC container) is responsible for tying these things together.
In a typical IOC scenario, the container creates all the objects, sets the necessary properties to wire them together, and decides when to call the method. </span><br/>
        <br/><span style='margin-left:30px'>following table lists an implementation pattern for IOC.</span><br/>
        <img style="margin-top:30px;" width="80%" src='./Spring3.png'/>
         <br/>
         <span style='margin-left:30px'>The Spring framework's IOC container is implemented using types 2 and 3.</span>
         <el-divider></el-divider>

        <br/><span style='margin-left:30px'><b>Aspect-oriented programming</b>, or AOP, is a programming technique that allows programmers to modularize crosscutting concerns or behaviors that crosscut typical lines of responsibility, such as logging and transaction management. The core construct of AOP is the aspect, which encapsulates the behavior that affects multiple classes into reusable modules.</span>
        <br/><br/><span style='margin-left:30px'>AOP and IOC are complementary technologies that both apply a modular approach to complex problems in enterprise application development. In a typical object-oriented development approach, logging might be implemented by placing logging statements in all methods and Java classes.</span>
        <br/><br/><span style='margin-left:30px'>In an AOP approach, logging services can be modularized in turn and applied declaratively to the components that require logging. The advantage, of course, is that the Java class does not need to know about the existence of the logging service, nor does it need to consider the relevant code. </span>
        <br/><br/><span style='margin-left:30px'>As a result, application code written with Spring AOP is loosely coupled.AOP functionality is fully integrated into the context of Spring transaction management, logging, and various other features.</span>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title forth-title'>
            IOC container
        </div>

        <span style='margin-left:30px'>Spring design is the core of the org. Spring framework. Beans bag, its design goal is to use with JavaBean component. This package is usually not used directly by the user, but is used by the server as an underlying mediation for most of the other functions. The next highest level of abstraction is the Bean Factory interface, an implementation of the factory design pattern that allows objects to be created and retrieved by name. The Bean Factory can also manage relationships between objects.</span>
        <br /><br />
        <span style='margin-left:30px'>The Bean Factory supports two object models.</span>

        <ul style='margin-left:30px;line-height:35px'>
            <li><b>The singleton model</b> provides a Shared instance of an object with a specific name that can be retrieved at query time. Singleton is the default and most commonly used object model. Ideal for stateless service objects.</li>    
            <li><b>The prototype model</b> ensures that a separate object is created for each retrieval. The prototype model is best when each user needs their own object.</li>
        </ul>

        <span style='margin-left:30px'>The concept of a bean factory is the basis for Spring as an IOC container. The IOC shifts the responsibility for handling things from the application code to the framework. As I'll demonstrate in the next example, the Spring framework USES JavaBean properties and configuration data to indicate dependencies that must be set.</span>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(4)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(4)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(4)'></el-button>
        </div>
        <!---------------------------------------------------------->
        <el-divider></el-divider>
        
        <div class='end-block'>
            
            <el-button type="danger" @click="dialogVisible = true" round>Chapter Reports</el-button>
            <el-button type="warning" @click="testVisible = true" round>Chapter Test</el-button>
            <el-button type="success" @click="nextPage()" round>Next Chapter</el-button>
        </div>
        <!---------------------------------------------------------->

        <el-dialog
            title="Chapter Reports"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <div v-if='know.length!=0||unknow.length!=0'>
                <span v-if='know.length!=0'>
                <b>Already learned:</b> <span style='font-weight:bold;color:#67C23A;margin-right:1em' v-for="(k,index) in know" :key="index">{{k}} </span>
                </span>
                <br /><br />

                <span v-if='unknow.length!=0'>
                <b>Already highlighted:</b> <span style='font-weight:bold;color:#E6A23C;margin-right:1em' v-for="(u,index) in unknow" :key="index">{{u}} </span>
                </span>
            </div>

            <div v-if='know.length==0&&unknow.length==0'>
                <b>This chapter has not been marked yet! Start this chapter soon~</b>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
            </el-dialog>

            <!---------------------------------------------------------->
        <el-dialog
            title="Chapter Test"
            :visible.sync="testVisible"
            width="30%"
            :before-close="handleClose"
            >
            <el-card class="box-card">
                <div class="test-question">
                    <b>There is no question in this chapter! Just go ahead~</b>
                </div>
                

                <div class="test-confirm" style='text-align:right'>
                    <el-button type="primary" @click="testAnswer" >Confirm</el-button>
                </div>

            </el-card>

        </el-dialog>
    </div>

</template>



<script>
export default {
     data() {
      return {
        select:-1,
        dialogVisible: false,
        testVisible: false,
        know : [],
        unknow:[],
      };
    },

    methods:{
        clickKnow(value){

            switch(value){
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("Spring Introduction");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Spring framework architecture");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("IOC and AOP");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("IOC container");break;
            }

            this.know = Array.from(new Set(this.know))

            this.$notify({
                title: 'Success',
                message: 'You have learned this section',
                type: 'success'
            });
        },

        clickUnknow(value){

            switch(value){
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("Spring Introduction");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Spring framework architecture");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("IOC and AOP");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("IOC container");break;
            }

            this.unknow = Array.from(new Set(this.unknow))

            this.$notify({
                title: 'Highlight',
                message: 'You have highlighted this section',
                type: 'warning'
            });
        },

        knowPush(value){
            this.know.push(value)
            if(this.unknow.indexOf(value)!=-1){
                this.unknow.splice(this.unknow.indexOf(value),1);
            }
        },
        unknowPush(value){
            this.unknow.push(value)
            if(this.know.indexOf(value)!=-1){
                this.know.splice(this.know.indexOf(value),1);
            }
        },
        testAnswer(){
            if(this.select==3){
                this.$message({
                    message: `Congratulations. You're right!`,
                    type: 'success'
                });
            }else{
                 this.$message.error(`Oops! You're wrong.`);
            }
        },

        handleClose(){
            this.select = -1;
            this.testVisible = false;
        },
        clickNote(value){
            switch(value){
                case 1:this.$emit('note','Spring Introduction');break;
                case 2:this.$emit('note','Spring framework architecture');break;
                case 3:this.$emit('note','IOC and AOP');break;
                case 4:this.$emit('note','IOC container');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaFrame/MyBatis#header');
        }

    },
}
</script>


<style scoped>
    .SyntaxContent{
        text-align:left;
        line-height:30px;
    }

    .SyntaxContent h2{
        width:fit-content;
        display: inline-block;
        padding:2px 12px 4px;
        border-bottom: 4px #FF4F4F solid;
    }
    
    .sub-title{
        margin-top:5%;
        margin-bottom: 5%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }

    .code-block{
        color:white;
        margin-top:20px;
        margin-left:20px;
        margin-bottom: 20px;
        min-height:100px;
        width:80%;
        background-color: #292A2B;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        padding:16px;
        font-size:15px;
        line-height:1.5;
        font-family: Inter, system-ui, sans-serif;
    }

    .mark-block{
        width:80%;
        margin-top:50px;
        margin-left:20px;
        margin-bottom: 20px;
        text-align: end
    }
    .end-block{
        width:80%;
        margin-top:50px;
        margin-left:20px;
        margin-bottom: 100px;
        text-align: center
    }
</style>