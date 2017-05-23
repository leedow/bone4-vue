<template>
  <div class="stars" :class="['stars-'+size, 'stars-'+theme]">
    <button class="star" v-for="(item, index) in stars"
      :style="{opacity: index+1<=scoreSelf&&theme=='circle'?(index+1)/score:1}"  @click="changeScore(index+1)" :class="[
      index+1<=scoreSelf?'star-check':''
    ]">
      <i v-if="theme=='default'" class="icon iconfont icon-favorfill"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'stars',
  props: {
    theme: {
      type: String,
      default: 'default'
    },
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
  watch: {
    score(newVal) {
      this.scoreSelf = newVal
    }
  },
  methods: {
    changeScore(score) {
      if (!this.enable) return
      this.scoreSelf = score
      this.$emit('on-change', this.scoreSelf)
    },
    getValue() {
      return this.scoreSelf
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
