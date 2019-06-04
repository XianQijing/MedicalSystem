<template>
  <div class="collaspe">
    <div class="collaspe-header" :class="{'open': open === true, 'is-green': green}">
      <p class="green" v-if="green"/>
      <span>{{name}}</span>
      <img @click="open = !open" :src="open ? icon.close : icon.open">
      <span class="right">{{right}}</span>
      <slot name="blue"></slot>
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
        open: require('../../common/image/open.png'),
        close: require('../../common/image/close.png')
      }
    }
  },
  props: {
    name: {
      type: String
    },
    right: {
      type: String
    },
    green: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.collaspe
  width 100%
  font-size 0px
  margin-top .02rem
  .collaspe-header
    background white
    height .30rem
    line-height .30rem
    padding 0 .10rem
    font-size: .14rem;
    &.is-green
      position relative
      padding 0 0
      span
        margin-left .1rem
    &.open, &.is-green
      background none
    img
      float right
      width .18rem
      height .18rem
      margin .06rem 0
    .right
      padding-right .10rem
      font-size .12rem
      color #999999
      float right
  .collaspe-content
    font-size: .14rem;
    margin-bottom .10rem
.blue
  margin-left .10rem
  color: #2873ff;
  font-size: .14rem;
.green
  border-radius .04rem
  border-left .025rem solid rgba(69,193,134,1);
  border-right .025rem solid rgba(69,193,134,1);
  height .13rem
  width 0
  display inline-block
  margin-right 4px
  position absolute
  top 50%
  margin-top -0.065rem
</style>
