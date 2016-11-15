<template>
  <div>
    <div class="row p000 tl">
      <btn name="Default"/>
      <btn theme="primary" name="Primary"/>
      <btn theme="warm" name="Warm"/>
      <btn theme="comfort" name="Comfort"/>
    </div>

    <div class="divi">  </div>

    <div class="row p000 tl">
      <btn name="blank"/>
      <btn theme="primary-blank" name="Primary"/>
      <btn theme="warm-blank" name="Warm"/>
      <btn theme="comfort-blank" name="Comfort"/>
    </div>

    <div class="divi">  </div>

    <div class="row p000 tl">

      <btn theme="primary" icon="scan" name="Primary"/>
      <btn theme="warm" icon="favor" name="Warm"/>
      <btn theme="comfort" icon="warn" name="Comfort"/>
    </div>

    <div class="divi">  </div>

    <div class="row p000 tl">

      <btn theme="primary-blank" icon="scan" name="Primary"/>
      <btn theme="warm-blank" icon="favor" name="Warm"/>
      <btn theme="comfort-blank" icon="warn" name="Comfort"/>
    </div>

    <div class="divi">  </div>

    <div class="row p000 tl">
      <btn size="lg" theme="primary" name="Large"/>
      <btn size=""  theme="primary" name="Default"/>
      <btn size="sm" theme="primary" name="Small"/>
      <btn size="tiny" theme="primary" name="Tiny"/>
    </div>

    <div class="divi">  </div>

    <div class="row p000 tl">
      <btn size="lg" theme="primary-blank" @btn-click="alert('You click me')" name="Click Me"/>
      <btn size="lg" theme="primary-blank" name="Submit" submit="form"/>

    </div>

  </div>
</template>

<script>
import Btn from './btn.vue'
import eventbus from '../helper/eventbus'

export default {
  name: 'buttonDemo',
  components: {
    Btn
  },
  created (){
     eventbus.$on('btn-submit' , (msg)=>{
       //alert('触发表单' + msg)
     })
  },
  data () {
    return {

    }
  }
}
</script>
