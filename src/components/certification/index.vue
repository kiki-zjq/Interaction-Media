<template>
    <div class='block'>
        <h2>{{language=='Chinese'?'证书':'CERTIFICATION'}}</h2>

            <div class="certi-content">

                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Machine Learning.jpg' 
                                        projectName='Machine Learning' :srcList='srcList'/>
                            </el-col>
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/M001.png' 
                                        projectName='MongoDB basic' :srcList='srcList'/>
                            </el-col>
                        </el-row>


                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/M220JS.png'  
                                        projectName='MongoDB JS' :srcList='srcList'/>
                            </el-col>

                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Responsive Web Design.png' 
                                        projectName='Responsive Web Design' :srcList='srcList'/>
                            </el-col>
                        </el-row>


                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Algorithms and Data Structure.png' 
                                        projectName='Algorithms and Data Structure' :srcList='srcList'/>
                            </el-col>

                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Front End Library.png' 
                                        projectName='Front End Library' :srcList='srcList'/>
                            </el-col>
                        </el-row>


                        <el-row gutter="20">
                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/APIs and Microservices.png' 
                                        projectName='APIs and Microservices' :srcList='srcList'/>
                            </el-col>

                            <el-col :span='12'>
                                <imgShow src='../../static/img/Certification/Data Visualization.png' 
                                        projectName='Data Visualization' :srcList='srcList'/>
                            </el-col>
                        </el-row>
            </div>

    </div>
</template>

<script>
import imgShow from './components/imgShow';

export default {
    components:{
            imgShow,
        },
    data() {
      return {
        url: '',
        srcList: [
          '../../static/img/Certification/Machine Learning.jpg',
          '../../static/img/Certification/M001.png',
          '../../static/img/Certification/M220JS.png',
          '../../static/img/Certification/Responsive Web Design.png',
          '../../static/img/Certification/Algorithms and Data Structure.png',
          '../../static/img/Certification/Front End Library.png',
          '../../static/img/Certification/APIs and Microservices.png',
          '../../static/img/Certification/Data Visualization.png'
        ],
      }
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
}
</script>

<style scoped>
.block{
    text-align: left;
    margin-bottom: 200px;
}
.block h2{
        width:fit-content;
        display: inline-block;
        padding:2px 12px 4px;
        border-bottom: 4px #FF4F4F solid;
    }

.sub-title{
        margin-top:5%;
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
    .certi-content{
        margin-top:5%;
        width:100%;
        font-size:16px;
        height:400px;
    }
    .container{
        padding:10px;
        background:#303841;
    }
    .el-col{
        margin-bottom: 20px;
    }
</style>