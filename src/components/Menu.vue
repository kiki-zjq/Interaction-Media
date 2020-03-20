<template>
         <el-menu
      :default-active="active"
      class="el-menu-vertical-demo main-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fafafa"
      text-color="#000"
      active-text-color="#ff4f4f"
      >

      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->

      <!-- <el-menu-item index="1" @click='handleClick(1)'>
        <i class="el-icon-menu"></i>
        <span slot="title">首页  HOMEPAGE</span>
      </el-menu-item> -->

      <el-submenu index='1'>
        <template slot='title'>
          <i class="el-icon-menu"></i>
          <span slot="title">{{language=='Chinese'?'首页':'HOMEPAGE'}}</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="1-1" @click='handleClick(1.1)'>
            {{language=='Chinese'?'关于作者':'About'}}
          </el-menu-item>

          <el-menu-item index="1-2" @click='handleClick(1.2)'>
            {{language=='Chinese'?'相关技术栈':'Skill'}}
          </el-menu-item>

          <el-menu-item index="1-3" @click='handleClick(1.3)'>
            {{language=='Chinese'?'联系方式':'Contact'}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2" @click='handleClick(2)'>
        <i class="el-icon-edit"></i>
        <span slot="title">{{language=='Chinese'?'简历':'RESUME'}}</span>
      </el-menu-item>

      <el-menu-item index="3" @click='handleClick(3)'>
        <i class="el-icon-document"></i>
        <span slot="title">{{language=='Chinese'?'经历':'EXPERIENCE'}}</span>
      </el-menu-item>

      <el-menu-item index="5" @click='handleClick(5)'>
        <i class="el-icon-suitcase"></i>
        <span slot="title">{{language=='Chinese'?'项目':'PROJECT'}}</span>
      </el-menu-item>

      <el-menu-item index="6" @click='handleClick(6)'>
        <i class="el-icon-reading"></i>
        <span slot="title">{{language=='Chinese'?'证书':'CERTIFICATION'}}</span>
      </el-menu-item>

      <!-- <el-menu-item index="4" @click='handleClick(4)'>
        <i class="el-icon-setting"></i>
        <span slot="title">其他  OTHERS</span>
      </el-menu-item> -->

    </el-menu>
</template>

<script>
let active='1';
export default {
   props:{
        language:{
            type:String,
            default:'Chinese',
        }
    },
  data(){
    return{
      active
    }
  },
  mounted(){
    switch(this.$route.path){
      case '/':
        this.active='1';break;
      case '/resume':
        this.active='2';break;
      case '/experience':
        this.active='3';break;
      case '/others':
        this.active='4';break;
      case '/projects':
        this.active='5';break;
      case '/certification':
        this.active ='6';break;
      default:
        this.active='1';
    }
  },
  watch:{
    $route(to,from){
      switch(to.path){
      case '/resume':
        this.active='2';return;
      case '/experience':
        this.active='3';return;
      case '/others':
        this.active='4';return;
      case '/projects':
        this.active='5';break;
      case '/certification':
        this.active ='6';break;
      }
      if(to.path=='/'){
        switch(to.hash){
          case '#skill':this.active='1-2';return;
          case '#contact':this.active = '1-3';return;
          case '#anchor':this.active = '1-1';return;
          default:this.active = '1-1';
        }
      }
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClick(index){
          // if(index==2){
          //   this.$router.push('/resume#anchor');
          // }else if(index==3){
          //   this.$router.push('/experience#anchor');
          // }else if(index==4){
          //   this.$router.push('/others#anchor');
          // }else if(index==1){
          //   this.$router.push('/#anchor');
          // }
          switch(index){
            case 2:this.$router.push('/resume#anchor');break;
            case 3:this.$router.push('/experience#anchor');break;
            case 4:this.$router.push('/others#anchor');break;
            case 5:this.$router.push('/projects#anchor');break;
            case 6:this.$router.push('/certification#anchor');break;
            case 1.1:this.$router.push('/#anchor');break;
            case 1.2:this.$router.push('/#skill');break;
            case 1.3:this.$router.push('/#contact');break;
          }
      },
    }
  };
</script>

<style >

ul.el-menu-vertical-demo.main-menu.el-menu{
    padding-left:5%;
    font-size:20px;
    font-weight:bold;
    border-color:"#fafafa";
    border-radius:20px;
    text-align: left;
    background-color:"#fafafa";
}
</style>
