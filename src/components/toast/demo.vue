<template>
  <div >


    <ul class="list list-box p0002">

      <dmenu @on-switch="showtoast('loading')"  name="读取中" dock="Loading" />

      <dmenu @on-switch="showtoast('failed')"  name="操作失败" dock="Failed" />
      <dmenu @on-switch="showtoast('warm')"  name="警告" dock="Warm" />
      <dmenu @on-switch="showtoast('success')"  name="操作成功" dock="Success" />
      <dmenu @on-switch="showtoast('text')"  name="纯文本" dock="Text" />


    </ul>
    <div class="list-title">注册调用（推荐）</div>

    <ul class="list list-box p0002">



      <dmenu @on-switch="showtoast('reg')"  name="注册调用" dock="Text" />
      <dmenu @on-switch="showtoast('reg2')"  name="注册调用二" dock="Success" />
      <dmenu @on-switch="showtoast('reg3')"  name="注册调用控制关闭" dock="Success" />
    </ul>

    <toast ref="loading"   type="loading" content="读取中"/>
    <toast ref="success"   type="success" content="发布成功"/>
    <toast ref="failed"   type="failed" content="操作失败"/>
    <toast ref="warm"   type="warm" content="信息有误"/>
    <toast ref="text"   type="text" content="纯文本提示"/>

</div>
</template>
<style media="screen">

</style>
<script>
import Toast from './toast'
import Dmenu from '../demohelper/demoswitch'

export default {
  name: 'toastdemo',
  components: {
    Toast,
    Dmenu
  },
  methods: {
    showtoast(aim) {
      switch (aim) {
        case 'loading': {
          this.$refs.loading.open()
          setTimeout(() => {
            this.$refs.loading.close()
          }, 3000)
          break }
        case 'success': this.$refs.success.open(); break
        case 'failed': this.$refs.failed.open(); break
        case 'warm': this.$refs.warm.open(); break
        case 'text': this.$refs.text.open(); break
        case 'reg': {
          this.$toast.open('全局注册调用')
          break
        }
        case 'reg2': {
          this.$toast.open('全局注册调用2', 'success')
          break
        }
        case 'reg3': {
          this.$toast.open('全局注册调用控制关闭', 'loading')
          setTimeout(() => {
            this.$toast.close()
          }, 2000)
          break
        }
        default: {
          break
        }
      }
    }
  },
  data() {
    return {


    }
  }
}
</script>
