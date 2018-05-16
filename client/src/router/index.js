import Vue from 'vue'
import Router from 'vue-router'
import users from '@/components/Users'
import adduser from '@/components/AddUser'
import edituser from '@/components/EditUser'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: users
    },
    {
      path: '/Users/add',
      name: 'adduser',
      component: adduser
    },
    {
      path: '/posts/:id/edit',
      name: 'edituser',
      component: edituser
    }
  ]
})
