<template>
  <div>
    <ul v-for="album in albums" :key="album.id">
      <li :album="album">
        <a href="/albums/{id}">{{ album.title }}</a>
      </li>
  </ul>
  </div>
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
