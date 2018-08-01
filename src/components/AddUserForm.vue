<template>
  <form class="form-group" @submit.prevent>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model.trim="newUser.name" autocomplete="name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" v-model.trim="newUser.email" autocomplete="email">
    </div>
    <div class="form-group">
      <label for="avatar">Avatar (URL)</label>
      <input type="text" class="form-control" id="avatar" v-model.trim="newUser.avatar" autocomplete="url">
    </div>
    <button class="btn btn-primary" @click="addUser">Add user</button>
  </form>
</template>

<script>
export default {
  name: 'AddUserForm',

  data () {
    return {
      newUser: {
        name: '',
        email: '',
        avatar: ''
      }
    }
  },

  methods: {
    addUser () {
      if (!this.newUser.name || !this.newUser.email || !this.newUser.avatar) {
        return
      }

      this.$store.dispatch('users/addUser', this.newUser)

      this.clearForm()
      this.toHomepage()
    },

    clearForm () {
      this.newUser = {
        name: '',
        email: '',
        avatar: ''
      }
    },

    toHomepage () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
