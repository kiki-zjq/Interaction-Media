import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage/index.vue'
import PreTest from '@/components/PreTest/index.vue'
import AfterTest from '@/components/AfterTest/index.vue'
import Experience from '@/components/experience/index.vue'
import Others from '@/components/others/index.vue'
import Projects from '@/components/projects/index.vue'
import Certification from '@/components/certification/index.vue'
import BasicSyntax from '@/components/JavaSE/BasicSyntax/index.vue'
import ObjectOrient from '@/components/JavaSE/ObjectOrient/index.vue'
import DataStructure from '@/components/JavaSE/DataStructure/index.vue'
import JVM from '@/components/JavaSE/JVM/index.vue'
import MultiProcess from '@/components/JavaSE/MultiProcess/index.vue'

import MySQL from '@/components/Database/MySQL/index.vue'
import MongoDB from '@/components/Database/Mongo/index.vue'

import MyBatis from '@/components/JavaFrame/MyBatis/index.vue'
import Spring from '@/components/JavaFrame/Spring/index.vue'

import JavaWebIntro from '@/components/JavaWeb/intro/index.vue'
import JavaWebStruct from '@/components/JavaWeb/struct/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/pre-test',
      name:'PreTest',
      component:PreTest
    },
    {
      path:'/after-test',
      name:'AfterTest',
      component:AfterTest
    },
    {
      path:'/experience',
      name:'Experience',
      component:Experience
    },
    {
      path:'/others',
      name:'Others',
      component:Others
    },
    {
      path:'/projects',
      name:'Projects',
      component:Projects
    },
    {
      path:'/certification',
      name:'Certification',
      component:Certification
    },
    {
      path:'/JavaSE/Syntax',
      name:'BasicSyntax',
      component:BasicSyntax
    },
    {
      path:'/JavaSE/ObjectOrient',
      name:'ObjectOrient',
      component:ObjectOrient
    },
    {
      path:'/JavaSE/DataStructure',
      name:'DataStructure',
      component:DataStructure
    },
    {
      path:'/JavaSE/JVM',
      name:'JVM',
      component:JVM
    },
    {
      path:'/JavaSE/MultiProcess',
      name:'MultiProcess',
      component:MultiProcess
    },
    {
      path:'/Database/MySQL',
      name:'MySQL',
      component:MySQL
    },
    {
      path:'/Database/MongoDB',
      name:'MongoDB',
      component:MongoDB
    },
    {
      path:'/JavaFrame/MyBatis',
      name:'MyBatis',
      component:MyBatis
    },
    {
      path:'/JavaFrame/Spring',
      name:'Spring',
      component:Spring
    },
    {
      path:'/JavaWeb/JSP-intro',
      name:'JavaWebIntro',
      component:JavaWebIntro
    },
    {
      path:'/JavaWeb/JSP-structure',
      name:'JavaWebStruct',
      component:JavaWebStruct
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      //console.log(to.hash)
      return {
        selector: to.hash
      }
    }
  }
})
