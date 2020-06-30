import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/pages/home.vue"
import Index from "@/pages/Index.vue"
import Cate from "@/pages/Cate.vue"
import ShoppingCart from "@/pages/ShoppingCart.vue"
import Mine from "@/pages/Mine.vue"

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/home/Index"
    },
    {
      path: "/home",
      component: Home,
      children: [{
          path: "Index",
          component: Index
        },
        {
          path: "Cate",
          component: Cate
        },
        {
          path: "ShoppingCart",
          component: ShoppingCart
        },
        {
          path: "Mine",
          component: Mine
        },
      ]
    },
  ]
})
