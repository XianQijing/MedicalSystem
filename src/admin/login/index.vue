<template>
  <div class="index">
    <div class="image">
      <img src="" alt="图片">
    </div>
    <div class="header">
      <img width="72" height="72" src="./image/header.png" alt="">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Loginindex'
}
</script>

<style lang="stylus" scoped>
.index
  .image
    width 100%
    height 67px
    background white
  .header
    width 94px
    height 94px
    margin 61px auto
    text-align center
    overflow hidden
    border-radius 50%
    border 1px solid rgba(245,246,248,1)
    line-height 94px
</style>
