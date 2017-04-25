<template lang="html">
<div class="amap-wrapper" style="position:relative">
  <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult" :events="events"></el-amap-search-box>
  <div class="amap-wrapper">
     <el-amap :vid="'amap-vue'" :center="mapCenter" :zoom="zoom"   >
       <el-amap-marker   :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
     </el-amap>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import AMap from 'vue-amap'

Vue.use(AMap)

/* eslint-disable */
export default {
  props: {
    /**
     * 高德地图key
     */
    mapKey: {
      type: String,
      default: ''
    },
    center: {
      type: Array,
      default (){
        return [121.59996, 31.197646]
      }
    },
    city: {
      type: String,
      default: '杭州'
    },
    zoom: {
      type: Number,
      default: 18
    },
    address: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

      marker: {
        position: this.center,
        events: {
          click: () => {
            //alert('click marker');
          },
          dragend: (e) => {
            this.marker.position = [e.lnglat.lng, e.lnglat.lat];
          }
        },
        visible: true,
        draggable: true
      },
      searchOption: {
        city: this.center,
        citylimit: true
      },

      mapCenter: this.center,
      events: {

      }
    }
  },
  computed: {},
  created(){
    AMap.initAMapApiLoader({
      key: this.mapKey, //be8b0ba056f729296b31543b1fcd8787
      plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
    })
  },
  mounted() {
    document.querySelector('.search-box input').value = this.address
  },
  attached() {},
  methods: {
    /**
     * 获取最终选择的经纬度
     */
    getPosition(){
      return this.marker.position
    },
    /**
     * 返回地址名称和经纬度
     */
    getAddress(){
      return {
        name: document.querySelector('.search-box input').value,
        position: this.marker.position
      }
    },
    onSearchResult(pois) {

      let latSum = 0
      let lngSum = 0
      if (pois.length > 0) {
        pois.forEach((poi) => {
          let { lng, lat } = poi
          lngSum += lng
          latSum += lat

        })
        const center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        }
        this.mapCenter = [center.lng, center.lat]
        this.marker.position = [center.lng, center.lat]
      }
    }
  },
  components: {

  }
}
</script>
<style>
.amap-wrapper {
  width: 100%;
  height: 100%;
}

.el-vue-search-box-container{

  position: absolute !important;
  width: auto !important;
  top: 10px;
  right: 10px;
  left: 10px;
}


</style>
