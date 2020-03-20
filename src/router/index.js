import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage/index.vue'
import Resume from '@/components/resume/index.vue'
import Experience from '@/components/experience/index.vue'
import Others from '@/components/others/index.vue'
import Projects from '@/components/projects/index.vue'
import Certification from '@/components/certification/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/resume',
      name:'Resume',
      component:Resume
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
    }
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
