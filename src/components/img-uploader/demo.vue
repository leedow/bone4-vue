<template lang="html">
  <div>
    <uploader
      @on-upload="upload"
    />
  </div>
</template>

<script>
import Uploader from './img-uploader'

export default {
  data() {
    return {}
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    upload(data) {
      console.log(data) //eslint-disable-line
    }
  },
  components: {
    Uploader
  }
}
</script>
