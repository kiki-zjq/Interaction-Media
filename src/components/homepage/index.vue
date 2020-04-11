<template>
    <div class="homepage-block">
        <h2>{{language=='Chinese'?'首页':'HOMEPAGE'}}</h2>
        <!-- <div class="divider"></div> -->
        
        <div class="sub-title">
            {{language=='Chinese'?'关于作者':'About'}}
        </div>
            <div class="homepage-content" v-if='language=="Chinese"'>
                <p>作者朱江奇，北京邮电大学2017级在读，电信工程及管理专业。目前专业排名第一 （1/326）</p><br/>
                <p>对计算机科学以及软件工程方向有着浓厚的兴趣，通过自学了解并掌握了部分编程语言。</p><br/>
                <p>日常喜欢应用新学到的知识做一些小的项目的编写，希望能籍由此巩固知识并提升自己的代码能力。</p><br />
                <p>最后，本项目是一个从零开始搭建的个人主页，页面布局仿照了react-spring官网（<a href='https://www.react-spring.io/'>https://www.react-spring.io/</a>）.</p><br />
                <p>项目搭建在github page上，其中使用到了诸如vue,vue-router,element-ui,e-charts等技术。同时为了解析json文件也进行了axios封装。<b>（由于github-page网站自身的原因，加载图片的时候可能速度较慢）</b></p><br />
                <p>本网站可能还有诸多不足，但希望伴随着自己的技能成长可以进一步的完善填充它。</p><br />
                <p>最后！24小时在线求职求实验室求求了QnQ（<a style='color:black;font-weight:bold' href='#/#contact'>联系方式</a>）</p>
            </div>
        
            <div class="homepage-content" v-if='language=="English"'>
                <p>Jiangqi Zhu, a junior student from Beijing University of Posts and Telecommunications (BUPT).My college major is telecommunications engineering with Management with overall GPA 91.9/100 , <b>ranking 1st among 328</b>. </p><br/>
                <p> I am very interested in software engineering, data mining and database. At the same time, I like to use programming language to write some simple projects in my daily study. </p><br/>
                <p> For details about information and projects please check my CV or my Github. </p><br />
                <p> Finally, this project is a personal homepage built from scratch, with the page layout modeled on the react-spring website（<a href='https://www.react-spring.io/'>https://www.react-spring.io/</a>）.</p><br />
                <p> This project, which has used vue, vuex, vue-router, axios and many front-end technologies, set up based on github-page.<b>(Some images may be slow to load due to github-page itself)</b></p><br />
                <p> This website may have many shortcomings, but I hope that with the growth of my skills I can  further improve it by myself.</p><br />
                <p> At last, asking for an opportunity about research in a lab or work as a internship！！QnQ（<a style='color:black;font-weight:bold' href='#/#contact'>Contact Me pls！！</a>）</p>
            </div>

        <!--------------------------------------------------------------------------------------------------------------->
        <div class="sub-title" id='skill'>{{language=='Chinese'?'你将学会':'What will you learn'}}</div>
            <div class="homepage-content">
                <RectTreeChart class='rect-tree-chart'/>
            
            </div>
        
        <!--------------------------------------------------------------------------------------------------------------->
        <div class="sub-title" id='contact'>{{language=='Chinese'?'联系方式':'Contact'}}</div>
            
            <div class="homepage-content" v-if='language=="Chinese"'>
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
            </div>
        
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