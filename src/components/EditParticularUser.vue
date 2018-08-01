<template>
  <form class="form-group" @submit.prevent>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model.trim="name" autocomplete="name">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" v-model.trim="email" autocomplete="email">
    </div>
    <div class="form-group">
      <label for="avatar">Avatar (URL)</label>
      <input type="text" class="form-control" id="avatar" v-model.trim="avatar" autocomplete="url">
    </div>
    <button class="btn btn-primary" @click="editUser">Save</button>
    <button class="btn btn-danger" @click="deleteUser">Delete User</button>
  </form>
</template>

<script>
export default {
  data () {
    const user = this.$store.state.users.users.find(user => user.id === +this.$route.params.id)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    }
  },

  methods: {
    editUser () {
      if (!this.name || !this.email || !this.avatar) {
        return
      }

      const data = {
        userId: this.id,
        data: {
          name: this.name,
          email: this.email,
          avatar: this.avatar
        }
      }

      this.$store.dispatch('users/updateUser', data)
      this.$router.push({ name: 'user', params: { id: this.id } })
    },

    deleteUser () {
      this.$store.dispatch('users/deleteUser', this.id)
      this.$router.push({ path: '/users' })
    }
  }
}
</script>

<style scoped>

</style>
