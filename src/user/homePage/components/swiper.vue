<template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item" data-swiper-autoplay="3000">
        <div class="text-content">
          <p class="content">幻灯幻灯片幻灯片幻灯片幻灯片幻灯片幻片幻灯片幻灯片</p>
          <p class="time">2019.03.06</p>
        </div>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletElement: 'li',
          clickable: true,
          bulletActiveClass: 'my-bullet-active'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wapper >>> .my-bullet
  background: #C6DAFF;
  border-radius: 4px;
  width 20px
  height 4px
  display inline-block
  margin-right 10px
.wapper >>> .my-bullet-active
  background: #2873FF;
.wapper
  overflow hidden
  height 100px
  .text-content
    height 80px;
    background #003BAA;
    border-radius 4px
    box-shadow 0 1px 2px 0 rgba(0,0,0,0.50)
    vertical-align top
    color white
  .content
    margin 0 20px
    padding 18px 0
    font-size: 14px;
    font-weight 700
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
  .time
    font-size: 12px;
    margin 0 20px
  .swiper-pagination
    position relative
    top 2px
</style>
