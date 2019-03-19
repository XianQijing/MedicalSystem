<template>
  <div class="checkAll">
    <slot></slot>
    <div class="check-bottom border-1pxTop">
      <checkbox v-model="checked" @change="selection"></checkbox>
      <span>
        全选/反选
      </span>
      <div class="right">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from './checkbox'
export default {
  name: 'CheckAll',
  data () {
    return {
      checked: false,
      valueList: []
    }
  },
  components: {
    Checkbox
  },
  methods: {
    getCheckbox () {
      let checkbox = []
      this.$children.forEach(item => {
        if (item.$options.name === 'card') {
          checkbox.push(item)
        }
      })
      return checkbox
    },
    selection () {
      this.getCheckbox().forEach(item => {
        item.checked = this.checked
      })
    },
    getValue (data) {
      this.valueList.push(data)
    },
    delValue (data) {
      this.valueList.splice(this.valueList.indexOf(data), 1)
    }
  },
  watch: {
    valueList (val) {
      if (this.getCheckbox().length === this.valueList.length) {
        this.checked = true
      } else {
        this.checked = false
      }
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.checkAll
  .check-bottom
    position fixed!important
    bottom 0
    left 0
    height 30px
    // z-index 300
    width 100%
    background: rgb(250,250,250);
    box-shadow: inset 0 0 0 0 #B2B2B2;
    border-1pxTop(rgb(196, 196, 198))
    span
      font-size: 14px;
      margin-left 5px
      line-height 30px
    .checkbox
      margin-left 10px
    .right
      display inline-block
      height 30px
      float right
</style>
