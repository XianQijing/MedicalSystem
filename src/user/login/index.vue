<template>
  <div class="index">
    <div class="image">
      <img width="100%" height="134px" src="https://dpic.tiankong.com/3t/k2/QJ6251464424.jpg?x-oss-process=style/670ws" alt="图片">
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
    width 80%
    // height 67px
    max-width 444px
    margin 0 auto
    margin-top 20px
  .header
    width 94px
    height 94px
    margin 30px auto
    text-align center
    overflow hidden
    border-radius 50%
    border 1px solid rgba(245,246,248,1)
    line-height 94px
</style>
