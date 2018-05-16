<template>
  <div class="users">
    <h1>Add User</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="name" v-model="name">
        </div>
        <div>
          <input type="text" name="email" placeholder="email" v-model="email">
        </div>
        <div>
          <input type="text" name="password" placeholder="password" v-model="password">
        </div>
        <div>
          <input type="text" name="date_of_birth" placeholder="date_of_birth" v-model="date_of_birth">
        </div>
        <div>
          <input type="text" name="created_at" placeholder="created_at" v-model="created_at">
        </div>
        <div>
          <input type="text" name="updated_at" placeholder="updated_at" v-model="updated_at">
        </div>
        <div>
          <button class="app_user_btn" @click="addUser">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  name: 'adduser',
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
  methods: {
    async addUser () {
      await UsersService.addUser({
        name: this.name,
        email: this.email,
        password: this.password,
        date_of_birth: this.date_of_birth,
        created_at: this.created_at,
        updated_at: this.updated_at
      })
      this.$swal(
        'Great!',
        `Your user has been added!`,
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
