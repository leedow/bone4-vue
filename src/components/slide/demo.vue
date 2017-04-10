<template>
  <div class="">
    <slide :surface="[{imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/2.png?870bbc643c89ab370522a8eea9cf4985'},
    {imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/1.png?99a3d4cc476cce3ed4826cd912b12876'},
    {imgUrl: 'http://mlo.jishi88.com/dist/v1.3.7/3.png?b13d9da72fe03c029ff79e1720a318b7'}]"/>
  </div>
</template>

<script>
import Slide from './slide'

export default {
  name: 'slidedemo',
  components: {
    Slide
  },
  data() {
    return {

    }
  }
}
</script>
