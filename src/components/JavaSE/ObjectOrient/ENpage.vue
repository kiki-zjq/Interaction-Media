<template>

    <div class='SyntaxContent'>
        <h2>Java Object Oriented</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            Object and Class
        </div>

        <span style='margin-left:30px'>This section focuses on the concepts of objects and classes</span>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Object: </b> An object is an instance of a class that has a state and behavior. For example, a dog is an object whose status is: color, name, breed; Behaviors include: tail wagging and so on</li>
            <li><b>Class: </b> A class is a template that describes the behavior and state of a class of objects.</li>
        </ul>

        <span style='margin-left:30px'>In the figure below, boy and girl are <b>class</b>, and each of them is the <b>object</b> of this class</span>
        <div style="margin:10px 0 0 40px;"><img src='./object.png'/></div>
       

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>

         <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            Constructor
        </div>
        
        <span style='margin-left:30px'>each class has a constructor. If a constructor is not explicitly defined for the class, the Java compiler will provide a default constructor for the class. </span><br/>
        <span style='margin-left:30px'>when creating an object, call at least one constructor. The constructor name must be the same as the class, and a class can have more than one constructor. </span><br/>
        <span style='margin-left:30px'>here is an example of a constructor:</span><br/>

<div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>Puppy</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>&nbsp;</span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Default Constructor</span>
                <br/>
            <span style='margin-left:20px'>}</span><br/>

            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>
                <span style='color:#19F9D8'>String</span> name</span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Constructor with a parameter</span>
                <br/>
            <span style='margin-left:20px'>}</span><br/>

            <br/>
            <span>}</span><br/>
        </div>

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            Create an Object
        </div>

        <span style='margin-left:30px'>The object is created based on the class. In Java, the keyword new is used to create a new object. The following three steps are required to create the object:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li><b>Declaration: </b>declaration of an object, including the object name and object type.</li>
            <li><b>instantiation: </b>use the keyword new to create an object.</li>
            <li><b>initialization: </b>when creates an object using new, the constructor is called to initialize the object</li>
        </ul>
        <span style='margin-left:30px'>here's an example of creating an object:</span><br/>
        
        <div class = 'code-block'>
            <span> <span style="color:#FF75B5">public class </span> <span style='color:#FFB86C'>Puppy</span> {</span><br/>
            <br />
            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>&nbsp;</span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Default Constructor</span>
                <br/>
            <span style='margin-left:20px'>}</span><br/>

            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#FFB86C'>Puppy</span> ( <span style='color:#19F9D8'></span><span style='color:#B6B6B6'>
                <span style='color:#19F9D8'>String</span> <span style="color:#FFF273">name</span></span> ) {</span><br/>        
                <span style='margin-left:40px;color:#67AB7D'>// Constructor with a parameter</span><br />
                <span style='margin-left:40px;color:#FFB86C'>System.out.println</span>( "<span style='color:#B6B6B6'>Dog name is: </span>" + <span style="color:#FFF273">name</span> ) ; 
                <br/>
            <span style='margin-left:20px'>}</span><br/><br/>

            <span style='margin-left:20px'><span style="color:#FF75B5">public</span>
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>[ ] 
            <span style='color:#FFF273'>args</span> ) {</span><br/>
            <span style='margin-left:40px;color:#67AB7D'>// Create a Puppy object</span><br />
            <span style='margin-left:40px'>
                <span style='color:#FFB86C'>Puppy </span>
                <span style='color:#FFF273'>myPuppy</span> =
                <span style='color:#19F9D8'>new</span> <span style='color:#FFB86C'>Puppy </span>("<span style='color:#B6B6B6'>Tom</span>") ; 
                </span><br/>
            <span style='margin-left:20px'>}</span><br/>
            <br/>
            <span>}</span><br/>
        </div>
        <span style='margin-left:30px'>Compile and run the above program, and the following results will be printed:</span><br/>
        <div class='code-block'>
            
            <span>Dog name is: Tom</span>
        </div>
       <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>

        <el-divider></el-divider>
       

        <!---------------------------------------------------------->
        <!-- <div class='sub-title forth-title'>
            Interfaces and Subclasses
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
            <span style='color:#19F9D8'> static void</span> <span style='color:#FFB86C'>main</span> ( <span style='color:#19F9D8'>String</span>
             [ ]<span style='color:#B6B6B6'>args</span> ) {</span><br/>

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
        </div> -->

        <!---------------------------------------------------------->

        
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("Object and Class");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Constructor");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("Create an Object");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("Interfaces and Subclasses");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("Object and Class");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Constructor");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("Create an Object");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("Interfaces and Subclasses");break;
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
                case 1:this.$emit('note','Object and Class');break;
                case 2:this.$emit('note','Constructor');break;
                case 3:this.$emit('note','Create an Object');break;
                case 4:this.$emit('note','Interfaces and Subclasses');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaSE/DataStructure#header');
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