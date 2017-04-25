<template>
  <div class="layout-none" style="top:44px;"  >
    <bo-map
        ref="map"
        map-key="be8b0ba056f729296b31543b1fcd8787"
        address="杭州"
    />
    <section class="layout-bottom ">
      <button type="button" class="btn btn-lg btn-block btn-square btn-primary"  @click="submit">确 定</button>
    </section>
  </div>
</template>

<script>
import BoMap from './bo-map'

export default {
  name: 'mapdemo',
  components: {
    BoMap
  },
  methods: {
    submit() {
      console.log(this.$refs.map.getAddress())
    }
  },
  data() {
    return {

    }
  }
}
</script>
