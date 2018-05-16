import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import adduser from '@/components/AddUser'
import edituser from '@/components/EditUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
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
