<template>
  <div class="album">
    <img class="preview" :src="preview">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      preview: this.album.preview,
      title: this.album.title
    }
  }
}
</script>

<style scoped>
.album {
  display: inline-block;
  margin-right: 10px;
}

.title {
  width: 150px;
}
</style>
