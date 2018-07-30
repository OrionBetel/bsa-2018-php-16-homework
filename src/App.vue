<template>
  <div id="app">
    <Header></Header>
    <UserList></UserList>
  </div>
</template>

<script>
import Header from './components/Header'
import UserList from './components/UserList'

export default {
  name: 'App',

  components: {
    Header,
    UserList
  }
}
</script>

<style>

</style>
