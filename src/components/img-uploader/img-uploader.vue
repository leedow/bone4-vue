<template lang="html">
<div>
    <div class="card card-quare p3333"
      @click="handleClick"
    >
      <div ref="preview" class="img-preview">

      </div>
      <i class="icon iconfont font-lg font-light"
          :class="[`icon-${icon}`]"></i>
      <p>{{text}}</p>
    </div>
    <input
      style="display:none"
      ref="file"
      type="file"
      :accept="accept"
    >
</div>
</template>

<script>
import lrz from 'lrz'

export default {
  name: 'imgUploader',
  props: {
    accept: {
      default: 'image/*'
    },
    icon: {
      default: 'upload'
    },
    text: {
      default: '上传或拍摄图片'
    },
    options: {
      default() {
        return {
          width: 600,
          fieldName: 'file'
        }
      }
    }
  },
  data() {
    return {
      file: null
    }
  },
  computed: {},
  mounted() {
    this.initListener()
  },
  attached() {},
  methods: {
    // 选择文件事件触发
    handleClick() {
      this.$refs.file.click()
    },
    initListener() {
      const that = this
      this.$refs.file.addEventListener('change', function () {
        lrz(this.files[0], that.options)
        .then((rst) => {
          // 处理成功会执行
          /*eslint-disable*/
          const img = new Image()
          img.src = rst.base64
          img.onload = function () {
            that.$refs.preview.innerHTML = ''
            that.$refs.preview.appendChild(img)
          }
          //console.log(rst)
          that.$emit('on-upload', rst)
          return rst
        })
        .catch((error) => {
          that.$emit('on-error', error)
        })
        .always(() => {
          that.$emit('on-always', this)
        })
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
.img-preview img{
  max-width: 100%;
}
</style>
