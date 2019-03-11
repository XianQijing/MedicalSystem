<template>
  <div class="index">
    <div class="index-wapper">
      <div class="image">
        <img width="100%" height="100px" src="https://dpic.tiankong.com/3t/k2/QJ6251464424.jpg?x-oss-process=style/670ws" alt="图片">
      </div>
      <div class="header">
        <img width="72" height="72" src="./image/header.png" alt="">
      </div>
      <router-view></router-view>
    </div>
    <div class="shangBiao">
      <div>
        <img src="./image/icon.png" width="22" alt="">
        <span>技术支持</span><span>上海润银软件有限公司</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loginindex'
}
</script>

<style lang="stylus" scoped>
.index
  height 100%
  // padding-bottom 15px
  .index-wapper
    padding-bottom: 85px;
    min-height 100%
    box-sizing border-box
  .image
    width 80%
    // height 67px
    max-width 444px
    margin 0 auto
    padding-top 20px
  .header
    width 94px
    height 94px
    margin 3.3vh auto
    text-align center
    overflow hidden
    border-radius 50%
    border 1px solid rgba(245,246,248,1)
    line-height 94px
  .shangBiao
    width 100%
    position relative
    bottom 0px
    margin -60px auto 0 auto
    clear: both;
    font-size 16px
    div
      width 80%
      max-width 444px
      margin 0 auto
      span
        line-height 26px
        margin-left 1em
      img
        vertical-align text-bottom
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){
  .header{
    margin: 5.3vh auto!important
  }
}
</style>
