<template>

    <div class='SyntaxContent'>
        <h2>Java Data Structure</h2>
    
        <!---------------------------------------------------------->
        <div class='sub-title first-title'>
            Array
        </div>

        <span style='margin-left:30px'>Arrays are one of the most important data structures in every programming language, and different languages implement and process arrays differently.</span><br/>
        <span style='margin-left:30px'>The array provided in the Java language is used to store fixed-size elements of the same type.</span><br/>
        <span style='margin-left:30px'>Instead of declaring 100 independent variables, you can declare an array variable, such as Numbers [100]</span><br/>
        <el-divider></el-divider>
        <span style='margin-left:30px;font-size:18px;font-weight:bold'>Declare Array Variables</span><br/><br/>

        <span style='margin-left:30px'>You must declare an array variable before you can use an array in your program. Here's the syntax for declaring array variables:</span><br/>
        
        <div class='code-block'>
            <span style="color:#FFB86C">dataType</span>[ ] <span style="color:#FFF273"> arrayRefVar</span> ;
            <span style='color:#67AB7D'>// The better way!</span><br/>
            <span style='color:#B6B6B6'>or</span><br />
            <span style="color:#FFB86C">dataType</span> <span style="color:#FFF273"> arrayRefVar</span> [ ] ;
            <span style='color:#67AB7D'>// Not so good!</span><br/>
        </div><br />

        <el-divider></el-divider>
        <span style='margin-left:30px;font-size:18px;font-weight:bold'>Create an Array</span><br/><br/>

        <span style='margin-left:30px'>The Java language uses the<b> new </b> to create an array, with the following syntax:</span><br/>
        <div class='code-block'>
            <span style="color:#FFF273"> arrayRefVar</span> = <span style='color:#19F9D8'>new</span> <span style="color:#FFB86C">dataType</span>
            [ <span style='color:#B6B6B6'>arraySize</span> ] ;
        </div><br />
        

        <span style='margin-left:30px'>The syntax above does two things:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>Use dataType[arraySize] create an array.</li>
            <li>Assign a reference to the newly created array to the variable arrayRefVar.</li>
        </ul>

        <span style='margin-left:30px'>The declaration of array variables and the creation of arrays can be done in a single statement, as follows:</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">dataType</span> [ ] <span style="color:#FFF273"> arrayRefVar</span> = <span style='color:#19F9D8'>new</span> <span style="color:#FFB86C">dataType</span>
            [ <span style='color:#B6B6B6'>arraySize</span> ] ;<br />
            <span style='color:#B6B6B6'>or</span><br/>
            <span style="color:#FFB86C">dataType</span> [ ] <span style="color:#FFF273"> arrayRefVar</span> = { <span style='color:#B6B6B6'>value0,value1 ... valuek</span> }
        </div><br />
        
        <span style='margin-left:30px'>The elements of an array are accessed by index. The array index starts at 0, so the index value goes from 0 to arrayrefvar.length-1.</span><br/>
        <img style="margin-top:30px;margin-left:40px;" src='./array.png'/>
    


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(1)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(1)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(1)'></el-button>
        </div>
        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title second-title'>
            Hashtable
        </div>

        <span style='margin-left:30px'>Hashtable is part of the original java.util and is a dictionary-specific implementation.</span><br/>
        <span style='margin-left:30px'>Like HashMap, Hashtable stores key/value pairs in the Hashtable. When using a hash table, specify the object to use as the key and the value to link to that key.</span><br/>
        <span style='margin-left:30px'>The key is then hashed, and the resulting hash code is used as the index of the values stored in the table.</span><br/><br />
        <span style='margin-left:30px'>Hashtable defines four constructors.</span><br/><br/>
        <span style='margin-left:30px'>The first is the default constructor:</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> ( )
        </div><br />

        <span style='margin-left:30px'>The second constructor creates a hash table of the specified size:</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size </span>)
        </div><br />

        <span style='margin-left:30px'> The third constructor creates a hash table of a specified size and specifies the fillRatio by fillRatio.</span><br/>
        <span style='margin-left:30px'> The fill ratio must be between 0.0 and 1.0, which determines how full the hash table is before it is resized:</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size</span>,
            <span style="color:#19F9D8">float</span> <span style='color:#B6B6B6'>fillRatio </span>)
        </div><br />

        <span style='margin-left:30px'>The fourth constructor creates a hash table that initializes elements in M.</span><br/>
        <span style='margin-left:30px'>The hash table is set to twice the capacity of M:</span><br/>
        <div class='code-block'>
            <span style="color:#FFB86C">Hashtable</span> ( <span style="color:#19F9D8">Map</span> <span style='color:#B6B6B6'>m </span>)
        </div><br />


        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(2)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(2)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(2)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title third-title'>
            Vector
        </div>

        
         <span style='margin-left:30px'>The Vector class implements a dynamic array. Similar to the ArrayList, but different:</span><br/>
        <ul style='margin-left:30px;line-height:35px'>
            <li>Vector is accessed synchronously.</li>
            <li>Vector contains many traditional methods that are not part of the collection framework.</li>
        </ul>

        <span style='margin-left:30px'>Vector is mainly used in cases where the size of an array is not known in advance, or where an array can be changed in size.</span><br/>
        <span style='margin-left:30px'>The Vector class supports four constructors.</span><br/><br/>

        <span style='margin-left:30px'>The first constructor creates a default vector with a default size of 10:</span><br/>
        <div class='code-block'>
            <span style="color:#FFF273">Vector</span> ( )
        </div><br />

        <span style='margin-left:30px'>The second constructor creates a vector of specified size:</span><br/>
        <div class='code-block'>
            <span style="color:#FFF273">Vector</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size </span>)
        </div><br />

        <span style='margin-left:30px'> The third constructor creates a vector of the specified size, and the increment is specified with incr. Increment represents the number of elements that the vector increases each time:</span><br/>
        <div class='code-block'>
            <span style="color:#FFF273">Vector</span> (<span style="color:#19F9D8"> int</span> <span style='color:#B6B6B6'>size</span>,
            <span style="color:#19F9D8">int</span> <span style='color:#B6B6B6'>incr </span>)
        </div><br />

        <span style='margin-left:30px'>The fourth constructor creates a vector containing the elements of set c:</span><br/>
        <div class='code-block'>
            <span style="color:#FFF273">Vector</span> ( <span style="color:#19F9D8">Collection</span> <span style='color:#B6B6B6'>c </span>)
        </div><br />

        <div class='mark-block'>
            <el-button type="primary" icon="el-icon-edit" circle @click='clickNote(3)'></el-button>
            <el-button type="success" icon="el-icon-check" circle @click='clickKnow(3)'></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle @click='clickUnknow(3)'></el-button>
        </div>

        <el-divider></el-divider>
        <!---------------------------------------------------------->
        <div class='sub-title forth-title'>
            Stack
        </div>

        <span style='margin-left:30px'>The stack is a subclass of Vector that implements a standard<b> lifo stack</b>.</span><br/><br/>
        <span style='margin-left:30px'>You can think of a stack as a vertically distributed stack of objects, and when you add a new element, you put the new element on top of the other elements.</span><br/><br/>
        <span style='margin-left:30px'>When you take an element from a stack, you take an element from the top of the stack. In other words, the last element to be pushed is the first to be pulled.</span><br/><br/>
        <span style='margin-left:30px'>The stack defines only the default constructor to create an empty stack. In addition to including all the methods defined by Vector, the stack also defines some of its own methods.</span><br/>

        <div class='code-block'>
            <span style="color:#FFF273">Stack</span> ( )
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
                case 1:$('.first-title').css('background-color','#67C23A');this.knowPush("Array");break;
                case 2:$('.second-title').css('background-color','#67C23A');this.knowPush("Hashtable");break;
                case 3:$('.third-title').css('background-color','#67C23A');this.knowPush("Vector");break;
                case 4:$('.forth-title').css('background-color','#67C23A');this.knowPush("Stack");break;
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
                case 1:$('.first-title').css('background-color','#E6A23C');this.unknowPush("Array");break;
                case 2:$('.second-title').css('background-color','#E6A23C');this.unknowPush("Hashtable");break;
                case 3:$('.third-title').css('background-color','#E6A23C');this.unknowPush("Vector");break;
                case 4:$('.forth-title').css('background-color','#E6A23C');this.unknowPush("Stack");break;
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
                case 1:this.$emit('note','Array');break;
                case 2:this.$emit('note','Hashtable');break;
                case 3:this.$emit('note','Vector');break;
                case 4:this.$emit('note','Stack');break;
            }
        },
        nextPage(){
            this.$router.push('/JavaSE/JVM#header');
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
        min-height:50px;
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