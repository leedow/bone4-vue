import Vue from 'vue'

const ModalConstructor = Vue.extend(require('./modal.vue'))

/* eslint-disable */
const Modal = {
  com: false,
  open(content, confirm, type) {
    const typeSelf = type || 'confirm'

    if (!this.com) {
      this.com = new ModalConstructor({
        data: {
          content
        }
      }).$mount()
      this.com.type = typeSelf
      this.com.show = true
    } else {
      this.com.content = content
      this.com.show = true
    }

    document.body.appendChild(this.com.$el) // eslint-disable-line
    return this.com
  },
  close() {
    this.com.show = false
  }
}

export default Modal
