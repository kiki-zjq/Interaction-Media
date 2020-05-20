<template>

    <div class='SyntaxContent'>
        <h2>MongoDB</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            MongoDB 介绍
        </div>

        <span style='margin-left:30px'>MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。</span><br/>
        <br/><span style='margin-left:30px'>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。</span>

        <img style="margin-top:30px;" width="80%" src='./Mongo1.png'/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            NoSQL 介绍
        </div>

        <span style='margin-left:30px'>NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是SQL"。</span><br/>
        <br/><span style='margin-left:30px'>在现代的计算系统上每天网络上都会产生庞大的数据量。这些数据有很大一部分是由关系数据库管理系统（RDBMS）来处理。 1970年 E.F.Codd's提出的关系模型的论文 "A relational model of data for large shared data banks"，这使得数据建模和应用程序编程更加简单。</span><br/>
        <br/><span style='margin-left:30px'>通过应用实践证明，关系模型是非常适合于客户服务器编程，远远超出预期的利益，今天它是结构化数据存储在网络和商务应用的主导技术。</span><br/>
        <br/><span style='margin-left:30px'>NoSQL 是一项全新的数据库革命性运动，早期就有人提出，发展至2009年趋势越发高涨。NoSQL的拥护者们提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入。</span>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            MongoDB 基础
        </div>

        <span style='margin-left:30px'>MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。</span><br/>
        <span style='margin-left:30px'>MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。</span><br/>
        <img style="margin-top:30px;" width="80%" src='./Mongo2.png'/>
        
                <el-divider></el-divider>
        <ul style='margin-left:30px;line-height:35px'>
                <li>MongoDB 是一个面向文档存储的数据库，操作起来比较简单和容易。</li>
                <li>你可以在MongoDB记录中设置任何属性的索引 (如：FirstName="Sameer",Address="8 Gandhi Road")来实现更快的排序。</li>
                <li>你可以通过本地或者网络创建数据镜像，这使得MongoDB有更强的扩展性。</li>
                <li>如果负载的增加（需要更多的存储空间和更强的处理能力） ，它可以分布在计算机网络中的其他节点上这就是所谓的分片。</li>
                <li>Mongo支持丰富的查询表达式。查询指令使用JSON形式的标记，可轻易查询文档中内嵌的对象及数组。</li>
                <li>MongoDb 使用update()命令可以实现替换完成的文档（数据）或者一些指定的数据字段 。</li>
                <li>Mongodb中的Map/reduce主要是用来对数据进行批量处理和聚合操作。</li>
                <li>Map和Reduce。Map函数调用emit(key,value)遍历集合中所有的记录，将key与value传给Reduce函数进行处理。</li>
                <li>Map函数和Reduce函数是使用Javascript编写的，并可以通过db.runCommand或mapreduce命令来执行MapReduce操作。</li>
                <li>GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件。</li>
                <li>MongoDB允许在服务端执行脚本，可以用Javascript编写某个函数，直接在服务端执行，也可以把函数的定义存储在服务端，下次直接调用即可。</li>
                <li>MongoDB支持各种编程语言:RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。</li>
        </ul>
        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>


        <!---------------------------------------------------------->
        

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
                    <b>Q: Which of the following is a valid identifier?</b>
                </div>
                
                <div class="test-select" style='margin:20px 0'>
                    <el-radio v-model="select" label="1" style='display:block;line-height:36px;'>default</el-radio>
                    <el-radio v-model="select" label="2" style='display:block;line-height:36px;'>123abc</el-radio>
                    <el-radio v-model="select" label="3" style='display:block;line-height:36px;'>_$112as</el-radio>
                    <el-radio v-model="select" label="4" style='display:block;line-height:36px;'>-$kiki</el-radio>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("MongoDB 介绍");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("NoSQL 介绍");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("MongoDB 基础");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("Java annotations");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("MongoDB 介绍");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("NoSQL 介绍");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("MongoDB 基础");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("Java annotations");break;
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
                case 1:this.$emit('note','MongoDB 介绍');break;
                case 2:this.$emit('note','NoSQL 介绍');break;
                case 3:this.$emit('note','MongoDB 基础');break;
                case 4:this.$emit('note','Java annotations');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaSE/ObjectOrient#header');
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