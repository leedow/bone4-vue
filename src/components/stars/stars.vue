<template>
  <div class="stars" :class="['stars-'+size]">
    <button class="star" v-for="(item, index) in stars"  @click="changeScore(index+1)" :class="[
      index+1<=scoreSelf?'star-check':''
    ]">
      <i class="icon iconfont icon-favorfill"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'stars',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    score: {
      type: Number,
      default: 1
    },
    enable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeScore(score) {
      if (!this.enable) return
      this.scoreSelf = score
      this.$emit('on-change', this.scoreSelf)
    }
  },
  data() {
    return {
      scoreSelf: this.score,
      stars: [0, 1, 2, 3, 4]
    }
  }
}
</script>
