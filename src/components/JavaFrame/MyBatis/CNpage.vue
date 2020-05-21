<template>

    <div class='SyntaxContent'>
        <h2>Mybatis</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            MyBatis框架及原理分析 
        </div>

        <span style='margin-left:30px'>MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架，其主要就完成2件事情：</span><br/>
        
        <ul style='margin-left:30px;line-height:35px'>
            <li>封装JDBC操作</li>
            <li>利用反射打通Java类与SQL语句之间的相互转换</li>
        </ul>
        
        <span style='margin-left:30px'>MyBatis的主要设计目的就是让我们对执行SQL语句时对输入输出的数据管理更加方便，所以方便地写出SQL和方便地获取SQL的执行结果才是MyBatis的核心竞争力。</span>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            MyBatis的主要成员
        </div>

        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Configuration </b>MyBatis所有的配置信息都保存在Configuration对象之中，配置文件中的大部分配置都会存储到该类中</li>
            <li><b> SqlSession </b>作为MyBatis工作的主要顶层API，表示和数据库交互时的会话，完成必要数据库增删改查功能</li>
            <li><b>Executor MyBatis Executor </b>MyBatis执行器，是MyBatis 调度的核心，负责SQL语句的生成和查询缓存的维护</li>
            <li><b>StatementHandler </b>封装了JDBC Statement操作，负责对JDBC statement 的操作，如设置参数等</li>
            <li><b>ParameterHandler </b>负责对用户传递的参数转换成JDBC Statement 所对应的数据类型</li>
            <li><b>ResultSetHandler </b>负责将JDBC返回的ResultSet结果集对象转换成List类型的集合</li>
            <li><b>TypeHandler </b>负责java数据类型和jdbc数据类型(也可以说是数据表列类型)之间的映射和转换</li>
            <li><b>MappedStatement </b>MappedStatement维护一条&lt;select|update|delete|insert>节点的封装</li>

            <li><b>the SqlSource </b>负责根据用户传递的parameterObject，动态地生成SQL语句，将信息封装到BoundSql对象中，并返回</li>
            <li><b>BoundSql </b>表示动态生成的SQL语句以及相应的参数信息</li>

        </ul>

        <br/>
        <span style='margin-left:30px'>MyBatis的主要设计目的就是让我们对执行SQL语句时对输入输出的数据管理更加方便，所以方便地写出SQL和方便地获取SQL的执行结果才是MyBatis的核心竞争力。</span><br/>



        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            MyBatis缓存
        </div>

        <span style='margin-left:30px'>MyBatis提供查询缓存，用于减轻数据库压力，提高性能。MyBatis提供了一级缓存和二级缓存.</span><br/>
        <br />
        <img style="margin-top:30px;" width="80%" src='./batis1.png'/>
        <br />
        <span style='margin-left:30px'>一级缓存是SqlSession级别的缓存，每个SqlSession对象都有一个哈希表用于缓存数据，不同SqlSession对象之间缓存不共享。同一个SqlSession对象对象执行2遍相同的SQL查询，在第一次查询执行完毕后将结果缓存起来，这样第二遍查询就不用向数据库查询了，直接返回缓存结果即可。MyBatis默认是开启一级缓存的</span>
        <br/>
        <span style='margin-left:30px'>二级缓存是mapper级别的缓存，二级缓存是跨SqlSession的，多个SqlSession对象可以共享同一个二级缓存。不同的SqlSession对象执行两次相同的SQL语句，第一次会将查询结果进行缓存，第二次查询直接返回二级缓存中的结果即可。MyBatis默认是不开启二级缓存的，可以在配置文件中使用如下配置来开启二级缓存：</span>
        <br />
        <img style="margin-top:30px;margin-left:30px" width="80%" src='./batis2.png'/>
        <br /><br />
        <span style='margin-left:30px'>当SQL语句进行更新操作(删除/添加/更新)时，会清空对应的缓存，保证缓存中存储的都是最新的数据。MyBatis的二级缓存对细粒度的数据级别的缓存实现不友好，比如如下需求：对商品信息进行缓存，由于商品信息查询访问量大，但是要求用户每次都能查询最新的商品信息，此时如果使用mybatis的二级缓存就无法实现当一个商品变化时只刷新该商品的缓存信息而不刷新其它商品的信息，因为mybaits的二级缓存区域以mapper为单位划分，当一个商品信息变化会将所有商品信息的缓存数据全部清空。解决此类问题需要在业务层根据需求对数据有针对性缓存，具体业务具体实现。</span>

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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("MyBatis框架及原理分析 ");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("MyBatis的主要成员");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("MyBatis缓存");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("MyBatis框架及原理分析 ");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("MyBatis的主要成员");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("MyBatis缓存");break;
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
                case 1:this.$emit('note','MyBatis框架及原理分析 ');break;
                case 2:this.$emit('note','MyBatis的主要成员');break;
                case 3:this.$emit('note','MyBatis缓存');break;
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