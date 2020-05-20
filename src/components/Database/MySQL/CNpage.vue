<template>

    <div class='SyntaxContent'>
        <h2>MySQL</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            MySQL介绍
        </div>

        <span style='margin-left:30px'>MySQL 是最流行的关系型数据库管理系统，在 WEB 应用方面 MySQL 是最好的 RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。</span><br/>
        <span style='margin-left:30px'>在本教程中，会让大家快速掌握 MySQL 的基本知识，并轻松使用 MySQL 数据库。</span>
        <img style="margin-top:30px;" width="80%" src='./Mysql.png'/>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            什么是数据库？
        </div>

        <span style='margin-left:30px'>数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。 </span><br/>
        <span style='margin-left:30px'>每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。</span><br/>
        <span style='margin-left:30px'>我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。</span><br/>
        <span style='margin-left:30px'>所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。</span><br/>
        <span style='margin-left:30px'>RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>数据以表格的形式出现</li>
            <li>每行为各种记录名称</li>
            <li>每列为记录名称所对应的数据域</li>
            <li>许多的行和列组成一张表单</li>
            <li>若干的表单组成database</li>
        </ul>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            MySQL 数据库
        </div>

        <span style='margin-left:30px'>MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>MySQL 是开源的，所以你不需要支付额外的费用。</li>
            <li>MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。</li>
            <li>MySQL 使用标准的 SQL 数据语言形式。</li>
            <li>MySQL 可以运行于多个系统上，并且支持多种语言。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。</li>
            <li>MySQL 对PHP有很好的支持，PHP 是目前最流行的 Web 开发语言。</li>
            <li>MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 4GB，64 位系统支持最大的表文件为8TB。</li>
            <li>MySQL 是可以定制的，采用了 GPL 协议，你可以修改源码来开发自己的 MySQL 系统。</li>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("MySQL介绍");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("什么是数据库？");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("MySQL 数据库");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("MySQL介绍");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("什么是数据库？");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("MySQL 数据库");break;
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
                case 1:this.$emit('note','MySQL介绍');break;
                case 2:this.$emit('note','什么是数据库？');break;
                case 3:this.$emit('note','MySQL 数据库');break;
            }
        },
        nextPage(){
            this.$router.push('/Database/MongoDB#header');
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