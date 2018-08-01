<template>
  <div>
    <h3 class="display-4">Users</h3>
    
    <form class="form-group" @submit.prevent>
      <label for="search-field">Find user by</label>
      <select class="custom-select" v-model="searchField">
        <option value="name" selected>name</option>
        <option value="email">email</option>
      </select>
      <input type="text" class="form-control" v-model.trim="searchQuery">
      <router-link to="/users/add" class="add-link">Add user</router-link>
    </form>

    <ul class="list-group">
      <template v-for="user in foundUsers">
        <User :key="user.id" :user="user"/>
      </template>
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
      searchField: 'name',
      searchQuery: ''
    }
  },

  computed: {
    ...mapState('users', ['users']),

    foundUsers () {
      if (!this.searchQuery) {
        return this.users
      }

      return this.users.filter(user => {
        return user[this.searchField].toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<style scoped>
select {
  width: 20%;
  position: relative;
  top: -3px;
  margin-right: 12px;
}

input {
  display: inline-block;
  width: 50%;
}

.add-link {
  float: right;
}
</style>
