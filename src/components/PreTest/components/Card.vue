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

            <div class='button'>
                 <el-button type="primary" @click='handleClick' round>{{buttonLabel}}</el-button>
                 
            </div>
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
        }
    },
    data() {
      return {
        know:false,
        radio:-1,
        buttonLabel:'确认',
      };
    },
    methods:{
        handleClick(){
            if(this.buttonLabel=='确认'){  
                if(this.radio == this.correct){
                    this.know = true;
                    $(".description").css("background-color","#67C23A");
                }  
                if(this.radio != this.correct){
                    this.know = false;
                    $(".description").css("background-color","#F56C6C");
                }  
                this.buttonLabel = '下一题';
                $(".description").slideToggle("slow");
            }else{
                $(".description").slideToggle("slow",()=>{
                    this.radio = -1;
                    this.$emit('next',this.know);
                    this.buttonLabel = '确认'
                    this.know = false;
                });
           }
        }
    }
}
</script>

<style>
.box-card{
    position: relative;
    padding:20px;
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
.button{
    position:absolute;
    bottom:20px;
    margin-top:20px;
}
</style>