<template lang="html">
  <div
      class="card card-square product"
      style="border:0;">
    <div
      ref="img"
      class="product-img"
      @click="handleClick"
      :style="{
        backgroundImage: `url(${image})`,
        height: `${imgHeight}px`
      }"
    >
      <span class="product-flag" v-if="flag!==''">{{flag}}</span>
    </div>

    <h3 class="tl product-title m1000" @click="handleClick">
      {{name}}
      <span class="product-tip" v-if="tip!==''">
        {{tip}}
      </span>
    </h3>

    <div class="product-intro">
      <p class="product-content tl p0010">{{content}}</p>
      <p class="product-content tl" style="text-decoration:line-through" v-if="oldprice>0 && oldprice!=price">
        原价 {{oldprice}} {{priceUnit}}
      </p>
    </div>

    <div class="flex-box tl product-dock" style="align-self:flex-end;">
      <div class="flex-item-1 color-highlight font-md" style="white-space:nowrap">
        <span class="font-sm">{{pricePreUnit}}</span> {{price}}
        <span v-if="priceUnit!==''" class="price-unit">{{priceUnit}}</span>
      </div>
      <div class="flex-item" style="padding-top:2px;" v-if="canbuy">
        <div class="flex-box number" style="width:80px;">
          <bo-number v-if="stock>0" ref="number" :max="max" @on-change="buy"  :value="amountSelf" />
        </div>
        <span v-if="stock<=0" class="font-light font-sm p1000" style="float:right">库存不足</span>
      </div>
    </div>

  </div>
</template>

<script>
// 2列布局的商品
import BoNumber from '../../components/bo-number/bo-number'
import core from './core'

export default {
  extends: core,
  components: {
    BoNumber
  }
}
</script>
