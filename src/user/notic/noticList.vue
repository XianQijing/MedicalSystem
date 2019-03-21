<template>
  <div class="noticList">
    <CTitle>通知列表</CTitle>
    <div class="list-content">
      <div class="wrapper" v-for="(item, index) in list" :key="index">
        <div class="left">
          <p class="time">{{item.time}}</p>
          <p class="title">{{item.title}}</p>
          <p class="type" :class="{'visit': item.type === '未读'}">{{item.type}}</p>
        </div>
        <div class="right" @click="jump">
          <img src="../../common/image/eyes.png" alt="">
          <p>预览</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'NoticList',
  data () {
    return {
      list: [
        {
          time: '发布时间：2018.09.01',
          title: '通知文件标题',
          type: '已读'
        },
        {
          time: '发布时间：2018.09.01',
          title: '通知文件标题',
          type: '未读'
        },
        {
          time: '发布时间：2018.09.01',
          title: '通知文件标题',
          type: '已读'
        },
        {
          time: '发布时间：2018.09.01',
          title: '通知文件标题',
          type: '未读'
        }
      ]
    }
  },
  components: {
    CTitle
  },
  methods: {
    jump () {
      this.$router.push({name: 'Reviews'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-content
  margin 0 6px
  padding-bottom 10px
  .wrapper
    background white
    margin-bottom 0.1rem
    width 100%
    clear both
    font-size 0
    .left, .right
      display inline-block
      vertical-align top
    .right
      background #C6DAFF
      height 0.9rem
      width calc(100% - 3.06rem)
      text-align center
      img
        width .23rem
        margin-top .21rem
      p
        color #2873FF
        font-size .14rem
        margin-top .1rem
    .left
      // background green
      position relative
      width 3.06rem
      padding 0.09rem 0 0 .09rem
      box-sizing border-box
      height .9rem
      .time
        font-size .12rem
        color #555555
        padding-bottom .1rem
      .title
        font-size .16rem
        color #333333
        padding-bottom .05rem
      .type
        position absolute
        bottom 0
        font-size .1rem
        color white
        background #45C186
        width .3rem
        height .3rem
        line-height .3rem
        text-align center
        &.visit
          background #FD4D4D
</style>
