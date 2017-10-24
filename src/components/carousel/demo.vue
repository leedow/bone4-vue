<template>
  <div class="">
    <carousel
    :ratio="120/320"
    :surface="items"/>

    <carousel
    :ratio="120/320">
      <carousel-item
        v-for="item in items"
        :imgUrl="item.imgUrl"

      />
    </carousel>
  </div>
</template>

<script>
import Carousel from './carousel'

export default {
  name: 'slidedemo',
  components: {
    Carousel,
    CarouselItem: Carousel.item
  },
  mounted() {
    setTimeout(() => {
      this.items = [{ imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/2.png?870bbc643c89ab370522a8eea9cf4985' },
      { imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/1.png?99a3d4cc476cce3ed4826cd912b12876' },
      { imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/3.png?b13d9da72fe03c029ff79e1720a318b7' }]
    }, 1000)
  },
  data() {
    return {
      items: []
    }
  }
}
</script>
