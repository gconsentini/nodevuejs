<template>
  <div class="users">
    <h1>Users</h1>
    This file will list all the Users.

    <div v-for='(user, index) in users' :key='index'>
      <p>
        <span><b>{{ user.name }}</b></span><br />
        <span>{{ user.email }}</span>
        <span>{{ user.password }}</span>
        <span>{{ user.date_of_birth }}</span>
        <span>{{ user.created_at }}</span>
        <span>{{ user.updated_at }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const response = await UsersService.fetchUsers()
      this.users = response.data
    }
  }
}
</script>
