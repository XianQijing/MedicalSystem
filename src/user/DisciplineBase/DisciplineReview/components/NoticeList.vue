<template>
  <div class="NoticeList">
    <CTitle :screen="true" :textList="textList">通知列表</CTitle>
    <div class="up">
      <div class="left">
        <span class="top">置顶</span>
        <p class="black">初评通知标题占位</p>
        <p class="normal">通知内容</p>
        <p class="small">发布时间：2018.09.01 12:00:00</p>
        <p class="small">发布单位：静安区卫计委</p>
      </div>
      <div class="right">
        <img src="../../../../common/image/eyes.png" alt="">
        <p>附件预览</p>
      </div>
    </div>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p style="padding: 15px 0" class="black border-1pxTop">通知标题</p>
      <span class="resTime">发布单位：静安区卫计委</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'NoticeList',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '所属科室', '研究类型', '审核状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'DisciplineDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.NoticeList
  .up
    background white
    font-size 0
    position relative
    .left
      display inline-block
      width calc(100% - .56rem)
      vertical-align top
      .top
        display inline-block
        float right
        background #DC6161
        color white
        height .2rem
        text-align center
        line-height .2rem
        border-radius .04rem
        width .36rem
        margin .1rem
        font-size .09rem
      p
        margin .1rem
        &.black
          line-height .2rem
          font-size .16rem
        &.normal
          line-height .18rem
          font-size .14rem
        &.small
          line-height .16rem
          font-size .12rem
          color #999999
    .right
      display inline-block
      background $light
      color $blue
      width .56rem
      height 100%
      vertical-align top
      font-size .14rem
      position absolute
      top 0
      bottom 0
      text-align center
      p
        padding 0 .14rem
        line-height .18rem
      img
        width .23rem
        margin .27rem 0 .10rem 0
  .card
    margin-top .1rem
</style>
