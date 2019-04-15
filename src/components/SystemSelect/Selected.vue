<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <li class="Selected">
        <Checkbox v-model="item.checked" @change="change(item)"/>
        <p class="border-1pxLeft">{{item.name}}</p>
        <img v-if="item.children" @click="openList(item)" :src="item.open ? icon.close : icon.open">
      </li>
      <ul class="child" v-show="item.open" v-if="item.children">
        <Selected @getValue="getValue" v-model="item.checked" :list="item.children"/>
      </ul>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/checkbox/checkbox'
export default {
  name: 'Selected',
  data () {
    return {
      icon: {
        open: require('../../common/image/open.png'),
        close: require('../../common/image/close.png')
      }
    }
  },
  props: {
    list: {
      type: Array
    },
    value: {}
  },
  components: {
    Checkbox
  },
  computed: {
    multiple () {
      return this.list.filter(item => {
        return item.checked === true
      })
    }
  },
  methods: {
    openList (item) {
      item.open = !item.open
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
    },
    change (item) {
      if (item.children) {
        item.children.forEach(child => {
          child.checked = item.checked
        })
      }
    },
    getValue (data) {
      this.$emit('getValue')
    }
  },
  watch: {
    multiple (val) {
      this.$emit('getValue')
      if (this.multiple.length === this.list.length) {
        this.$emit('input', true)
      } else {
        this.$emit('input', false)
      }
      this.$emit('aa')
    }
  },
  created () {
    this.addProperty()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.Selected
  background white
  height .3rem
  padding 0 7px 0 9px
  display flex
  align-items center
  position relative
  margin-bottom 2px
  .checkbox
    height .12rem
    width .12rem
    vertical-align top
    margin-right 11px
  .border-1pxLeft
    vertical-align top
    border-1pxLeft(#d3d3d3)
    padding-left 11px
    display inline-block
    font-size .12rem
  img
    position absolute
    right 7px
    width .19rem
.child
  padding-left 10px
</style>
