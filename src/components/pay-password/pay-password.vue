<template lang="html">
  <div class="paypassword ovf ba">
    <div class="pay-item br">
      <div class="pay-input" v-show="val[0]"></div>
    </div>
    <div class="pay-item br">
      <div class="pay-input" v-show="val[1]"></div>
    </div>
    <div class="pay-item br">
      <div class="pay-input" v-show="val[2]"></div>
    </div>
    <div class="pay-item br">
      <div class="pay-input" v-show="val[3]"></div>
    </div>
    <div class="pay-item br">
      <div class="pay-input" v-show="val[4]"></div>
    </div>
    <div class="pay-item">
      <div class="pay-input" v-show="val[5]"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: ''
    }
  },
  computed: {
    val() {
      return this.number.split('')
    }
  },
  ready() {},
  attached() {},
  methods: {},
  components: {}
}
</script>
