<template>
  <ul class="list-group">
    <li class="list-group-item">
      <img :src="user.avatar">
      <h5>{{ user.name }}</h5>
      <p>{{ user.email }}</p>

      <router-link type="button" class="btn btn-warning"
        :to="{ name: 'editUser', params: { id: user.id } }">Edit</router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('users', ['users']),

    user: function () {
      return this.users.find(user => user.id === +this.$route.params.id)
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}

img {
  float: left;
  margin-right: 20px;
}

.btn {
  float: right;
}
</style>
