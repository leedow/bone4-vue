<template lang="html">
  <div class="shopping-bar flex-box">
    <div class="icon iconfont"
      :class="[`icon-${icon}`]"
    ></div>
    <div class="flex-item-1 tl shopping-info">
      <div class="bar-price font-strong">
        <span class="font-sm color-highlight">{{unit}}</span>
        <span class="font-md color-highlight">{{price}}</span>

      </div>
      <div class="font-light font-sm bar-total">共计{{total}}件</div>
    </div>
    <div class="flex-item">
      <button class="btn btn-primary btn-lg" @click="handleClick">
        {{btnText}}
      </button>
    </div>
  </div>
</template>

<script>
import core from './core'

export default {
  extends: core,
  components: {}
}
</script>
