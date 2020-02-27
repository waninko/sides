import Vue from 'vue'
import Router from 'vue-router'

import RegisterFinding from '@/components/RegisterFinding'
import HandleData from '@/components/HandleData'


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/RegisterFinding',
      name: 'RegisterFinding',
      component: RegisterFinding
    },
    {
      path: '/HandleData',
      name: 'HandleData',
      component: HandleData
    },
  ]
})
