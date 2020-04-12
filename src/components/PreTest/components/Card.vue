<template>
    <el-card class="box-card" body-style='min-height:300px'>
            <div class="question">
                {{question}}
            </div>
            <div class='choices'>
                <el-radio-group  v-model="radio">
                    <el-radio class='choices-item' style='display:block' v-for="(a,index) in answers" :key="index" :label="index" >
                        {{a}}
                    </el-radio>
                </el-radio-group>
            </div>

            <div class='description'>
                {{description}}
            
            </div>

            <el-row class='button'>
                <el-col :span='6'>
                 <el-button style="display:inline-block" type="primary" @click='handleClick' round>{{buttonLabel}}</el-button>
                </el-col>
                <el-col :span='6' :offset='2'>
                 <el-progress :text-inside="true" :stroke-width="24" :percentage="percentage" :color="customColors"></el-progress>
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
            type:String,
            default:'',
        },
        percentage:{
            type:Number,
            default:10
        }
    },
    data() {
      return {
        know:false,
        radio:-1,
        buttonLabel:'确认',
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
        handleClick(){

            if(this.radio == -1){
                        this.$message({
                        message: '请进行选择',
                        type: 'warning'
                        });
                        //  this.$notify({
                        //     title: 'warning',
                        //     message: '请进行选择',
                        //     type: 'warning'
                        //     });
                    }
            //--------------------------------------------------
                  if(this.buttonLabel=='确认' && this.radio != -1){ 

                    if(this.radio == this.correct){
                        this.know = true;
                        $(".description").css("background-color","#67C23A");
                    }  
                    if(this.radio != this.correct){
                        this.know = false;
                        $(".description").css("background-color","#F56C6C");
                    } 
                    if(this.percentage!=30) {this.buttonLabel = '下一题';}
                    if(this.percentage==30) {this.buttonLabel = '查看报告';}
                    $(".description").slideToggle("slow");
                    return;
                }
                if(this.buttonLabel=='下一题'){
                    $(".description").slideToggle("slow",()=>{
                        this.$emit('next',this.know,this.radio);
                        this.radio = -1;
                        this.buttonLabel = '确认'
                        this.know = false;
                    });
                    return;
                }
                if(this.buttonLabel=='查看报告'){
                    $(".description").slideToggle("slow",()=>{
                        this.$emit('result',this.know,this.radio);
                        this.radio = -1;
                        this.buttonLabel = '确认'
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