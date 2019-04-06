// 形式审查
<template>
  <div class="ReviewManagement">
    <CTitle :screen="true" :textList="textList">进程列表</CTitle>
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span class="resTime border-1px">开始时间：2017.08.12</span>
        <div class="label">
          <p>项目申报</p>
          <p>项目进程</p>
        </div>
        <div class="right">
          <div>
            <p>直接评审</p>
          </div>
          <div>
            <p>批准文件</p>
          </div>
        </div>
      </card>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
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
          type: '通过'
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
  components: {
    CTitle,
    Card
  },
  methods: {
    jump () {
      this.$router.push({name: 'declareDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ReviewManagement
  margin 0 6px
  .comTitle
    margin 0
  .card
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      // display block
      margin 0 auto
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .black
      margin-top 15px
      font-size: 16px;
    .border-1px
      border-1px(#D3D3D3)
      color: #333333;
      padding-bottom 15px
      display block
    .resTime
      font-size: 12px;
      color: #999999;
  .label, .right
    display inline-block
    vertical-align middle
  .label
    width 4em
    font-size 16px
    line-height 20px
  .right
    margin-left 10px
    div
      display inline-block
      position relative
      width 76px
      p
        width 50px
        height 50px
        font-size 12px
        border-radius 50%
        background #2873FF
        box-sizing border-box
        vertical-align top
        padding 13px
        color white
      &:after
        display block
        position absolute
        content ' '
        border-top 1px solid #d3d3d3
        width 23px
        top 50%
        right 2px
      &:first-child
        p
          background #C6DAFF
          color #2873FF
      &:last-child
        &:after
          display none
</style>
