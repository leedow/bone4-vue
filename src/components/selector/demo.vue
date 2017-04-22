<template lang="html">
<div class="">

  <div class="card card-square p2222">
    <selector
        value="1"
        max-height="50px"
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
    <selector
      underline=true
      theme="check"
      size="lg"
        value="1"
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
    <selector
      theme="check"

        value="1"
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
</div>
</template>

<script>
import Selector from './selector'

export default {
  name: 'menudemo',
  components: {
    Selector
  },
  methods: {
    handleclick(data) {
      console.log(data)
    }
  },
  data() {
    return {
      content: 'like'
    }
  }
}
</script>
