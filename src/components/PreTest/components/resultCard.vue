<template>
    <el-card class="box-card" body-style='min-height:300px'>
        

        <el-row class='button'>
                <el-col :span='6'>
                 <el-button style="display:inline-block" type="primary" @click='handleCheckClick' round>Check My Answers Again</el-button>
                </el-col>
                <el-col :span='6' :offset='2'>
                 
                </el-col>
            </el-row>
        
    
    </el-card>
</template>


<script>
export default {
    data(){
        return{
            drawer:false,
        }
    },

    methods:{
        handleCheckClick(){
            this.$emit('check');
        }
    }

}
</script>