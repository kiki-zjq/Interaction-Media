<template>

    <div class='SyntaxContent'>
        <h2>Spring</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            Spring 介绍
        </div>

        <span style='margin-left:30px'>Spring 是一个开源框架，是为了解决企业应用程序开发复杂性而创建的。框架的主要优势之一就是其分层架构，分层架构允许您选择使用哪一个组件，同时为 J2EE 应用程序开发提供集成的框架。</span><br/>
        <br/><span style='margin-left:30px'>在这篇由三部分组成的 Spring 系列 的第 1 部分中，我将介绍 Spring 框架。我先从框架底层模型的角度描述该框架的功能，然后将讨论两个最有趣的模块：Spring 面向方面编程（AOP）和控制反转 （IOC） 容器。接着将使用几个示例演示 IOC 容器在典型应用程序用例场景中的应用情况。这些示例还将成为本系列后面部分进行的展开式讨论的基础，在本文的后面部分，将介绍 Spring 框架通过 Spring AOP 实现 AOP 构造的方式。</span>
        <br/><img style="margin-top:30px;" width="80%" src='./Spring1.png'/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            Spring 框架结构
        </div>

        <span style='margin-left:30px'>Spring 框架是一个分层架构，由 7 个定义良好的模块组成。Spring 模块构建在核心容器之上，核心容器定义了创建、配置和管理 bean 的方式，如下图所示。</span><br/>
        
        <img style="margin-top:30px;" width="80%" src='./Spring2.png'/>
        <br/><span style='margin-left:30px'>组成 Spring 框架的每个模块（或组件）都可以单独存在，或者与其他一个或多个模块联合实现。 </span><br/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            IOC 与 AOP
        </div>

        <span style='margin-left:30px'><b>控制反转模式（也称作依赖性介入）</b>的基本概念是：不创建对象，但是描述创建它们的方式。在代码中不直接与对象和服务连接，但在配置文件中描述哪一个组件需要哪一项服务。容器 （在 Spring 框架中是 IOC 容器） 负责将这些联系在一起。 </span><br/>
        <br/><span style='margin-left:30px'>在典型的 IOC 场景中，容器创建了所有对象，并设置必要的属性将它们连接在一起，决定什么时间调用方法。下表列出了 IOC 的一个实现模式。</span><br/>
        <img style="margin-top:30px;" width="80%" src='./Spring3.png'/>
         <br/>
         <span style='margin-left:30px'>Spring 框架的 IOC 容器采用类型 2 和类型3 实现。</span>
         <el-divider></el-divider>

        <br/><span style='margin-left:30px'><b>面向方面的编程</b>，即 AOP，是一种编程技术，它允许程序员对横切关注点或横切典型的职责分界线的行为（例如日志和事务管理）进行模块化。AOP 的核心构造是方面，它将那些影响多个类的行为封装到可重用的模块中。</span>
        <br/><br/><span style='margin-left:30px'>AOP 和 IOC 是补充性的技术，它们都运用模块化方式解决企业应用程序开发中的复杂问题。在典型的面向对象开发方式中，可能要将日志记录语句放在所有方法和 Java 类中才能实现日志功能。</span>
        <br/><br/><span style='margin-left:30px'>在 AOP 方式中，可以反过来将日志服务模块化，并以声明的方式将它们应用到需要日志的组件上。当然，优势就是 Java 类不需要知道日志服务的存在，也不需要考虑相关的代码。所以，用 Spring AOP 编写的应用程序代码是松散耦合的。 </span>
        <br/><br/><span style='margin-left:30px'>AOP 的功能完全集成到了 Spring 事务管理、日志和其他各种特性的上下文中。</span>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title forth-title'>
            IOC 容器
        </div>

        <span style='margin-left:30px'>Spring 设计的核心是 org.springframework.beans 包，它的设计目标是与 JavaBean 组件一起使用。这个包通常不是由用户直接使用，而是由服务器将其用作其他多数功能的底层中介。下一个最高级抽象是 BeanFactory 接口，它是工厂设计模式的实现，允许通过名称创建和检索对象。BeanFactory 也可以管理对象之间的关系。</span>
        <br /><br />
        <span style='margin-left:30px'>BeanFactory 支持两个对象模型。</span>

        <ul style='margin-left:30px;line-height:35px'>
            <li><b>单态</b> 模型提供了具有特定名称的对象的共享实例，可以在查询时对其进行检索。Singleton 是默认的也是最常用的对象模型。对于无状态服务对象很理想。</li>    
            <li><b>原型</b> 模型确保每次检索都会创建单独的对象。在每个用户都需要自己的对象时，原型模型最适合。</li>
        </ul>

        <span style='margin-left:30px'>bean 工厂的概念是 Spring 作为 IOC 容器的基础。IOC 将处理事情的责任从应用程序代码转移到框架。正如我将在下一个示例中演示的那样，Spring 框架使用 JavaBean 属性和配置数据来指出必须设置的依赖关系。</span>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(4)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(4)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(4)'></el-button>
        </div>
        <!---------------------------------------------------------->
        <el-divider></el-divider>
        
        <div class='end-block'>
            
            <el-button type="danger" @click="dialogVisible = true" round>本章报告</el-button>
            <el-button type="warning" @click="testVisible = true" round>章节检测</el-button>
            <el-button type="success" @click="nextPage()" round>下一章</el-button>
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
                    <b>本章节没有问题！赶快去学习下一章节吧~</b>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("Spring 介绍");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Spring 框架结构");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("IOC 与 AOP");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("IOC 容器");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("Spring 介绍");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Spring 框架结构");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("IOC 与 AOP");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("IOC 容器");break;
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
                case 1:this.$emit('note','Spring 介绍');break;
                case 2:this.$emit('note','Spring 框架结构');break;
                case 3:this.$emit('note','IOC 与 AOP');break;
                case 4:this.$emit('note','IOC 容器');break;
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