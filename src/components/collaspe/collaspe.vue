<template>
  <div class="collaspe">
    <div class="collaspe-header" :class="{'open': open === true}">
      <span>{{name}}</span>
      <img @click="open = !open" :src="open ? icon.close : icon.open" width="18" height="18">
      <span class="right">{{right}}</span>
    </div>
    <div class="collaspe-content" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collaspe',
  data () {
    return {
      open: false,
      icon: {
        open: require('./image/open.png'),
        close: require('./image/close.png')
      }
    }
  },
  props: {
    name: {
      type: String
    },
    right: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
.collaspe
  width 100%
  font-size 14px
  margin-top 2px
  .collaspe-header
    background white
    height 30px
    line-height 30px
    padding 0 10px
    &.open
      background none
    img
      float right
      margin 6px 0
    .right
      padding-right 10px
      font-size 12px
      color #999999
      float right
  .collaspe-content
    margin-bottom 10px
</style>
