<template>
  <div class="">
    <div class="card card-square p2222">
        <stars :score="5" />
    </div>

    <div class="card card-square p2222 m2000">
        <stars :score="2" size="sm" :enable="false" />
    </div>

    <div class="card card-square p2222 m2000">
        <stars :score="3" size="sm" theme="circle" :enable="false" />
    </div>

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
