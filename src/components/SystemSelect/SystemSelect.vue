<template>
  <div class="SystemSelect">
    <Selected @getValue="getValue" ref="selectChild" :list="list"/>
    <div class="check-bottom border-1pxTop">
      <checkbox v-model="checked" @change="checkall(list)"></checkbox>
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
import Checkbox from '@/components/checkbox/checkbox'
import Selected from '@/components/SystemSelect/Selected'
export default {
  name: 'SystemSelect',
  data () {
    return {
      checked: false,
      num: 0,
      dataArray: []
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  components: {
    Checkbox,
    Selected
  },
  methods: {
    checkall (data) {
      data.forEach(item => {
        item.checked = this.checked
        this.$refs.selectChild.change(item)
      })
    },
    getValue () {
      this.num = 0
      let test = this.list.map(item => {
        this.num += item.checked
        if (item.children) {
          return {
            name: item.name,
            checked: item.checked,
            children: item.children.filter(child => {
              return child.checked === true
            })
          }
        } else if (!item.children) {
          if (item.checked === true) {
            return item.name
          }
        }
      })
      test = test.filter(item => {
        return item !== undefined
      })
      this.dataArray = test
      this.$emit('input', test)
    },
    addProperty () {
      this.list.forEach(item => {
        if (!item.checked) {
          this.$set(item, 'checked', false)
          if (item.children) {
            this.$set(item, 'open', false)
          }
        }
      })
    }
  },
  created () {
    this.addProperty()
  },
  watch: {
    num (val) {
      if (val === this.list.length) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.SystemSelect
  .check-bottom
    position fixed!important
    bottom 0
    left 0
    height .3rem
    z-index 20
    width 100%
    background: rgb(250,250,250);
    box-shadow: inset 0 0 0 0 #B2B2B2;
    border-1pxTop(rgb(196, 196, 198))
    span
      font-size .14rem
      margin-left 5px
      line-height .3rem
      vertical-align top
    .checkbox
      margin-left 10px
      height .16rem
      width .16rem
      top 50%
      margin-top -.08rem
      vertical-align top
    .right
      display inline-block
      height .3rem
      float right
</style>
