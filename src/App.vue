<template>
  <div id="app">
    <IntroPage v-bind:language='language' v-on:changeLang='changeLang()'/>
    <GetStart id='anchor' name='anchor'/>
    
    <!-- <el-row>
      <el-col :span="4" :offset="2"> 
        <div class="menu">
          <Menu />
        </div>
      </el-col>
      <el-col :span="14" :offset="2">
        <router-view/>
      </el-col>
    </el-row> -->
    <div class='main-part'>
      <div class='menu' >
        <Menu v-bind:language='language'/>
      </div>
      <div class='content'>
        <router-view />
      </div>
    </div>

     <!-- <Footer class='footer'/> -->
  </div>
</template>

<script>
import IntroPage from '@/components/Intro'
import GetStart from '@/components/GetStart'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  data(){
    return{
      language:'Chinese',
    }
  },
  methods:{
    changeLang(){
      if (this.language == 'Chinese'){
         this.language = 'English'
      }else{
        this.language = 'Chinese'
      } 
    }
  },
  components:{
    IntroPage,
    GetStart,
    Menu,
    Footer
  },
};
$(window).scroll( function() {
        let h = window.screen.availHeight;
        if(document.documentElement.scrollTop>=h){
            $(".menu").addClass("fix");
           //console.log(document.documentElement.scrollTop);
        }
        else{
             $(".menu").removeClass("fix");
        }
    } );//这一段以后优化一下，加一个回调函数让他不要一直在那里判断
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center
}
/* .main-part{
  position:relative;
}
Menu{
  position:absolute;
} */

.main-part{
  width:100%;
  /* border:black solid 1px; */
  position: relative;
  min-height: 1600px;
  min-width: 1200px;
  border-radius: 50px;
  background-color: white;
}

.menu{
  width:30%;
  padding-left:10%;
  padding-top:5vh;
  box-sizing: border-box;
  /* border:black solid 1px; */
  position:absolute;
}

.content{
  width:60%;
  right:5%;
  margin-top:1%;
  margin-left:4%;
  /* border:black solid 1px; */
  position: absolute;
  float:left;
}

.fix{
  position:fixed;
  top:3vh;
  left:0
}

.footer{
  position: relative;
  
}
</style>
