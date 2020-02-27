import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register'
import ShowData from '@/components/ShowData'
import SaveData from '@/components/SaveData'
import EditData from '@/components/EditData'


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ShowData',
      name: 'ShowData',
      component: ShowData
    },
    {
      path:'/SaveData',
      name: 'SaveData',
      component: SaveData
    },
    {
      path:'/EditData',
      name: 'EditData',
      component: EditData
    }
  ]
})
