<template lang="html">
  <div class="slide-item"
      @click="handleClick"
      :style="style"
  >
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  name: 'carousel-item',
  props: {
    style: Object,
    imgUrl: String,
    width: String
  },
  data() {
    return { }
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
