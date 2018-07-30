<template>
  <li>
    {{ user.name }}
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isEdit: false,
      name: this.user.name || '',
      email: this.user.email || '',
      avatar: this.user.avatar || ''
    }
  }
}
</script>

<style scoped>

</style>
