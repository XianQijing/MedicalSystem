// 形式审查
<template>
  <div class="ReviewManagement">
    <CTitle :screen="true" :textList="textList">进程列表</CTitle>
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span class="resTime border-1px">开始时间：2017.08.12</span>
        <div class="label">
          <p class="apply">项目申报<br/>流程进展</p>
        </div>
        <div class="right">
          <div>
            <p>直接评审</p>
          </div>
          <div>
            <p>批准文件</p>
          </div>
          <div>
            <p>批准文件</p>
          </div>
        </div>
      </card>
  </div>
</template>

<script>
export default {
  name: 'ReviewManagement',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '计划状态'],
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
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ReviewManagement
  margin 0 .06rem
  .border-1px
    border-1px(#d3d3d3)
    padding-bottom .15rem
  .label, .right
    display inline-block
    vertical-align middle
  .label
    font-size .16rem
    line-height .2rem
  .right
    margin-left .1rem
    div
      display inline-block
      position relative
      width .76rem
      p
        width .50rem
        height .50rem
        font-size .12rem
        border-radius 50%
        background #2873FF
        box-sizing border-box
        vertical-align top
        padding .13rem
        color white
        margin 0 !important
      &:after
        display block
        position absolute
        content ' '
        border-top 1px solid #d3d3d3
        width .23rem
        top 50%
        right .02rem
      &:first-child
        p
          background #C6DAFF
          color #2873FF
      &:last-child
        width .5rem
        &:after
          display none
</style>
