import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import NewUser from '@/components/NewUser'
import EditUser from '@/components/EditUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Users/new',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/users/:id',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
