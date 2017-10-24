<template lang="html">
  <div class="slide-item"
      @click="handleClick"
      :style="{
        width: width,
        height: height,
        'background-image': `url(${imgUrl})`
      }"
  >

  </div>
</template>

<script>
export default {
  name: 'slide-item',
  props: {
    imgUrl: String,
    height: String,
    width: String
  },
  data() {
    return {}
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleClick() {

    }
  },
  components: {}
}
</script>
