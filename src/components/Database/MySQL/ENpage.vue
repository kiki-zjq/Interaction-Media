<template>

    <div class='SyntaxContent'>
        <h2>MySQL</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            MySQL Instruction
        </div>

        <span style='margin-left:30px'>MySQL is the most popular relational database management system. In terms of WEB application, MySQL is one of the best RDBMS (Relational Database Management System: relational database management system) application software.</span><br/>
        <span style='margin-left:30px'>In this tutorial, you will quickly master the basic knowledge of MySQL and easily use the MySQL database.</span>
        <img style="margin-top:30px;" width="80%" src='./Mysql.png'/>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            What is database?
        </div>

        <span style='margin-left:30px'>Database (Database) is a warehouse that organizes, stores and manages data according to the data structure. </span><br/>
        <span style='margin-left:30px'>Each database has one or more different APIs for creating, accessing, managing, searching, and copying saved data.</span><br/>
        <span style='margin-left:30px'>We can also store data in files, but the speed of reading and writing data in files is relatively slow.</span><br/>
        <span style='margin-left:30px'>Therefore, now we use relational database management system (RDBMS) to store and manage large amounts of data. The so-called relational database is a database based on a relational model, and uses the mathematical concepts and methods such as set algebra to process the data in the database.</span><br/>
        <span style='margin-left:30px'>RDBMS is the characteristics of the relational database management system (Relational Database Management System):</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>The data appears in the form of a table</li>
            <li>Various record names for each line</li>
            <li>Each column is the data field corresponding to the record name</li>
            <li>Many rows and columns form a form.</li>
            <li>Several forms make up the database</li>
        </ul>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            MySQL database
        </div>

        <span style='margin-left:30px'>MySQL is a relational database management system developed by the Swedish MySQL AB company and currently belongs to Oracle. MySQL is a relational database management system. Relative databases store data in different tables instead of putting all the data in a large warehouse, which increases speed and flexibility.</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>MySQL is open source, so you don't need to pay extra fees.</li>
            <li>MySQL supports large databases. Can handle large databases with tens of millions of records.</li>
            <li>MySQL uses the standard SQL data language form.</li>
            <li>MySQL can run on multiple systems and supports multiple languages. These programming languages ​​include C, C ++, Python, Java, Perl, PHP, Eiffel, Ruby and Tcl.</li>
            <li>MySQL has very good support for PHP, PHP is currently the most popular Web development language.</li>
            <li>MySQL supports large databases and data warehouses with 50 million records. 32-bit system table files can support up to 4GB, and 64-bit systems support 8TB.</li>
            <li>MySQL can be customized, using the GPL protocol, you can modify the source code to develop your own MySQL system.</li>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("MySQL Instruction");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("What is database?");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("MySQL database");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("MySQL Instruction");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("What is database?");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("MySQL database");break;
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
                case 1:this.$emit('note','MySQL Instruction');break;
                case 2:this.$emit('note','What is database?');break;
                case 3:this.$emit('note','MySQL database');break;
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