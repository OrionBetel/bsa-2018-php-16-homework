<template>
  <div id="app">
    <nav>
      <ul class="nav">
        <li class="nav-item"><router-link to="/users" class="nav-link">Users</router-link></li>
        <li class="nav-item"><router-link to="/albums" class="nav-link">Albums</router-link></li>
      </ul>
    </nav>
    <main class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UserList from './components/UserList'
import AlbumList from './components/AlbumList'
import ParticularUser from './components/ParticularUser'

export default {
  name: 'App',

  components: {
    UserList,
    AlbumList,
    ParticularUser
  }
}
</script>

<style>
.display-4 {
  text-align: center;
}
</style>
