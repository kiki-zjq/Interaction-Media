<template>

<div class='Menu-block'>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
         <el-menu
      :collapse="isCollapse"
      :default-active="active"
      :unique-opened="true"
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
          <i class="el-icon-s-grid"></i>
            <span slot="title">{{language=='Chinese'?'首页':'HOMEPAGE'}}
            <!-- <i style='margin-left:20px' v-if="language=='Chinese'" class="el-icon-success"></i> -->
          </span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="1-1" @click='handleClick(1.1)'>
            {{language=='Chinese'?'介绍':'Introduction'}}
          </el-menu-item>

          <el-menu-item index="1-2" @click='handleClick(1.2)'>
            {{language=='Chinese'?'你将学会':'What will you learn'}}
          </el-menu-item>

          <el-menu-item index="1-3" @click='handleClick(1.3)'>
            {{language=='Chinese'?'使用说明':'Guide'}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2" @click='handleClick(2)'>
        <template slot='title'>
          <i class="el-icon-edit"></i>
          <span slot="title">{{language=='Chinese'?'课前测试':'Pre-Course Test'}}</span>
          <!-- <i style='margin-left:20px' v-if="language=='Chinese'" class="el-icon-success"></i> -->
        </template>
      </el-menu-item>

      <!------------------------------------------------------------------------------------>
       <el-submenu index='3'>
        <template slot='title'>
          <i class="el-icon-menu"></i>
            <span slot="title">{{language=='Chinese'?'JavaSE':'JavaSE'}}</span>
            <i style='margin-left:20px' v-if="know[0]" class="el-icon-success"></i>
        </template>
        <el-menu-item-group style='padding-left:20px'>

          <el-menu-item index="3-1" @click='handleClick(3.1)'>
            {{language=='Chinese'?'基本语法':'Basic Syntax'}}
          </el-menu-item>

          <el-menu-item index="3-2" @click='handleClick(3.2)'>
            {{language=='Chinese'?'面向对象':'Object-oriented'}}
          </el-menu-item>

          <el-menu-item index="3-3" @click='handleClick(3.3)'>
            {{language=='Chinese'?'数据结构':'Data Structure'}}
          </el-menu-item>

          <!-- <el-menu-item index="3-4" @click='handleClick(3.4)'>
            {{language=='Chinese'?'JVM':'JVM'}}
          </el-menu-item>

          <el-menu-item index="3-5" @click='handleClick(3.5)'>
            {{language=='Chinese'?'多线程':'Multi-process'}}
          </el-menu-item> -->


        </el-menu-item-group>
      </el-submenu>
      
      <!------------------------------------------------------------------------------------>


      <el-submenu index='5'>
        <template slot='title'>
          <i class="el-icon-document"></i>
          <span slot="title">{{language=='Chinese'?'JavaWeb':'JavaWeb'}}</span>
          <i style='margin-left:20px' v-if="know[1]" class="el-icon-success"></i>
        </template>

        <el-menu-item-group style='padding-left:20px'>

          <el-menu-item index="5-1" @click='handleClick(4.1)'>
            {{language=='Chinese'?'JSP 简介':'JSP Introduction'}}
          </el-menu-item>

          <el-menu-item index="5-2" @click='handleClick(4.2)'>
            {{language=='Chinese'?'JSP 结构':'JSP Structure'}}
          </el-menu-item>
        </el-menu-item-group>


      </el-submenu>

      <!------------------------------------------------------------------------------------>

      <el-submenu index='6'>
      
        <template slot='title'>
          <i class="el-icon-copy-document"></i>
          <span slot="title">{{language=='Chinese'?'Java 常用框架':'Java Frame'}}</span>
          <i style='margin-left:20px' v-if="know[2]" class="el-icon-success"></i>
        </template>

        <el-menu-item-group style='padding-left:20px'>

          <el-menu-item index="6-1" @click='handleClick(5.1)'>
            {{language=='Chinese'?'Spring':'Spring'}}
          </el-menu-item>

          <el-menu-item index="6-2" @click='handleClick(5.2)'>
            {{language=='Chinese'?'MyBatis':'MyBatis'}}
          </el-menu-item>
        </el-menu-item-group>

      </el-submenu>


      <!-- <el-menu-item index="8" @click='handleClick(6)'>
        <template slot='title'>
          <i class="el-icon-s-order"></i>
          <span slot="title">{{language=='Chinese'?'数据库':'Database'}}</span>
          <i style='margin-left:20px' v-if="know[3]" class="el-icon-success"></i>
        </template>
      </el-menu-item> -->
      <!------------------------------------------------->
      <el-submenu index='8'>
        <template slot='title'>
          <i class="el-icon-s-order"></i>
          <span slot="title">{{language=='Chinese'?'数据库':'Database'}}</span>
          <i style='margin-left:20px' v-if="know[3]" class="el-icon-success"></i>
        </template>
        <el-menu-item-group style='padding-left:20px'>

          <el-menu-item index="8-1" @click='handleClick(8.1)'>
            {{language=='Chinese'?'MySQL':'MySQL'}}
          </el-menu-item>

          <el-menu-item index="8-2" @click='handleClick(8.2)'>
            {{language=='Chinese'?'MongoDB':'MongoDB'}}
          </el-menu-item>


        </el-menu-item-group>

      </el-submenu>
      <!------------------------------------------------->

      <el-menu-item index="7" @click='handleClick(7)'>
        <template slot='title'>
          <i class="el-icon-reading"></i>
          <span slot="title">{{language=='Chinese'?'课后测试':'Final Test'}}</span>
          <!-- <i style='margin-left:20px' v-if="know[2]" class="el-icon-success"></i> -->
        </template>
      </el-menu-item>
      <!-- <el-menu-item index="4" @click='handleClick(4)'>
        <i class="el-icon-setting"></i>
        <span slot="title">其他  OTHERS</span>
      </el-menu-item> -->

    </el-menu>


</div>
</template>

<script>
let active='1';
export default {
   props:{
        language:{
            type:String,
            default:'Chinese',
        },

    },
  data(){
    return{
      active,
      isCollapse:false,
    }
  },
  mounted(){
    switch(this.$route.path){
      case '/':
        this.active='1';break;
      case '/pre-test':
        this.active='2';break;
      case '/experience':
        this.active='3';break;
      case '/others':
        this.active='4';break;
      case '/projects':
        this.active='5';break;
      case '/certification':
        this.active ='6';break;
      case '/JavaSE/Syntax':
        this.active='3-1';break;
      case '/JavaSE/ObjectOrient':
        this.active='3-2';break;
      case '/JavaSE/DataStructure':
        this.active='3-3';break;
      case '/JavaSE/JVM':
        this.active='3-4';break;
      case '/JavaSE/MultiProcess':
        this.active='3-5';break;
      case '/after-test':
        this.active='7';break;
       case '/Database/MySQL':
        this.active='8-1';break;
      case '/Database/MongoDB':
        this.active='8-2';break;
      case '/JavaFrame/MyBatis':
        this.active='6-2';break;
      case '/JavaFrame/Spring':
        this.active='6-1';break;
        case '/JavaWeb/JSP-intro':
        this.active='5-1';break;
      case '/JavaWeb/JSP-structure':
        this.active='5-2';break;
      default:
        this.active='1';
    }
  },
  watch:{
    $route(to,from){
      switch(to.path){
      case '/pre-test':
        this.active='2';return;
      case '/experience':
        this.active='3';return;
      case '/others':
        this.active='4';return;
      case '/projects':
        this.active='5';break;
      case '/certification':
        this.active ='6';break;
      case '/JavaSE/Syntax':
        this.active='3-1';break;
      case '/JavaSE/ObjectOrient':
        this.active='3-2';break;
      case '/JavaSE/DataStructure':
        this.active='3-3';break;
      case '/JavaSE/JVM':
        this.active='3-4';break;
      case '/JavaSE/MultiProcess':
        this.active='3-5';break;
      case '/after-test':
        this.active='7';break;
      case '/Database/MySQL':
        this.active='8-1';break;
      case '/Database/MongoDB':
        this.active='8-2';break;
      case '/JavaFrame/MyBatis':
        this.active='6-2';break;
      case '/JavaFrame/Spring':
        this.active='6-1';break;
      case '/JavaWeb/JSP-intro':
        this.active='5-1';break;
      case '/JavaWeb/JSP-structure':
        this.active='5-2';break;

        
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
          switch(index){
            case 2:this.$router.push('/pre-test#anchor');break;
            case 3:this.$router.push('/experience#anchor');break;
            case 4:this.$router.push('/JavaWeb');break;
            case 5:this.$router.push('/JavaFrame');break;
            case 6:this.$router.push('/Database');break;
            case 7:this.$router.push('/after-test#anchor');break;
            case 1.1:this.$router.push('/#anchor');break;
            case 1.2:this.$router.push('/#skill');break;
            case 1.3:this.$router.push('/#contact');break;
            case 3.1:this.$router.push('/JavaSE/Syntax#header');break;
            case 3.2:this.$router.push('/JavaSE/ObjectOrient#header');break;
            case 3.3:this.$router.push('/JavaSE/DataStructure#header');break;
            case 3.4:this.$router.push('/JavaSE/JVM#header');break;
            case 3.5:this.$router.push('/JavaSE/MultiProcess#header');break;
            case 8.1:this.$router.push('/Database/MySQL#header');break;
            case 8.2:this.$router.push('/Database/MongoDB#header');break;
            case 5.1:this.$router.push('/JavaFrame/Spring#header');break;
            case 5.2:this.$router.push('/JavaFrame/MyBatis#header');break;
            case 4.1:this.$router.push('/JavaWeb/JSP-intro#header');break;
            case 4.2:this.$router.push('/JavaWeb/JSP-structure#header');break;
            
            
          }
      },
    },
    computed:{
      know:function(){
        return this.$store.state.know
      }
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
.el-submenu__icon-arrow{
  font-weight:bold;
  color:black;
}
</style>
