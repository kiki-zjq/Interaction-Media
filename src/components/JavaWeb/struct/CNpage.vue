<template>

    <div class='SyntaxContent'>
        <h2>JSP 结构</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            JSP 结构
        </div>

        <span style='margin-left:30px'>网络服务器需要一个 JSP 引擎，也就是一个容器来处理 JSP 页面。容器负责截获对 JSP 页面的请求。本教程使用内嵌 JSP 容器的 Apache 来支持 JSP 开发。</span><br/>
        <br/><span style='margin-left:30px'>JSP 容器与 Web 服务器协同合作，为JSP的正常运行提供必要的运行环境和其他服务，并且能够正确识别专属于 JSP 网页的特殊元素。下图显示了 JSP 容器和 JSP 文件在 Web 应用中所处的位置。</span>
        <br/><img style="margin-top:30px;" width="80%" src='./JSP1.png'/>


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>


        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            JSP 处理
        </div>

        <span style='margin-left:30px'>以下步骤表明了 Web 服务器是如何使用JSP来创建网页的：</span><br/>
        
        <ul style='margin-left:30px;line-height:35px'>
            <li>就像其他普通的网页一样，您的浏览器发送一个 HTTP 请求给服务器。</li>    
            <li>Web 服务器识别出这是一个对 JSP 网页的请求，并且将该请求传递给 JSP 引擎。通过使用 URL或者 .jsp 文件来完成。</li>
            <li>JSP 引擎从磁盘中载入 JSP 文件，然后将它们转化为 Servlet。这种转化只是简单地将所有模板文本改用 println() 语句，并且将所有的 JSP 元素转化成 Java 代码。</li>
            <li>JSP 引擎将 Servlet 编译成可执行类，并且将原始请求传递给 Servlet 引擎。</li>
            <li>Web 服务器的某组件将会调用 Servlet 引擎，然后载入并执行 Servlet 类。在执行过程中，Servlet 产生 HTML 格式的输出并将其内嵌于 HTTP response 中上交给 Web 服务器。</li>
            <li>Web 服务器以静态 HTML 网页的形式将 HTTP response 返回到您的浏览器中。</li>
            <li>最终，Web 浏览器处理 HTTP response 中动态产生的HTML网页，就好像在处理静态网页一样。</li>
        </ul>

        <span style='margin-left:30px'>以上提及到的步骤可以用下图来表示：</span><br/>
        <br/><img style="margin-top:30px;" width="80%" src='./JSP2.png'/>

        <br/><br/><span style='margin-left:30px'>一般情况下，JSP 引擎会检查 JSP 文件对应的 Servlet 是否已经存在，并且检查 JSP 文件的修改日期是否早于 Servlet。如果 JSP 文件的修改日期早于对应的 Servlet，那么容器就可以确定 JSP 文件没有被修改过并且 Servlet 有效。这使得整个流程与其他脚本语言（比如 PHP）相比要高效快捷一些。</span>
        <br/><br/><span style='margin-left:30px'>总的来说，JSP 网页就是用另一种方式来编写 Servlet 而不用成为 Java 编程高手。除了解释阶段外，JSP 网页几乎可以被当成一个普通的 Servlet 来对待。</span>
        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <!---------------------------------------------------------->
        
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("JSP 结构");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("JSP 处理");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("JSP 结构");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("JSP 处理");break;
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
                case 1:this.$emit('note','JSP 结构');break;
                case 2:this.$emit('note','JSP 处理');break;
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