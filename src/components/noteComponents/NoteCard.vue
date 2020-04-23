<template>
    <div class='note-card-block'>
        <el-card class="box-card">
            <p><span class='title'>Title:</span><b> {{title}}</b></p>
            <p><span class='sub-title'>Sub-title:</span><b> {{subTitle}}</b></p>
            <p><span class='sub-title'>Time:</span><b> {{nowTime}}</b></p>
            <el-divider></el-divider>
            <span class='note-title'>Note:</span><br /><span class='note-block'>{{note}}</span>
            
            <!-- <el-button class='save-button' type="success" icon="el-icon-check" @click='save' circle></el-button> -->
            <el-button class='delete-button' type="danger" icon="el-icon-delete" @click='del' circle></el-button>
            
        </el-card>
    </div>
</template>


<script>
export default {
    props:{
        title:{
            type:String,
            default:'',
        },
        subTitle:{
            type:String,
            default:'',
        },
        nowTime:{
            type:String,
            default:'',
        },
        note:{
            type:String,
            default:'',
        },
        index:{
            type:Number,
            default:-1,
        }
        
    },
    data(){
        return{
            

        }
    },
    // computed:{
    //     nowTime:function(){
    //         return (new Date()).Format("yyyy-MM-dd hh:mm:ss.S")
    //     }
    // },
    methods:{
        save(){
            this.$emit('save',this.title,this.subTitle,this.time,this.nowTime)
        },
        del(){
            this.$emit('delete',this.index)
        }
    }
  

}
</script>

<style scoped>
    .note-card-block{
        margin:30px;
        text-align:left;
        position: relative;
    }

    .title{
        font-weight:bold;
        color:coral;
    }

    .sub-title{
        font-weight:bold;
        color:rgb(255, 184, 108);
    }

    .note-title{
        font-weight:bold;
        color:#409EFF;
        
    }
    .note-block{
        display: inline-block;
        margin-top:1em;
    }

    .save-button{
        position:absolute;
        top:30px;
        right:20px;
    }

    .delete-button{
        position:absolute;
        top:30px;
        right:20px;
    }

</style>

