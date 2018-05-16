<template>
  <div class="users">
    <h1>Users</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewUser' }" class="">Add User</router-link>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Date of Birth</td>
          <td>Created at</td>
          <td>Updated at</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for='(user, index) in users' :key='index'>
          <td>{{ post.name }}</td>
          <td>{{ post.email }}</td>
          <td>{{ post.password }}</td>
          <td>{{ post.date_of_birth }}</td>
          <td>{{ post.created_at }}</td>
          <td>{{ post.updated_at }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditUser', params: { id: user._id } }">Edit</router-link> |
            <a href="#" @click="deleteUser(user._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewUser' }" class="add_user_link">Add User</router-link>
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
      this.users = response.data.users
    },
    async deleteUser (id) {
      await UsersService.deleteUser(id)
      this.$router.push({ name: 'Users' })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
