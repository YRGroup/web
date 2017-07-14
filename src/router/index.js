import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import main from '@/page/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
