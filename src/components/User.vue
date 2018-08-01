<template>
  <li class="list-group-item">
    <img :src="avatar">
    <span><strong>{{ name }}</strong></span>
    <br>
    <span>{{ email }}</span>
    <router-link type="button" class="btn btn-info" :to="{ name: 'user', params: { id: id } }">More</router-link>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      id: this.user.id,
      name: this.user.name || '',
      email: this.user.email || '',
      avatar: this.user.avatar || ''
    }
  },

  methods: {
    editUser () {
      if (!this.name || !this.email || !this.avatar) {
        return
      }

      const data = {
        userId: this.user.id,
        data: {
          name: this.name,
          email: this.email,
          avatar: this.avatar
        }
      }

      this.$store.dispatch('users/updateUser', data)
    },

    deleteUser () {
      this.$store.dispatch('users/deleteUser', this.user.id)
    }
  }
}
</script>

<style scoped>
img {
  float: left;
  margin-right: 16px;
}

.btn {
  float: right;
}
</style>
