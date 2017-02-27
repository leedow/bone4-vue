<template>
  <div class="">
    <slide :surface="[{imgUrl: '1'},{imgUrl: '2'},{imgUrl: '3'}]" height="180px"/>
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
