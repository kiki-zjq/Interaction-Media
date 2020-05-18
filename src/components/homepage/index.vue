<template>
    <div class="homepage-block">
        <h2>{{language=='Chinese'?'首页':'HOMEPAGE'}}</h2>
        <!-- <div class="divider"></div> -->
        
        <div class="sub-title">
            {{language=='Chinese'?'介绍':'Introduction'}}
        </div>
            <div class="homepage-content" v-if='language=="Chinese"'>
                
            </div>
        
            <div class="homepage-content" v-if='language=="English"'>
                <!-- <p>Jiangqi Zhu, a junior student from Beijing University of Posts and Telecommunications (BUPT).My college major is telecommunications engineering with Management with overall GPA 91.9/100 , <b>ranking 1st among 328</b>. </p><br/>
                <p> I am very interested in software engineering, data mining and database. At the same time, I like to use programming language to write some simple projects in my daily study. </p><br/>
                <p> For details about information and projects please check my CV or my Github. </p><br />
                <p> Finally, this project is a personal homepage built from scratch, with the page layout modeled on the react-spring website（<a href='https://www.react-spring.io/'>https://www.react-spring.io/</a>）.</p><br />
                <p> This project, which has used vue, vuex, vue-router, axios and many front-end technologies, set up based on github-page.<b>(Some images may be slow to load due to github-page itself)</b></p><br />
                <p> This website may have many shortcomings, but I hope that with the growth of my skills I can  further improve it by myself.</p><br />
                <p> At last, asking for an opportunity about research in a lab or work as a internship！！QnQ（<a style='color:black;font-weight:bold' href='#/#contact'>Contact Me pls！！</a>）</p> -->
            </div>

        <!--------------------------------------------------------------------------------------------------------------->
        <div class="sub-title" id='skill'>{{language=='Chinese'?'你将学会':'What will you learn'}}</div>
            <div class="homepage-content">
                <RectTreeChart class='rect-tree-chart'/>
            
            </div>
        
        <!--------------------------------------------------------------------------------------------------------------->
        <div class="sub-title" id='contact'>{{language=='Chinese'?'使用说明':'Guide'}}</div>
            
            <!-- <div class="homepage-content" v-if='language=="Chinese"'>
                <b>邮箱: </b><span style='margin-left:26px'>zhujiangqi@bupt.edu.cn</span><br />
                <span style="margin-left:64px;">zhujiangqi@outlook.com</span><br/><br/>
                <b>Github: </b>
                <a style="color:black;" href="https://github.com/kiki-zjq" target="_blank">https://github.com/kiki-zjq</a><br/><br/>
                <b>手机号:</b><span style='margin-left:20px'>18810701233</span><br/><br/>
            </div>

            <div class="homepage-content" v-if='language=="English"'>
                <b>E-mail: </b><span style='margin-left:4px'>zhujiangqi@bupt.edu.cn</span><br />
                <span style="margin-left:64px;">zhujiangqi@outlook.com</span><br/><br/>
                <b>Github: </b>
                <a style="color:black;" href="https://github.com/kiki-zjq" target="_blank">https://github.com/kiki-zjq</a><br/><br/>
                <b>Tel:</b><span style='margin-left:30px'>18810701233</span><br/><br/>
            </div> -->
        
        <!--------------------------------------------------------------------------------------------------------------->
    </div>
</template>

<script src="https://kit.fontawesome.com/20e781ec47.js" crossorigin="anonymous"></script>
<script>
import RectTreeChart from './components/RectTreeChart';


export default {
  components:{
      RectTreeChart,
  },
  data(){
      return{
         
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
    .homepage-block{
        font-family:'Verdana','Microsoft YaHei';
        text-align: left;
    }
    .homepage-block h2{
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
    .homepage-content{
        margin-top:5%;
        width:100%;
        font-size:14px;
        min-height:400px;
    }
    .homepage-content p{
        margin-top:-5px;
        line-height:1.5em;
    }
    .rect-tree-chart{
        margin-top:-75px;
    }

</style>