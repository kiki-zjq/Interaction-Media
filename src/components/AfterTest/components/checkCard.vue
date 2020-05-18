<template>
    <el-card class="box-card" body-style='min-height:300px'>
        <div class="question">
                {{question}}
            </div>
            <div class='check_list'>
                <ul style="list-style-type:none;" >
                    <li v-for="(a,index) in answers" 
                        :key="index" 
                        :label="index" 
                        :class="{ correctAnswer: correct==index, myWrong: index == myAnswers }"
                        
                        >
                        {{a}}</li>
                </ul>
                
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
        myAnswers:{
            type:Number,
            default:-1,
        }
    }

}
</script>


<style scoped>
    .box-card{
        margin-bottom: 20px
    }
    .check_list ul{
        padding-inline-start: 1em;        
    }
    .check_list li{
        margin-bottom: 5px;
    }
    .myWrong{
        color:red;
        font-weight: bold;
    }
    .correctAnswer{
        color:green;
        font-weight: bold;
    }
    

</style>