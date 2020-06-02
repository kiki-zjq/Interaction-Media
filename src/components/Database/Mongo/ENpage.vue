<template>

    <div class='SyntaxContent'>
        <h2>MongoDB</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            MangoDB Instruction
        </div>

        <span style='margin-left:30px'>MongoDB is a database based on distributed file storage. Written by C ++ language. Designed to provide scalable, high-performance data storage solutions for WEB applications.</span><br/>
        <br/><span style='margin-left:30px'>MongoDB is a product between relational and non-relational databases. It is the most feature-rich among non-relational databases and most like relational databases.</span>

        <img style="margin-top:30px;" width="80%" src='./Mongo1.png'/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            NoSQL Instruction
        </div>

        <span style='margin-left:30px'>NoSQL (NoSQL = Not Only SQL). In modern computing systems, huge amounts of data are generated on the network every day.</span><br/>
        <br/><span style='margin-left:30px'>A large part of this data is processed by the relational database management system (RDBMS). The relational model paper "A relational model of data for large shared data banks" proposed by E.F. Codd's in 1970 makes data modeling and application programming easier.</span><br/>
        <br/><span style='margin-left:30px'>It has been proved through application practice that the relational model is very suitable for client server programming, far exceeding the expected benefits. Today it is the leading technology for structured data storage in network and business applications.</span><br/>
        <br/><span style='margin-left:30px'>NoSQL is a brand-new database revolution movement, some people proposed early on, and the trend became even higher in 2009. The proponents of NoSQL advocate the use of non-relational data storage. Compared with the overwhelming use of relational databases, this concept is undoubtedly a new injection of thinking.</span><br/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            MongoDB Basic
        </div>

        <span style='margin-left:30px'>MongoDB is an open source database system based on distributed file storage written by C++ language.</span><br/>
        <span style='margin-left:30px'>MongoDB stores the data as a document, and the data structure is composed of key=>value pairs. MongoDB documents are similar to JSON objects. Field values can contain other documents, arrays, and arrays of documents.</span><br/>
        <img style="margin-top:30px;" width="80%" src='./Mongo2.png'/>
        
                <el-divider></el-divider>
        <ul style='margin-left:30px;line-height:35px'>
            <li>MongoDB is a database for document storage, which is relatively simple and easy to operate.</li>
            <li>You can set any attribute index (such as: FirstName = "Sameer", Address = "8 Gandhi Road") in MongoDB records to achieve faster sorting.</li>
            <li>You can create data mirrors locally or on the network, which makes MongoDB more scalable.</li>
            <li>If the load increases (requires more storage space and stronger processing power), it can be distributed on other nodes in the computer network. This is called fragmentation.</li>
            <li>Mongo supports rich query expressions. The query command uses JSON format tags to easily query the embedded objects and arrays in the document.</li>
            <li>MongoDb can use the update () command to replace the completed document (data) or some specified data fields.</li>
            <li>Map / reduce in Mongodb is mainly used to batch process and aggregate data.</li>
            <li>Map and Reduce. The Map function calls emit (key, value) to traverse all the records in the collection, and passes the key and value to the Reduce function for processing.</li>
            <li>The Map function and Reduce function are written in Javascript, and MapReduce operations can be performed through the db.runCommand or mapreduce commands.</li>
            <li>GridFS is a built-in feature in MongoDB that can be used to store a large number of small files.</li>
            <li>MongoDB allows scripts to be executed on the server. You can write a function in Javascript and execute it directly on the server. You can also store the function definition on the server and call it directly next time.</li>
            <li>MongoDB supports various programming languages: RUBY, PYTHON, JAVA, C ++, PHP, C # and many other languages.</li>
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
                    <b>Q: How can we create a database by MongoDB?</b>
                </div>
                
                <div class="test-select" style='margin:20px 0'>
                    <el-radio v-model="select" label="1" style='display:block;line-height:36px;'>DB</el-radio>
                    <el-radio v-model="select" label="2" style='display:block;line-height:36px;'>create DATABASE DB</el-radio>
                    <el-radio v-model="select" label="3" style='display:block;line-height:36px;'>use DB</el-radio>
                    <el-radio v-model="select" label="4" style='display:block;line-height:36px;'>create DB</el-radio>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("MangoDB Instruction");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("NoSQL Instruction");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("MongoDB Basic");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("MangoDB Instruction");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("NoSQL Instruction");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("MongoDB Basic");break;
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
                case 1:this.$emit('note','MangoDB Instruction');break;
                case 2:this.$emit('note','NoSQL Instruction');break;
                case 3:this.$emit('note','MongoDB Basic');break;
                case 4:this.$emit('note','Java annotations');break;
            }
        },
        nextPage(){
            this.$router.push('/after-test#header');
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