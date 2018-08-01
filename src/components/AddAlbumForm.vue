<template>
  <form class="form-group" @submit.prevent>
    <div class="form-group">
      <label for="name">User</label>
      <select class="custom-select" v-model="album.userId" id="name">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="title">Album title</label>
      <input type="text" class="form-control" id="title" v-model.trim="album.title" autocomplete="text">
    </div>
    <div class="form-group">
      <label for="preview">Preview (URL)</label>
      <input type="text" class="form-control" id="preview" v-model.trim="album.preview" autocomplete="url">
    </div>
    <button class="btn btn-primary" @click="addAlbum">Add album</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('users', ['users'])
  },

  data () {
    return {
      album: {
        userId: '',
        title: '',
        preview: ''
      }
    }
  },

  methods: {
    addAlbum () {
      if (!this.album.userId || !this.album.title || !this.album.preview) {
        return
      }

      this.$store.dispatch('albums/addAlbum', this.album)

      this.$router.push({ path: '/albums' })
    }
  }
}
</script>

<style scoped>

</style>
