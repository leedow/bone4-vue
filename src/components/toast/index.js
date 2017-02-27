import Vue from 'vue'

const ToastConstructor = Vue.extend(require('./toast.vue'))


const Toast = {
  com: false,
  open(content, type) {
    const typeSelf = type || 'text'

    if (!this.com) {
      this.com = new ToastConstructor({
        data: {
          typeSelf,
          conentSelf: content
        }
      }).$mount()
    } else {
      this.com.contentSelf = content
      this.com.typeSelf = typeSelf
    }

    this.com.open()
    document.body.appendChild(this.com.$el) // eslint-disable-line
  },
  close() {
    this.com.close()
  }
}

export default Toast
