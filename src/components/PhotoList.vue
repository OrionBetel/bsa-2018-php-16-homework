<template>
  <div>
    <router-link :to="{ name: 'EditAlbum', params: { id: $route.params.id } }">Edit</router-link>

    <ul class="list-group">
      <li class="list-group-item" v-for="photo in album" :key="photo.id">
        <img :src="photo.imgUrl">
        <p>{{ photo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('photos', ['photos']),

    album: function () {
      return this.photos.filter(photo => photo.albumId === +this.$route.params.id)
    }
  }
}
</script>

<style scoped>
router-link {
  text-align: center;
}
</style>
