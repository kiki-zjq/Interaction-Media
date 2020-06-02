<template>

    <div class='SyntaxContent'>
        <h2>JSP structure</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            JSP structure
        </div>

        <span style='margin-left:30px'>The web server requires a JSP engine, which is a container, to process JSP pages. The container is responsible for intercepting requests for JSP pages. This tutorial uses Apache with an embedded JSP container to support JSP development.</span><br/>
        <br/><span style='margin-left:30px'>The JSP container cooperates with the Web server to provide the necessary operating environment and other services for the normal operation of the JSP, and can correctly identify the special elements dedicated to the JSP web page.</span>
        <br/><span style='margin-left:30px'>The following figure shows the location of the JSP container and JSP file in the Web application. (Picture 1)</span>
        <br/><img style="margin-top:30px;" width="80%" src='./JSP1.png'/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            JSP processing
        </div>

        <span style='margin-left:30px'>The following steps show how the web server uses JSP to create web pages:</span><br/>
        
        <ul style='margin-left:30px;line-height:35px'>
            <li>Just like other ordinary web pages, your browser sends an HTTP request to the server.</li>    
            <li>The web server recognizes that this is a request for a JSP web page, and passes the request to the JSP engine. This is done by using URL or .jsp file.</li>
            <li>The JSP engine loads JSP files from disk and then converts them into Servlets. This conversion simply converts all template text to println () statements and converts all JSP elements into Java code.</li>
            <li>The JSP engine compiles the Servlet into executable classes and passes the original request to the Servlet engine.</li>
            <li>A component of the Web server will call the Servlet engine, and then load and execute the Servlet class. During execution, the Servlet generates HTML-format output and embeds it in the HTTP response to the Web server.</li>
            <li>The web server returns the HTTP response to your browser in the form of a static HTML web page.</li>
            <li>In the end, the web browser processes the HTML pages dynamically generated in the HTTP response as if it were processing static web pages.</li>
        </ul>

        <span style='margin-left:30px'>The steps mentioned above can be represented by the following figure: (Picture 2)</span><br/>
        <br/><img style="margin-top:30px;" width="80%" src='./JSP2.png'/>
        <br/><br/><span style='margin-left:30px'>In general, the JSP engine checks whether the Servlet corresponding to the JSP file already exists, and checks whether the modification date of the JSP file is earlier than the Servlet. If the modification date of the JSP file is earlier than the corresponding Servlet, the container can determine that the JSP file has not been modified and the Servlet is valid. This makes the entire process more efficient and faster than other scripting languages ​​(such as PHP).</span>
        <br/><br/><span style='margin-left:30px'>In general, the JSP web page is another way to write Servlet without becoming a master of Java programming. Except for the explanation phase, the JSP web page can be treated almost as a normal Servlet.</span>
        

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("JSP structure");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("JSP processing");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("JSP structure");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("JSP processing");break;
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
                case 1:this.$emit('note','JSP structure');break;
                case 2:this.$emit('note','JSP processing');break;
                case 3:this.$emit('note','IOC 与 AOP');break;
                case 4:this.$emit('note','IOC 容器');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaFrame/Spring#header');
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