<template>

    <div class='SyntaxContent'>
        <h2>Mybatis</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            MyBatis framework and principle analysis
        </div>

        <span style='margin-left:30px'>MyBatis is an excellent persistence layer framework that supports customized SQL, stored procedures and advanced mapping. It mainly does two things:</span><br/>
        
        <ul style='margin-left:30px;line-height:35px'>
            <li>Encapsulate JDBC operations</li>
            <li>Use reflection to open up the conversion between Java classes and SQL statements</li>
        </ul>
        
        <span style='margin-left:30px'>The main design purpose of MyBatis is to make us more convenient for data management of input and output when executing SQL statements. Therefore, the core competitiveness of MyBatis is to conveniently write out SQL and conveniently obtain the execution results of SQL.</span>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            Major member of MyBatis
        </div>

        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Configuration </b>all Configuration information for Configuration MyBatis is stored in the Configuration object, and most of the Configuration in the Configuration file is stored in this class</li>
            <li><b> SqlSession </b>,as the main top-level API of MyBatis work, represents the session when interacting with the database and completes the necessary database addition, deletion, modification and check function</li>
            <li><b>Executor MyBatis Executor </b>,which is the core of MyBatis scheduling, is responsible for the generation of SQL statements and maintenance of query cache</li>
            <li><b>StatementHandler </b>encapsulates the JDBC Statement operation and is responsible for the operations on the JDBC Statement, such as setting parameters, etc</li>
            <li><b>ParameterHandler </b>is responsible for converting parameters passed by the user to the data type corresponding to the JDBC Statement</li>
            <li><b>ResultSetHandler </b>is responsible for converting the ResultSet ResultSet object returned by JDBC into a collection of type List</li>
            <li><b>TypeHandler </b>is responsible for mapping and converting between Java data types and JDBC data types (also known as data table column types)</li>
            <li><b>MappedStatement </b>maintains an encapsulation of a node</li>

            <li><b>the SqlSource </b>is responsible for dynamically generating the SQL statement based on the parameterObject passed by the user, encapsulating the information into the BoundSql object, and returning it</li>
            <li><b>BoundSql </b>represents dynamically generated SQL statements and corresponding parameter information</li>

        </ul>

        <br/>
        <span style='margin-left:30px'>Most of the above major members are involved in a database operation. In an SQL operation, the key concerns are when the SQL parameters are set and how the result set is converted into a JavaBean object. These two processes correspond to the processing logic in the StatementHandler and ResultSetHandler classes.</span><br/>



        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            MyBatis cache
        </div>

        <span style='margin-left:30px'>MyBatis provides query caching to reduce database pressure and improve performance. MyBatis provides a level 1 cache and a level 2 cache.</span><br/>
        <br />
        <img style="margin-top:30px;" width="80%" src='./batis1.png'/>
        <br />
        <span style='margin-left:30px'>The first-level cache is a sqlsessionlevel cache, and each SqlSession object has a hash table for caching data. Caches between different SqlSession objects are not Shared. The same SqlSession object object executes the same SQL query twice, and the result is cached after the execution of the first query, so that the second query does not need to query to the database, but directly returns the cached result. MyBatis is enabled for level 1 caching by default.</span>
        <br/>
        <span style='margin-left:30px'>The second level cache is the mapper-level cache, and the second level cache is across the SqlSession, and multiple SqlSession objects can share the same second level cache. Different SqlSession objects execute the same SQL statement twice, the first time the query results will be cached, and the second query will directly return the results in the second-level cache. MyBatis does not turn on level 2 cache by default. The following configuration can be used in the configuration file to turn on level 2 cache:</span>
        <br />
        <img style="margin-top:30px;margin-left:30px" width="80%" src='./batis2.png'/>
        <br /><br />
        <span style='margin-left:30px'>When the SQL statement is updated (delete/add/update), the corresponding cache is cleared to ensure that the most recent data is stored in the cache. MyBatis level2 cache for fine-grained data level cache implementation is not friendly, such as the following requirements: to cache of commodity information, because of the large goods information query views, but asks the user to query the latest commodity information every time, at this time if you use MyBatis level 2 cache will not be able to realize when a commodity change only refresh the goods from the cache information without refresh other commodity information, because mybaits level 2 cache region based on the unit mapper, when a commodity information changes will cache the data information of all the products all empty. To solve this kind of problem, it is necessary to cache the data according to the requirements in the business layer, which is implemented by the specific business.</span>

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
                    <b>Q: Which of the following is not major member of MyBatis?</b>
                </div>
                
                <div class="test-select" style='margin:20px 0'>
                    <el-radio v-model="select" label="1" style='display:block;line-height:36px;'>Configuration</el-radio>
                    <el-radio v-model="select" label="2" style='display:block;line-height:36px;'>SqlSession</el-radio>
                    <el-radio v-model="select" label="3" style='display:block;line-height:36px;'>SqlHandler</el-radio>
                    <el-radio v-model="select" label="4" style='display:block;line-height:36px;'>TypeHandler</el-radio>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("MyBatis framework and principle analysis");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Major member of MyBatis");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("MyBatis cache");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("MyBatis framework and principle analysis");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Major member of MyBatis");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("MyBatis cache");break;
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
                case 1:this.$emit('note','MyBatis framework and principle analysis');break;
                case 2:this.$emit('note','Major member of MyBatis');break;
                case 3:this.$emit('note','MyBatis cache');break;
            }
        },
        nextPage(){
            this.$router.push('/Database/MySQL#header');
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