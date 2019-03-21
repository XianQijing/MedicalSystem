<template>
  <ul class="Alphabet">
    <li class="item"
      v-for="item in letter"
      @click="handleClick"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
      :ref="item"
      :key="item">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    list: {
      type: Object
    }
  },
  computed: {
    letter () {
      let letter = []
      for (let i in this.list) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 30
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  },
  mounted () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
.Alphabet
  position absolute
  right 0
  top 30px
  bottom 0
  width 35px
  display flex
  flex-direction: column
  justify-content: center
  flex-wrap wrap
  text-align center
  // align-items center
  // background red
  .item
    margin-bottom 5px
    font-size:14px;
    color:rgba(40,115,255,1);
</style>
