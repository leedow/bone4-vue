## 组件属性

| 属性名      | 说 明         | 类 型 |默认值  |
| ------------- |-----------|------| -----|
| mode | 设置上拉或者下拉刷新 `swipeDown` `SwipeUp` | String | ‘swipeDown’ |

## 组件方法

| 方法名 | 说 明 | 参 数 |
|-------|-------|
| reset | 在加载完成后重置列表状态 | - |

## 组件事件

| 事件名 | 说 明 | 传入参数 |
|-------|----------|----|
| on-loading | 刷新事件 | list组件对象 |



## 初始化
```
<list @list-loading="loading" mode="swipeDown">
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

<script>
//...
methods: {
  loading (obj){

    setTimeout(()=>{
      this.datas.push({
        id: 2,
        content: '标题' + (this.datas.length+1)
      })
      obj.reset();
    },1000)

  }
}
//...
</script>
```
