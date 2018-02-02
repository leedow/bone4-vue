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
      theme="box"
      @on-change="handleclick"
    >
      <selector-item v-for="item in list" :value="item.value" :text="item.text" />
    </selector>
  </div>

  <div class="card card-square m2000 p1101">
    <div class="tl p1111">
        支持取消选中
    </div>
    <selector
      underline=true
      theme="check-right"
      unselected=true
      v-model="val4"
      @on-change="handleclick"
    >
      <selector-item :value="1" >
        <div class="menu-vertical-item">
          <div class="menu-icon color-comfort" >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAA3NCSVQICAjb4U/gAAAAyVBMVEX////2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v2U1PuS0v/////9/f+7+/+5+f+3t792Nj609P6zs7/zMz5xcX9xMT8vr74vLz8tLT3tLT2rq78qqr/paX1paX/nJz0nJz7lpb0lpb6jIzyjIz6hYXyhIT6enrwenr5dnbwcnL5a2vva2v5Y2PuY2P4WlrtW1v2U1PsU1PuS0v1AqbnAAAAQ3RSTlMAEREiIkREVVVmZnd3iIiZmaqqu7vMzN3d7u7/////////////////////////////////////////////////////e1ZV3gAAAAlwSFlzAAAK8AAACvABQqw0mAAAABh0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzT7MfTgAABBF0RVh0WE1MOmNvbS5hZG9iZS54bXAAPD94cGFja2V0IGJlZ2luPSIgICAiIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUu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" alt="">
          </div>
          <div class="menu-body font-normal">
            用户信息
          </div>
        </div>
      </selector-item>
      <selector-item :value="2" >
        <div class="menu-vertical-item">
          <div class="menu-icon color-comfort" >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAA3NCSVQICAjb4U/gAAABAlBMVEX///8KcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaQKcrEHaaT////6/P33+vzw9vnr8vfn8Pbh7fTe6/Lb6fHU5e/R4+7Q4u3I4O7G3OnC2ei81ua21ui00eOz0eKqzuSrzN+jxtyex+CZwNiRwNySvNaNutWLuNOEtNF7tc57s9R6rcxxrtJwp8lqpMdgncNenMJPmsdXmL9Tlb5Ij7pCi7c3jcA6hrQ0grIohLstfq8ne60Ye7YieKsgdqsSd7QZc60YcacLc7IKcrEQbKQGbasHaaT+trOsAAAAVnRSTlMAEREiIkREVVVmZnd3iIiZmaqqu7vMzN3d7u7//////////////////////////////////////////////////////////////////////////////2nqzDkAAAAJcEhZcwAACvAAAArwAUKsNJgAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3Jrc0+zH04AAAQRdEVYdFhNTDpjb20uYWRvYmUueG1wADw/eHBhY2tldCBiZWdpbj0iICAgIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1N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" alt="">

          </div>
          <div class="menu-body font-normal">
            用户信息
          </div>
        </div>
        </selector-item>
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
      val3: 1,
      val4: 1
    }
  }
}
</script>
