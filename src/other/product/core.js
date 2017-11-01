export default {
  props: {
    name: {
      default: ''
    },
    content: {
      default: ''
    },
    image: {
      default: ''
    },
    // 每人限购，为0时不限购
    limit: {
      type: Number,
      default: 0
    },
    // 剩余库存，-1为不限制库存
    stock: {
      type: Number,
      default: -1
    },
    amount: {
      type: Number,
      default: 0
    },
    tip: {
      default: ''
    },
    flag: {
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    oldprice: {
      type: Number,
      default: 0
    },
    priceUnit: {
      default: ''
    },
    unit: {
      default: ''
    },
    // 图片长宽比例
    ratio: {
      default: 1
    },
    // 完整商品对象
    surface: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      amountSelf: this.amount,
      imgHeight: 80
    }
  },
  computed: {
    // 可购买最大数量
    max() {
      const leftStock = parseFloat(this.stock) // eslint-disable-line
      const perlim = parseFloat(this.limit) // eslint-disable-line
      if (perlim == 0) { // eslint-disable-line
        return leftStock
      }
      return perlim > leftStock ? leftStock : perlim
    }
  },
  mounted() {
    this.imgHeight = this.$refs.img.offsetWidth * this.ratio
  },
  attached() {},
  methods: {
    handleClick() {
      this.$emit('on-click', this)
    },
    /**
     * 购买商品
     */
    buy(amount) {
      this.amountSelf = amount
      if (amount === 0) {
        this.$emit('on-delete', this)
      } else if (amount === this.max) {
        this.$emit('on-limit', this)
        this.$emit('on-buy', this)
      } else {
        this.$emit('on-buy', this)
      }
    }
  },
  components: {

  }
}
