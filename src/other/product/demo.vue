<template>
<div class="">
  <ul class="list-hack p1111 card card-square ovf">
    <li v-for="item in data" class="p1111" style="width:50%;float:left;">
      <product
        :name="item.name"
        :content="item.content"
        :image="item.image"
        :tip="item.tip"
        :limit="item.limit"
        :stock="item.stock"
        :amount="item.amount"
        :flag="item.flag"
        :oldprice="10"
        ratio=0.9
        @on-click="toast('点击详情')"
        @on-delete="toast('商品归零')"
        @on-limit="toast('达到上限')"
        @on-buy="toast('购买')"
      />
    </li>
  </ul>

  <ul class="list-hack p2222 m2000 card card-square ovf">
    <li v-for="item in data">
      <product-single
        :name="item.name"
        :content="item.content"
        :image="item.image"
        :tip="item.tip"
        :limit="item.limit"
        :stock="item.stock"
        :amount="item.amount"
        :flag="item.flag"
        :price="1111"

        ratio=0.9

        @on-click="toast('点击详情')"
        @on-delete="toast('商品归零')"
        @on-limit="toast('达到上限')"
        @on-buy="toast('购买')"
      />
    </li>
  </ul>

</div>
</template>

<script>
import product from './product'
import productSingle from './product-single'

export default {
  name: 'test1',
  components: {
    product,
    productSingle
  },
  created() {

  },
  methods: {
    toast(msg) {
      this.$toast.open(msg)
    }
  },
  data() {
    return {
      data: [{
        name: '绝味饼干',
        content: '非常好吃的饼干哦~~',
        tip: '限购',
        image: 'http://pic02.keyinong.com/product/pic/20171018150835_29785.jpg?imageView2/1/w/200/h/200',
        limit: 10,
        stock: 10,
        amount: 1
      }, {
        name: '美味蛋糕',
        content: '非常好吃的饼干哦~~',
        image: 'http://pic02.keyinong.com/product/pic/20171018151330_64818.jpg?imageView2/1/w/200/h/200',
        limit: 10,
        stock: 10,
        amount: 1,
        flag: '剩余10件'
      }, {
        name: '红纱鸡肉',
        content: '吃得让你流连忘返',
        image: 'http://pic02.keyinong.com/product/pic/20171018145531_77564.jpg?imageView2/1/w/200/h/200',
        limit: 10,
        stock: 0,
        amount: 1
      }, {
        name: '美味的栗子',
        content: '激发活力无限',
        image: 'http://pic02.keyinong.com/product/pic/20171018145224_68398.jpg?imageView2/1/w/200/h/200',
        limit: 5,
        stock: 10,
        amount: 5
      }]
    }
  }
}
</script>
