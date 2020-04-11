<template>
    <el-card class="box-card" body-style='min-height:300px'>
        <div class="question">
                {{question}}
            </div>
            <div class='choices'>
                <ul>
                    <li v-for="(a,index) in answers" :key="index" :label="index">{{a}}</li>
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
    }

}
</script>


<style scoped>
    .box-card{
        margin-bottom: 20px
    }

</style>