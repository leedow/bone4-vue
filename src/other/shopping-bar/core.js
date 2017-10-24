export default {
  props: {
    // 商品总数
    total: {
      default: 0
    },
    // 商品总价
    price: {
      default: 0
    },
    icon: {
      default: 'gouwuche'
    },
    btnText: {
      default: '去结算'
    }
  },
  data() {
    return {

    }
  },
  computed: {
  },
  mounted() {

  },
  attached() {},
  methods: {
    handleClick() {
      this.$emit('on-click', this)
    }
  },
  components: {

  }
}
