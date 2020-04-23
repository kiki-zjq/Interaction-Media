<template>

    <div class='ObjectContent'>
        <h2>JVM</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            Java 内存
        </div>

        <span style='margin-left:30px'>下面看一个简单的Java程序，它将打印字符串 <i>Hello World</i></span>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>HelloWorld</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>
             [ ]<span style='color:#B6B6B6'>args</span> ) {</span><br/>
            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Hello World</span>" ) ; 
                <span style='color:#67AB7D'>// 打印 Hello World</span></span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>
        
        <span style='margin-left:30px'>下面我们将展示如何保存、编译以及运行这个程序：</span><br/>

        <ul style='margin-left:30px;line-height:35px'>
            <li>打开代码编辑器，把上面的代码添加进去</li>
            <li>把文件名保存为：HelloWorld.java</li>
            <li>打开 cmd 命令窗口，进入目标文件所在的位置，假设是 C:\</li>
            <li>在命令行窗口输入 javac HelloWorld.java 按下回车键编译代码</li>
            <li>再键输入 java HelloWorld 按下回车键就可以运行程序了。</li>
        </ul>

        <span style='margin-left:30px'>你将会在窗口看到 Hello World</span><br/>

        <div class='code-block'>
            <span><span style='color:#FF75B5'>C : > </span> <span style='color:#19F9D8'> javac</span> HelloWorld.java</span><br/>
            <span><span style='color:#FF75B5'>C : > </span> <span style='color:#19F9D8'> java</span> HelloWorld </span><br />
            <span>Hello World</span>
        </div>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            方法区
        </div>

        <span style='margin-left:30px'>一个 Java 程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作。以下是基本概念。</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>对象：</b> 对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴等。</li>
            <li><b>类：</b> 类是一个模板，它描述一类对象的行为和状态。</li>
            <li><b>方法：</b> 方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。</li>
            <li><b>实例变量：</b> 每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。</li>
        </ul>
        <el-divider></el-divider>
        <span style='margin-left:30px'>编写 Java 程序时，应注意以下几点：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>大小写敏感：</b> Java 是大小写敏感的，这就意味着标识符 Hello 与 hello 是不同的。</li>
            <li><b>类名：</b> 对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写。</li>
            <li><b>方法名：</b> 所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。</li>
            <li><b>源文件名：</b> 源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的）。</li>
            <li><b>主方法入口：</b> 所有的 Java 程序由 <b>public static void main(String []args) </b>方法开始执行。</li>
        </ul>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            程序计数器
        </div>

        <span style='margin-left:30px'>Java 所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。</span><br/>
        <span style='margin-left:30px'>关于 Java 标识符，有以下几点需要注意：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>所有的标识符都应该以字母（A-Z 或者 a-z）,美元符（$）、或者下划线（_）开始</li>
            <li>首字符之后可以是字母（A-Z 或者 a-z）,美元符（$）、下划线（_）或数字的任何字符组合</li>
            <li>关键字不能用作标识符</li>
            <li>标识符是大小写敏感的</li>
            <li>合法标识符举例：age、$salary、_value、__1_value</li>
            <li>非法标识符举例：123abc、-salary</li>
        </ul>
        <el-divider></el-divider>
        <span style='margin-left:30px'>像其他语言一样，Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>访问控制修饰符 : <b>default, public , protected, private</b></li>
            <li>非访问控制修饰符 : <b>final, abstract, static, synchronized</b></li>
        </ul>
        <span style='margin-left:30px'>在后面的章节中我们会深入讨论 Java 修饰符。</span><br/>
        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>


        <!---------------------------------------------------------->
        <div class='sub-title forth-title'>
            本地方法栈
        </div>

        <span style='margin-left:30px'>类似于 C/C++、Java 也支持单行以及多行注释。注释中的字符将被 Java 编译器忽略。</span><br/>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>HelloWorld</span> {</span><br/>
            <br />
            
            <span style='margin-left:20px'><span style="color:#67AB7D">/* 这是第一个Java程序</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * 它将打印Hello World</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * 这是一个多行注释的示例</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * /</span></span><br/>
            
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>
             [ ]<span style='color:#B6B6B6'>args</span> ) {</span><br/>

            <br />
            <span style='margin-left:40px'><span style="color:#67AB7D"> // 这是单行注释的事例</span></span><br/>
            <span style='margin-left:40px'><span style="color:#67AB7D"> /* 这个也是单行注释的事例 */</span></span><br/>
            <br />

            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Hello World</span>" ) ; 
                <span style='color:#67AB7D'>// 打印 Hello World</span></span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(4)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(4)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(4)'></el-button>
        </div>

        <!---------------------------------------------------------->
        <el-divider></el-divider>
        
        <div class='end-block'>
            
            <el-button type="danger" @click="dialogVisible = true" round>本章报告</el-button>
            <el-button type="warning" @click="testVisible = true" round>章节小测</el-button>
            <el-button type="success" @click="nextPage()" round>下一章</el-button>
        </div>
        <!---------------------------------------------------------->

        <el-dialog
            title="本章报告"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <div v-if='know.length!=0||unknow.length!=0'>
                <span v-if='know.length!=0'>
                <b>本章已会:</b> <span style='font-weight:bold;color:#67C23A;margin-right:1em' v-for="(k,index) in know" :key="index">{{k}} </span>
                </span>
                <br /><br />

                <span v-if='unknow.length!=0'>
                <b>本章重点:</b> <span style='font-weight:bold;color:#E6A23C;margin-right:1em' v-for="(u,index) in unknow" :key="index">{{u}} </span>
                </span>
            </div>

            <div v-if='know.length==0&&unknow.length==0'>
                <b>本章还没有进行标记噢！赶快开始本章学习吧~</b>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>

        <!---------------------------------------------------------->
        <el-dialog
            title="章节小测"
            :visible.sync="testVisible"
            width="30%"
            :before-close="handleClose"
            >
            <el-card class="box-card">
                <div class="test-question">
                    <b>Q: 以下哪个是合法的标识符？</b>
                </div>
                
                <div class="test-select" style='margin:20px 0'>
                    <el-radio v-model="select" label="1" style='display:block;line-height:36px;'>default</el-radio>
                    <el-radio v-model="select" label="2" style='display:block;line-height:36px;'>123abc</el-radio>
                    <el-radio v-model="select" label="3" style='display:block;line-height:36px;'>_$112as</el-radio>
                    <el-radio v-model="select" label="4" style='display:block;line-height:36px;'>-$kiki</el-radio>
                </div>

                <div class="test-confirm" style='text-align:right'>
                    <el-button type="primary" @click="testAnswer" >确 定</el-button>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("Java 内存");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("方法区");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("程序计数器");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("本地方法栈");break;
            }

            this.know = Array.from(new Set(this.know))

            this.$notify({
                title: '成功',
                message: '您已将此节标记为已学会',
                type: 'success'
            });
        },

        clickUnknow(value){

            switch(value){
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("Java 内存");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("方法区");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("程序计数器");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("本地方法栈");break;
            }

            this.unknow = Array.from(new Set(this.unknow))

            this.$notify({
                title: '重点',
                message: '您已将此节标记为重点',
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
                    message: '恭喜你，回答正确',
                    type: 'success'
                });
            }else{
                 this.$message.error('回答错误');
            }
        },
        handleClose(){
            this.select = -1;
            this.testVisible = false;
        },
        clickNote(value){
            switch(value){
                case 1:this.$emit('note','Java 内存');break;
                case 2:this.$emit('note','方法区');break;
                case 3:this.$emit('note','程序计数器');break;
                case 4:this.$emit('note','本地方法栈');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaSE/MultiProcess#header');
        }

    },
}
</script>


<style scoped>
    .ObjectContent{
        text-align:left;
    }

    .ObjectContent h2{
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