<template>



      <list @on-loading="loading" mode="swipeDown">
        <li class="list-item list-item-arrow m1111" v-for="item in datas">
          <div class="card p2222">
            <div class="card-content">
              <p>
                {{item.content}}
              </p>
            </div>
          </div>
        </li>
      </list>


</template>

<script>
import List from './list'
import Page from '../page/page'

export default {
  name: 'listdemo',
  components: {
    List,
    Page
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          content: '标题1'
        }
      ]
    }
  },
  methods: {
    loading(obj) {
      setTimeout(() => {
        this.datas.push({
          id: 2,
          content: `标题${this.datas.length + 1}`
        })
        obj.reset()
      }, 1000)
    }
  }
}
</script>
