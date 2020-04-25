<template>
    <el-card class="box-card" body-style='min-height:300px'>
        
        <el-row>
            <el-col :span='10'>
                <div class='result-box'>
                    <p>正确题数:<span style="padding-left:1.2em;color:green">{{correct}}</span>/10</p>
                    <!-- <p>已掌握章节:
                        <span v-for="(k,index) in know" :key="index">{{k}}<br/></span>
                    
                    </p> -->
                    <div style="float:left">已掌握章节:</div>
                    <div style="padding-left:0.2em;float:left;color:green"><span v-for="(k,index) in know" :key="index">{{k}}<br/></span></div>
                    <!-- <br /><br /><br /> -->
                    <div style="clear:both"></div><br/>
                    <div style="float:left">待掌握章节:</div>
                    <div style="padding-left:0.2em;float:left;color:red"><span v-for="(u,index) in unknow" :key="index">{{u}}<br/></span></div>

                </div>
            </el-col>

            <el-col :span='6' :offset='6'>
                <div style="padding-top:100px"><dragon/></div>
            </el-col>
            
        </el-row>

        <el-row class='button'>
                <el-col :span='6'>
                 <el-button style="display:inline-block" type="primary" @click='handleCheckClick' round>Check My Answers Again</el-button>
                </el-col>
                <el-col :span='6'>
                 <el-button style="display:inline-block" type="success" @click='handleBeginStudy' round>Begin to Study</el-button>
                </el-col>
            </el-row>
        
    
    </el-card>
</template>


<script>
import dragon from '@/dragon-loading-master/dragon'
export default {
    props:{
        correct:{
            type:Number,
            default:0,
        },
        know:{
            type:Array,
            default:['你好','我日'],
        },
        unknow:{
            type:Array,
            default:['你好','我不日'],
        }
    },
    data(){
        return{
            drawer:false,
        }
    },
    components:{
        dragon
    },

    methods:{
        handleCheckClick(){
            this.$emit('check');
        },
        handleBeginStudy(){
            this.$router.push('/JavaSE/Syntax#header');
        }
    }

}
</script>

<style scoped>
.box-card{
    padding:20px;
    padding-bottom: 10px;
}

.result-box{
    margin-left:2em;
    font-weight: bold;
}

</style>