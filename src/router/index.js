import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from "@/components/HelloWorld.vue"


Vue.use(Router)

import Home from "@/pages/home.vue"
import Hao from "@/pages/hao.vue"

export default new Router({
  mode:"history",
  routes:[
    // {
    //   path:"/HelloWorld",
    //   component:HelloWorld
    // },
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/hao",
      component:Hao
    }
  ]
})
