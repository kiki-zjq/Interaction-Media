<template>
    <el-card class="box-card" body-style='min-height:300px'>
            <div class="question">
                {{question}}
            </div>
            <div class='choices'>
                <el-radio-group  v-model="radio" :disabled="hasChoose"> 
                    <el-radio class='choices-item' style='display:block' v-for="(a,index) in answers" :key="index" :label="index" >
                        {{a}}
                    </el-radio>
                </el-radio-group>
            </div>

            <div class='description'>
                <div v-for="(d,index) in description" :key="index" :class="{isTitle:index==0}">
                    {{d}}

                </div>
            </div>

            <el-row class='button'>
                <el-col :span='3'>
                 <el-button style="display:inline-block" type="success" @click='handleClick' round>{{buttonLabel}}</el-button>
                </el-col>
                <el-col :span='3' :offset='1'>
                 <el-button style="display:inline-block" type="danger" @click='handleClickErr' round>Error Report</el-button>
                </el-col>
                <el-col :span='6' :offset='2'>
                 <el-progress 
                    style="margin-top:10px;"
                    :text-inside="true" 
                    :stroke-width="24" 
                    :percentage="percentage" 
                    :color="customColors"></el-progress>
                </el-col>
            </el-row>
        </el-card>
</template>

<script>
export default {
    props:{
        question:{
            type:String,
            default:'',
        },
        answers:{
            type:Array,
            default:[],
        },
        correct:{
            type:Number,
            default:-1,
        },
        description:{
            type:Array,
            default:[],
        },
        percentage:{
            type:Number,
            default:10
        }
    },
    data() {
      return {
        hasChoose:false,
        know:false,
        radio:-1,
        buttonLabel:'Confirm',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods:{
        handleClickErr(){
            this.$prompt('Please input the error','Error Report',{
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
            }).then(({value})=>{
                this.$message({
                    type: 'warning',
                    message: 'This error has been uploaded, and relevant personnel will review it'
                });

            })
        },
        handleClick(){

            if(this.radio == -1){
                        this.$message({
                        message: 'Select one answer please!',
                        type: 'warning'
                        });
                        //  this.$notify({
                        //     title: 'warning',
                        //     message: '请进行选择',
                        //     type: 'warning'
                        //     });
                    }
            //--------------------------------------------------
                  if(this.buttonLabel=='Confirm' && this.radio != -1){ 

                    if(this.radio == this.correct){
                        this.know = true;
                        $(".description").css("background-image","linear-gradient(#DCE35B,#45B649)");
                    }  
                    if(this.radio != this.correct){
                        this.know = false;
                        $(".description").css("background-image","linear-gradient(#f7b733,#fc4a1a)");
                    } 
                    if(this.percentage!=100) {this.buttonLabel = 'Next';}
                    if(this.percentage==100) {this.buttonLabel = 'Check Report';}
                    $(".description").slideToggle("slow");
                    this.hasChoose = true;
                    return;
                }
                if(this.buttonLabel=='Next'){
                    $(".description").slideToggle("slow",()=>{
                        this.$emit('next',this.know,this.radio);
                        this.radio = -1;
                        this.hasChoose = false;
                        this.buttonLabel = 'Confirm'
                        this.know = false;
                    });
                    
                    return;
                }
                if(this.buttonLabel=='Check Report'){
                    $(".description").slideToggle("slow",()=>{
                        this.$emit('result',this.know,this.radio);
                        this.radio = -1;
                        this.hasChoose = false;
                        this.buttonLabel = 'Confirm'
                        this.know = false;
                    });
                    return;
                }
            // ----------------------------------------------------------
        }
    }
}
</script>

<style>
.box-card{
    position: relative;
    padding:20px;
    padding-bottom: 10px;
}
.box-card .question{
    font-weight:bold;
    margin-bottom: 20px;
}
.box-card .choices .el-radio__label{
    line-height:40px;
    font-size:16px;
}
.description{
    position: relative;
    border-radius:10px;
    height:150px;
    padding:20px;
    margin-top:20px;
    margin-bottom: 40px;
    display: none;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
}
.description .isTitle{
     font-weight: bold;
     margin-bottom:1em;   
    }
/* .button{
    position:absolute;
    bottom:20px;
    margin-top:20px;
} */
.button{
    margin-top:60px;
    margin-bottom: 10px;
}
</style>