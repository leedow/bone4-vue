<template lang="html">
  <div class="card card-square rbb product product-single" style="border:0;">
    <div class="flex-box p2020">
      <div class="flex-item"  @click="handleClick">
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
      </div>
      <div class="flex-box flex-item-1 flex-direction-colunm  tl p0001 product-info">
        <h3 class="font-md tl product-title" @click="handleClick">
          {{name}}
          <span class="product-tip" v-if="tip!==''">
            {{tip}}
          </span>
        </h3>
        <div class="product-info">
        <p class="f-light font-sm">
          {{content}}
        </p>
        <p class="f-light font-sm" style="text-decoration:line-through" v-if="oldprice>0">
          原价 {{pricePreUnit}} {{oldprice}} {{priceUnit}}
        </p>
        </div>

        <div class="flex-box tl p0000">
          <div class="flex-item-1 color-highlight" style="font-size:18px;">
            <span class="font-sm">{{pricePreUnit}}</span> {{price}}<span class="price-unit"> {{priceUnit}}</span>
          </div>
          <div class="flex-item" style="padding-top:2px;">
            <div class="flex-box number" style="width: 80px;">
              <bo-number v-if="stock>0" ref="number" :max="max" @on-change="buy"  :value="amount" />
            </div>
            <span v-if="stock<=0" class="font-light font-sm p1000" style="float:right">库存不足</span>
          </div>
        </div>
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
