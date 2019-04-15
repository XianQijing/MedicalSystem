<template>
  <div class="TimeSettings">
    <CTitle>信息列表</CTitle>

    <div class="list-content">
      <div class="wrapper" v-for="(item, index) in list" :key="index">
        <div class="left">
          <p class="time">{{item.time}}</p>
          <p class="title">{{item.title}}</p>
          <p class="add">添加时间: </p>
        </div>
        <div class="right" @click="jump('编辑')">
          <img src="../../../common/image/setting.png" alt="">
          <p>设置</p>
        </div>
      </div>
    </div>

    <Popup position="center" title="标准设置" v-model="show">
      <div class="form">
        <p class="title">考核提醒内容</p>
        <div class="formCell">
          <p class="form-label">提醒内容</p>
          <textarea/>
        </div>
      </div>
      <div class="form">
        <p class="title">考核间隔时间</p>
        <div class="formCell">
          <p class="form-label">开始时间</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">日常考核</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">中期考核</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">结题考核</p>
          <JInput class="last"/>
        </div>
      </div>
      <div class="form">
        <p class="title">设置结转时间</p>
        <div class="formCell">
          <p class="form-label">结转时间</p>
          <textarea/>
        </div>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'TimeSettings',
  data () {
    return {
      show: false,
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
    Popup
  },
  methods: {
    jump (msg) {
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.TimeSettings
  .comTitle
    margin 0
.list-content
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
      .add
        font-size .14rem
        margin-top .09rem
        line-height .18rem
      .time
        font-size .12rem
        color #555555
        padding-bottom .1rem
      .title
        font-size .16rem
        color #333333
        line-height .2rem
.form
  margin 0 16px 10px 14px
  font-size .14rem
  overflow hidden
  .title
    line-height 18px
    margin-top 10px
    margin-bottom 12px
  .form-label
    font-size .14rem
    line-height .3rem
  .J-input, textarea
    max-width: 200px;
    width 2rem
    border: 1px solid #2873ff;
    border-radius: .04rem
  .J-input
    height: .30rem
    max-height 30px
    margin-bottom 10px
    &.last
      margin-bottom 0
  textarea
    height: .8rem
    max-height 80px
</style>
