<template>

    <div class='SyntaxContent'>
        <h2>Java Basic Syntax</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            My First Java Program
        </div>

        <span style='margin-left:30px'>Let's look at a simple Java program that prints <i>Hello World</i></span>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>HelloWorld</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>[ ]
            <span style='color:#FFF273'>args</span> ) {</span><br/>
            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Hello World</span>" ) ; 
                <span style='color:#67AB7D'>// print Hello World</span></span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>
        
        <span style='margin-left:30px'>Next we will show you how to save, compile, and run this program：</span><br/>

        <ul style='margin-left:30px;line-height:35px'>
            <li>Open the code editor and add the code above</li>
            <li>Save the file name as: helloworld.java</li>
            <li>Open the CMD command window and enter the location of the target file, assuming C:\</li>
            <li>In the command line window, type javac helloworld.java and press enter to compile the code</li>
            <li>Key in java HelloWorld and press enter to run the program.</li>
        </ul>

        <span style='margin-left:30px'>You will see <i>Hello World</i> in the cmd</span><br/>

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
            Basic Syntax
        </div>

        <span style='margin-left:30px'>A Java program can be thought of as a collection of objects that work together by calling each other's methods. </span><br/>
        <span style='margin-left:30px'>Here are the basic concepts.</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Object: </b> An object is an instance of a class that has state and behavior.</li>
            <li><b>Class: </b> A class is a template that describes the behavior and state of a class of objects.</li>
            <li><b>Methods: </b> A method is a behavior, and a class can have many methods. Logic operations, data modifications, and all actions are done in methods.</li>
            <li><b>Instance: </b> Each object has unique instance variables, and the state of the object is determined by the values of those instance variables.</li>
        </ul>
        <el-divider></el-divider>
        <span style='margin-left:30px'>When writing Java programs, note the following:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Case sensitive: </b> Java is case-sensitive, which means that the identifier Hello is different from Hello.</li>
            <li><b>Class name: </b> For all classes, the first letter of the class name should be capitalized. If the class name consists of several words, the first letter of each word should be capitalized.</li>
            <li><b>Method name: </b> All method names should begin with a lowercase letter. If the method name contains several words, capitalize each word that follows.</li>
            <li><b>Source file name: </b> The source file name must be the same as the class name. When saving files, you should use the class name as the file name (remember Java is case-sensitive).</li>
            <li><b>Main method: </b> All Java program starts by <b>public static void main(String [ ]args) </b>method</li>
        </ul>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            Identifiers and modifiers
        </div>

        <span style='margin-left:30px'>All the components of Java require names. Class names, variable names, and method names are called identifiers.</span><br/>
        <span style='margin-left:30px'>There are a few things to note about Java identifiers:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>All identifiers should begin with A letter (a-z or a-z), A dollar sign ($), or an underscore (_)</li>
            <li>The first character can be followed by any combination of letters (a-z or a-z), dollar characters ($), underscores (_), or Numbers</li>
            <li>Keywords cannot be used as identifiers</li>
            <li>Identifiers are case sensitive</li>
            <li>Examples of legal identifiers: age、$salary、_value、__1_value</li>
            <li>Examples of illegal identifiers: 123abc、-salary</li>
        </ul>
        <el-divider></el-divider>
        <span style='margin-left:30px'>Like other languages, Java can use modifiers to modify methods and properties in a class. There are two main types of modifiers:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>Access control modifier : <b>default, public , protected, private</b></li>
            <li>Non-access control modifier : <b>final, abstract, static, synchronized</b></li>
        </ul>
        <span style='margin-left:30px'>We'll discuss Java modifiers in more detail in later sections.</span><br/>
        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>


        <!---------------------------------------------------------->
        <div class='sub-title forth-title'>
            Java annotations
        </div>

        <span style='margin-left:30px'>Similar to C/C++, Java also supports single-line and multi-line comments. Characters in comments are ignored by the Java compiler.</span><br/>

        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>HelloWorld</span> {</span><br/>
            <br />
            
            <span style='margin-left:20px'><span style="color:#67AB7D">/* This is the first java program</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * It will print Hello World</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * This is an example of a multi-line comment</span></span><br/>
            <span style='margin-left:24px'><span style="color:#67AB7D"> * /</span></span><br/>
            
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>[ ] 
            <span style='color:#FFF273'>args</span> ) {</span><br/>

            <br />
            <span style='margin-left:40px'><span style="color:#67AB7D"> // This is an example of a single line comment</span></span><br/>
            <span style='margin-left:40px'><span style="color:#67AB7D"> /* This is also an example of a single line comment */</span></span><br/>
            <br />

            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Hello World</span>" ) ; 
                <span style='color:#67AB7D'>// print Hello World</span></span><br/>
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("My First Java Program");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Basic Syntax");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("Identifiers and modifiers");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("My First Java Program");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Basic Syntax");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("Identifiers and modifiers");break;
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
                case 1:this.$emit('note','My First Java Program');break;
                case 2:this.$emit('note','Basic Syntax');break;
                case 3:this.$emit('note','Identifiers and modifiers');break;
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