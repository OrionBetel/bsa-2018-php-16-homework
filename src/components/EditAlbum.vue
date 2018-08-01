<template>
  <div>
    <p class="add-photo">Edit Album</p>

    <form class="form-group" @submit.prevent>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model.trim="album.title">
      </div>
      <div class="form-group">
        <label for="preview">Preview (URL)</label>
        <input type="text" class="form-control" id="preview" v-model.trim="album.preview">
      </div>
      <button class="btn btn-warning" @click="editAlbum">Update</button>
      <button class="btn btn-danger" @click="deleteAlbum">Delete</button>
    </form>
    
    <p class="add-photo">Add photo</p>

    <form class="form-group" @submit.prevent>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model.trim="newPhoto.title">
      </div>
      <div class="form-group">
        <label for="img">Image (URL)</label>
        <input type="text" class="form-control" id="img" v-model.trim="newPhoto.url">
      </div>
      <button class="btn btn-primary" @click="addPhoto">Add photo</button>
    </form>

    <ul class="list-group">
      <li class="list-group-item" v-for="photo in albumsPhotos" :key="photo.id">
        <img :src="photo.imgUrl">
        <span>{{ photo.title }}</span>
        <button type="button" class="btn btn-danger btn-delete" @click="deletePhoto(photo.id, $event)">Delete</button>
      </li>  
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    const album = this.$store.state.albums.albums.find(album => album.id === +this.$route.params.id)

    return {
      album: {
        id: album.id,
        userId: album.userId,
        title: album.title,
        preview: album.preview
      },

      newPhoto: {
        title: '',
        url: '',
        albumId: +this.$route.params.id
      }
    }
  },
  
  computed: {
    ...mapState('photos', ['photos']),

    albumsPhotos: function () {
      return this.photos.filter(photo => photo.albumId == this.$route.params.id)
    }
  },

  methods: {
    editAlbum () {
      if (!this.album.title || !this.album.preview) {
        return
      }

      const data = {
        albumId: this.album.id,
        data: {
          title: this.album.title,
          preview: this.album.preview,
          userId: this.album.userId
        }
      }

      this.$store.dispatch('albums/updateAlbum', data)
    },

    deleteAlbum () {
      this.$store.dispatch('albums/deleteAlbum', this.album.id)
      this.$router.push({ path: '/albums' })
    },

    addPhoto () {
      if (!this.newPhoto.title || !this.newPhoto.url) {
        return
      }

      this.$store.dispatch('photos/addPhoto', this.newPhoto)

      this.refreshInput()
    },

    deletePhoto (id) {
      this.$store.dispatch('photos/deletePhoto', id)
    },

    refreshInput () {
      this.newPhoto = {
        title: '',
        url: '',
        albumId: +this.$route.params.id
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 25%;
}

.btn-delete {
  float: right;
}

.add-photo {
  text-align: center;
}
</style>
