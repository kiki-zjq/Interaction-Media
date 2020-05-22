<template>

    <div class='SyntaxContent'>
        <h2>JSP Introduction</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
           What is Java Server Pages?
        </div>

        <span style='margin-left:30px'><b>JSP stands for Java Server Pages, </b>which is a dynamic web development technology. It uses JSP tags to insert Java code in HTML web pages. Tags usually end with &lt;% start with%>.</span><br/>
        <br /><span style='margin-left:30px'>JSP is a Java servlet that is mainly used to implement the user interface part of Java web applications. Web developers write JSPs by combining HTML code, XHTML code, XML elements, and embedded JSP operations and commands.</span>
        <br /><br /><span style='margin-left:30px'>JSP obtains user input data through web forms, accesses databases and other data sources, and then dynamically creates web pages.</span>
        <br /><br /><span style='margin-left:30px'>JSP tags have multiple functions, such as accessing databases, recording user selection information, accessing JavaBeans components, etc., and can also transfer control information and shared information in different web pages.</span>

      

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            Why use JSP?
        </div>

       <span style='margin-left:30px'>JSP programs have similar functions to CGI programs, but compared to CGI programs, JSP programs have the following advantages:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>The performance is more superior, because JSP can directly embed elements in HTML web pages without the need to separately reference CGI files.</li>
            <li>The server calls the compiled JSP file, unlike CGI / Perl, you must first load the interpreter and target script.</li>
            <li>JSP is based on the Java Servlet API. Therefore, JSP has a variety of powerful enterprise-level Java APIs, including JDBC, JNDI, EJB, JAXP, and so on.</li>
            <li>JSP pages can be used with servlets that handle business logic. This pattern is supported by the Java servlet template engine.</li>
        </ul>
        <br/>
        <span style='margin-left:30px'>Finally, JSP is an integral part of Java EE and is a complete enterprise-level application platform. This means that JSP can implement the most complex applications in the simplest way.</span><br/>
        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            Advantages of JSP
        </div>

        <span style='margin-left:30px'>The following lists the other benefits of using JSP:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Compared with ASP:</b> JSP has two major advantages. First of all, the dynamic part is written in Java, not VB or other MS-specific languages, so it is more powerful and easy to use. The second point is that JSP is easy to port to non-MS platforms.</li>
            <li><b>Compared with pure Servlet:</b> JSP can easily write or modify HTML pages without facing a lot of println statements.</li>
            <li><b>Compared with SSI: </b>SSI cannot use form data and cannot link to the database.</li>
            <li><b>Compared with JavaScript:</b> Although JavaScript can dynamically generate HTML on the client, it is difficult to interact with the server, so it cannot provide complex services, such as access to databases and image processing.</li>
            <li><b>Compared with static HTML:</b> Static HTML does not contain dynamic information.</li>
        </ul>
        <br/>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("What is Java Server Pages? ");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Why use JSP?");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("Advantages of JSP");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("What is Java Server Pages? ");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Why use JSP?");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("Advantages of JSP");break;
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
                case 1:this.$emit('note','What is Java Server Pages? ');break;
                case 2:this.$emit('note','Why use JSP?');break;
                case 3:this.$emit('note','Advantages of JSP');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaWeb/JSP-structure#header');
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