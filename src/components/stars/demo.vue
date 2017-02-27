<template>
  <div class="">
    <stars :score="5" />

    <stars :score="2" size="sm" :enable="false" />
  </div>
</template>

<script>
import Stars from './stars'

export default {
  name: 'starsdemo',
  components: {
    Stars
  },
  data() {
    return {

    }
  }
}
</script>
