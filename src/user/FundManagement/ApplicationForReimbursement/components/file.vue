<template>
  <div class="file">
    <iconSvg iconClass="icon-wenjianjiaicon"/>
    <div class="border-1pxLeft">
      <p class="file-name">文件名：{{name}}</p>
      <!-- <p class="file-path">文件类型：{{item.type}}</p> -->
    </div>
    <iconSvg @click="deleted" class="border-1pxRight" iconClass="icon-delete"/>
  </div>
</template>

<script>
export default {
  name: 'file',
  props: {
    name: {
      type: String
    }
  },
  methods: {
    deleted () {
      this.$emit('deleted')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl';
.file
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5)
  border-radius: .04rem
  font-size 0
  text-align: left
  margin-bottom .04rem
  overflow hidden
  // padding .14rem 0
  .svg-icon
    font-size .1914rem
    padding .14rem .1rem
  .border-1pxLeft
    border-1pxLeft(black)
    display inline-block
    height 100%
    max-width calc(100% - 1rem)
    font-size .14rem
    height .285rem
    // line-height .285rem
    margin .095rem 0
    vertical-align top
    padding-left .1rem
    .file-name
      font-size .14rem
      line-height .285rem
      text-nowrap()
    .file-path
      font-size .12rem
      line-height .16rem
  .border-1pxRight
    font-size .2124rem
    color white
    background $blue
    float right
</style>
