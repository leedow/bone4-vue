<template lang="html">
  <div class="card card-square p2222">
    <selector
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
