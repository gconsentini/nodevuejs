<template>
  <div class="users">
    <h1>Edit User</h1>
      <div class="form">
        <div>
          <p>Name</p>
          <input type="text" name="name" placeholder="name" v-model="name">
        </div>
        <div>
          <p>Email</p>
          <input type="text" name="email" placeholder="Email" v-model="email">
        </div>
        <div>
          <p>Password</p>
          <input type="password" name="password" placeholder="Password" v-model="password">
        </div>
        <div>
          <p>Date of Birth</p>
          <input type="date" name="date_of_birth" placeholder="Date of Birth" v-model="date_of_birth">
        </div>
        <div>
          <input type="hidden" name="created_at" placeholder="created_at" v-model="created_at">
        </div>
        <div>
          <button class="app_user_btn" @click="updateUser">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'edituser',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      date_of_birth: '',
      created_at: '',
      updated_at: ''
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const response = await UsersService.getUser({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.email = response.data.email
      this.password = response.data.password
      this.date_of_birth = response.data.date_of_birth
      this.created_at = response.data.created_at
      this.updated_at = response.data.updated_at
    },
    async updateUser () {
      var dateTime = require('node-datetime');
      var dt = dateTime.create();
      var formatted = dt.format('d-m-Y H:M:S');
      await UsersService.updateUser({
        id: this.$route.params.id,
        name: this.name,
        email: this.email,
        password: this.password,
        date_of_birth: this.date_of_birth,
        created_at: this.created_at,
        updated_at: formatted
      })
      this.$swal(
        'Great!',
        `Your user has been updated!`,
        'success'
      )
      this.$router.push({ name: 'Users' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_user_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
