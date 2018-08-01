<template>
  <div class="albums">
    <h3 class="display-4">Albums</h3>

    <form @submit.prevent>
      <label for="user">User</label>
      <select class="custom-select" id="user" v-model="selectedUserId">
        <option :value="null">All</option>
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <router-link to="/albums/add" class="add-link">Add album</router-link>
    </form>

    <template v-for="album in selectedAlbums">
      <router-link :to="{ name: 'Album', params: { id: album.id } }" :key="album.id">
        <Album :album="album"/>
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Album from './Album'

export default {
  name: 'AlbumList',

  components: {
    Album
  },

  data () {
    return {
      selectedUserId: null
    }
  },

  computed: {
    ...mapState('albums', ['albums']),
    ...mapState('users', ['users']),

    selectedAlbums: function () {
      if (!this.selectedUserId) {
        return this.albums
      }
      
      return this.albums.filter(album => album.userId === this.selectedUserId)
    }
  }
}
</script>

<style scoped>
.display-4 {
  text-align: center;
}

.custom-select {
  width: 50%;
  margin-bottom: 20px;
}

.add-link {
  float: right;
}
</style>
