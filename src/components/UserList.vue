<template>
  <ul>
    <template v-for="user in users">
      <User :key="user.id" :user="user"/>
    </template>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import User from './User'

export default {
  name: 'UserList',

  components: {
    User
  },

  data () {
    return {
      newUser: {
        name: '',
        email: '',
        avatar: ''
      }
    }
  },

  computed: {
    ...mapState('users', ['users'])
  }
}
</script>

<style scoped>

</style>
