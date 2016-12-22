import Vue from 'vue'

let toastConstructor = Vue.extend(require('./toast.vue'))



var Toast = {
  com: false,
  open: function(){
    if(!this.com){
      this.com = new toastConstructor({

          data: {
            type_:'text',
            content_: '注册调用'
          }

      }).$mount()
    } else {

    }

    this.com.open()
    document.body.appendChild(this.com.$el)
  },
  close: function(){
    this.com.$destory()
  }
}

export default Toast
