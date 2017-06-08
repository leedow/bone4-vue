<template lang="html">
  <div class="keyboard bt">
    <div class="bb ovf">
      <div class="board-btn br">
        <button @click="handleClick(1)" type="button">1</button>
      </div>
      <div class="board-btn br">
        <button @click="handleClick(2)" type="button">2</button>
      </div>
      <div class="board-btn">
        <button @click="handleClick(3)" type="button">3</button>
      </div>
    </div>

    <div class="bb ovf">
      <div class="board-btn br">
        <button @click="handleClick(4)" type="button">4</button>
      </div>
      <div class="board-btn br">
        <button @click="handleClick(5)" type="button">5</button>
      </div>
      <div class="board-btn">
        <button @click="handleClick(6)" type="button">6</button>
      </div>
    </div>

    <div class="bb ovf">
      <div class="board-btn br">
        <button @click="handleClick(7)" type="button">7</button>
      </div>
      <div class="board-btn br">
        <button @click="handleClick(8)" type="button">8</button>
      </div>
      <div class="board-btn">
        <button @click="handleClick(9)" type="button">9</button>
      </div>
    </div>

    <div class="bb ovf">
      <div class="board-btn br">
        <button v-if="mode=='int'" type="button" class="none" > </button>
        <button v-if="mode=='float'" type="button" @click="handleClick('.')">
          .
        </button>
      </div>
      <div class="board-btn br">
        <button type="button" @click="handleClick(0)">0</button>
      </div>
      <div class="board-btn">
        <button type="button" class="del" @click="handleClick('del')">Del</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'float' // int | float
    },
    value: {
      default: ''
    }
  },
  data() {
    return {
      valueSelf: this.value
    }
  },
  watch: {
    value(newval) {
      this.valueSelf = newval
    }
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    handleClick(val) {
      if (this.valueSelf === '0' || this.valueSelf === 0) {
        this.valueSelf = ''
      }

      switch (val) {
        case 'del': {
          this.valueSelf = this.valueSelf.substring(0, this.valueSelf.length - 1)
          break
        }
        case '.': {
          if (this.valueSelf.indexOf('.') === -1) {
            this.valueSelf = this.valueSelf + val
          }
          break
        }
        default: {
          this.valueSelf = this.valueSelf + val
        }
      }
      // alert(this.valueSelf) // eslint-disable-line
      this.$emit('on-click', this.valueSelf)
      this.$emit('input', this.valueSelf)
    }
  },
  components: {}
}
</script>
