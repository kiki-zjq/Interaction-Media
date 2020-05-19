<template>
    <div class="homepage-block">
        <h2>{{language=='Chinese'?'首页':'HOMEPAGE'}}</h2>
        <!-- <div class="divider"></div> -->
        
        <div class="sub-title">
            {{language=='Chinese'?'介绍':'Introduction'}}
        </div>
            <div class="homepage-content" v-if='language=="Chinese"'>
                <h3> 网站应用</h3><br/>
                <p>1.我们网站的主要目的是为人们提供免费的平台和资源，使他们能够自学Java语言和编程技能</p><br/>
                <p>2.帮助JP学生，使他们也可以利用该网站来复习过去所学过的Java知识。</p><br/>
                <p>3.网站增加了一些基本Java函数的介绍和相应的代码示例及其执行结果，我们会不时更新网站，让用户随时了解最新的知识。</p><br/>
                <p>4.通过设计该网站，我们希望教授基本的编程技能和各种编程技能，并提供学前测试和一些学习后的练习，目的是让人们意识到自己的编程水平，帮助他们选择合适的课程，并及时实践他们刚刚学到的东西。</p><br/>
                <p>5.网站本身是免费的，当然如果你觉得网站设计的不错，也欢迎请设计者喝一杯咖啡。</p><br/>
                <p>6.最后，如果用户想加入我们或更新网站上的一些内容，他们也可以通过电子邮件发送他们的应用程序给我们.</p><br/>
                <el-divider></el-divider>

                <h3> 目标受众</h3><br/>
                <p>我们网站的目标受众可以分为多种类型。我们的主要目标受众是想学习Java的Joint program学生。一般来说，我们的目标受众是那些希望自学或复习Java编程的人。具体来说，这些人可以分为学生和其他人:</p><br/>
                <p>1.打算利用这个网站作为他们学习功课的辅助平台的同学.</p><br/>
                <p>2.针对初学Java的同学.</p><br/>
                <p>3.对于一些互联网从事人员，想要更进一步的了解相关的技能，以此来提高工作效率.</p><br/>
                <p>4.针对想要通过Java语言来获取一份工作的人.</p><br/>
                <p>5.或者你仅仅想要学习Java拓宽视野，也欢迎在这个网站进行学习！</p><br/>
            </div>
        
            <div class="homepage-content" v-if='language=="English"'>
                <h3> Targets of our website</h3><br/>
                <p>1.The main purpose of our website is to provide people with free auxiliary tools so that they can self-study Java language and programming skills</p><br/>
                <p>2.Help JP students so that they can also use the website as a resource to review their study.</p><br/>
                <p>3.Some introductions of basic Java functions and corresponding code examples with their executed results are added to the web, and we will update the website from time to time, so users always have access to up-to-date knowledge.</p><br/>
                <p>4.By designing the multimedia website, we want to teach basic and various programming skills, besides, preschool tests and some exercises after study are available, which aims to make people be aware of their programming level, helping them choose propriate lessons and practice what they just learned in time.</p><br/>
                <p>5.The whole design is free, but we will be grateful to users’ voluntary donation, the donation button can be found at the website.</p><br/>
                <p>6.The last but not least, if users want to join us or update some contents on the website, they can send their applications to us through Email.</p><br/>
                <el-divider></el-divider>

                <h3> End user profile</h3><br/>
                <p>Target audience of our website can be classified as many types. Our main target audience are Joint Program students who want to study Java. Broadly speaking, our target audience are people who want to study or review Java programming on their own. To be more specific, those people can be classified as students and other people:</p><br/>
                <p>1.Some students who intend to use this website as their auxiliary tool to study their school lessons.</p><br/>
                <p>2.Some students who may use this website as their first textbook to begin their programming study.</p><br/>
                <p>3.For other people, they can be computer industry personnel who want to be more familiar with specific functions and do some exercise to enhance their efficiency.</p><br/>
                <p>4.Besides, they can be some people looking forward to finding a job about Java programming .</p><br/>
                <p>5.They can be someone just want to learn Java to broaden their horizons.</p><br/>
        
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