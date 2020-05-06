<template>
  <div id="app">
    <IntroPage v-bind:language='language' v-on:changeLang='changeLang()'/>
    <GetStart id='anchor' name='anchor'/>
  

    <div class="Wrapper">
      <div class='Menu'>
        <Menu :language='language' />
      </div>
      <div class="View">
        <router-view/>
      </div>
    </div>

    <Footer class='footer'/>
     
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
  // watch:{
  //   $router(to,from){
  //     let contentHeight = document.getElementById('content').clientHeight
  //     contentHeight = contentHeight <= 1500? contentHeight : contentHeight+300
  //     console.log(contentHeight)
  //     $(".PropUp").css("height",contentHeight);
  //   }
  // },
  components:{
    IntroPage,
    GetStart,
    Menu,
    Footer
  },
};

</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

.main-part{
  width:100%;
  position: relative;
  min-height: 800px;
  min-width: 1200px;
  border-radius: 50px;
  background-color: white;
  border-radius:0 0 20px 20px;
  border:black solid 5px;
  /* overflow:hidden; */
}

.Wrapper{
  min-height:800px;
  min-width: 1250px;
  width:100%;
}

.Wrapper:after{
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.Menu{
  width:30%;
  padding-left:10%;
  padding-top: 5vh;
  min-width: 400px;
  box-sizing: border-box;
  float:left;
  position: sticky;
  top:5vh;
}

.View{
  float:left;
  width:60%;
  margin-top:1%;
  margin-left:4%;
}
.content{
  width:60%;
  margin-top:1%;
  margin-left:4%;
  /* border:black solid 1px; */
 
  /* float:left; */
}
.fix{
  position:fixed;
  top:3vh;
  left:0
}
.footer{
  margin-top:100px;
  min-width: 1250px;
}
</style>
