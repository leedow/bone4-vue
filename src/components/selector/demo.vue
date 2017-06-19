<template lang="html">
<div class="">
  <div class="card card-square p2222">
    <selector
        v-model="val1"
        max-height="70px"

        :options="[
          {
            value: 1,
            text: 'Item 1'
          },{
            value: 2,
            text: 'Item 2'
          },{
            value: 3,
            text: 'Item 3'
          }
        ]"
        @on-change="handleclick"
    />
  </div>

 
  <div class="card card-square m2000 p2222">
    <div class="tl">
        选择的值：{{val}}
    </div>
    <selector
      underline=true
      theme="check"
      size="lg"
      v-model="val"
      :options="[
        {
          value: 1,
          text: 'Item 1'
        },{
          value: 2,
          text: 'Item 2'
        },{
          value: 3,
          text: 'Item 3'
        }
      ]"
      @on-change="handleclick"
    />
  </div>
  <div class="card card-square m2000 p2222">
    <div class="tl">
        选择的值：{{val3}}
    </div>
    <selector
      v-model="val3"
      theme="check"
      @on-change="handleclick"
    >
      <selector-item v-for="item in list" :value="item.value" :text="item.text" />
    </selector>
  </div>
</div>
</template>
<script>
import Selector from './selector'
import SelectorItem from './selector-item'

export default {
  name: 'menudemo',
  components: {
    Selector,
    SelectorItem
  },
  methods: {
    handleclick(data) {
      console.log(data)
    }
  },
  mounted() {
    // 异步改变选择项
    setTimeout(() => {
      this.val = 1
    }, 1000)
  },
  data() {
    return {
      content: 'like',
      list: [{
        value: 1,
        text: 'Item1'
      }, {
        value: 2,
        text: 'Item2'
      }],
      val1: 1,
      val: 2,
      val3: 1
    }
  }
}
</script>
