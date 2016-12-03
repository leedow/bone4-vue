<template>
  <div class="">
    <div class="row p0010">
      <div class="p1111">
        <bo-select
          size="lg"
          :value="2"
          :options="options"
        />

      </div>

      <div class="p0111">
        <bo-select
          size="sm"
          :value="1"
          :options="options"
        />

      </div>

      <div class="p0111">
        <bo-select
          size="lg"
          theme='underline'
          :value="2"
          :options="options"
        />

      </div>

    </div>

    <div class="p0111" >
      <bo-select
        ref="test"

        :style="{marginTop:'20px'}"
        :required=true
        :value="2"
        :options="options"
      />
      <div class="p1000 tl">
        <button @click="getValue"   class="btn btn-tiny btn-primary-blank">获取输入值</button>
        <button @click="setState('wrong')"  class="btn btn-tiny btn-primary-blank">置为警告</button>
        <button @click="setState('pass')"  class="btn btn-tiny btn-primary-blank">置为通过</button>
      </div>
    </div>



  </div>
</template>

<script>
import BoSelect from './bo-select.vue'

export default {
  name: '',
  components: {
    BoSelect
  },
  methods: {
    getValue (){
      alert(this.$refs.test.getValue())
    },
    setState (state){
      this.$refs.test.setState(state)
    },
    verify (){
      alert(this.$refs.test.verify().msg);
    }
  },
  data () {
    return {
      options: [
        {
          value: 1,
          text: 'One'
        },
        {
          value: 2,
          text: 'Two'
        }
      ]
    }
  }
}
</script>
