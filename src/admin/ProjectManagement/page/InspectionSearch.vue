// 项目查询--详情
<template>
  <div class="InspectionSearch">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">项目负责人</p>
        <p class="black">陈阿斌</p>

        <p class="plane">项目类别</p>
        <p class="black">单位级课题</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">考核次数:</p>
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">研究年限:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">已使用经费:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">拟完成日期:</p>
          <p class="j-input">专家人数</p>
        </div>
        <div class="form-cell">
          <p class="label">拟鉴定日期:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">手机号码:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱:</p>
          <p class="j-input">参加人数</p>
        </div>
      </div>
    </div>
    <CTitle>考核项目</CTitle>
    <div class="wrapper">
      <div class="icon" v-for="item in list" :key="item.name">
        <div class="img">
          <IconSvg :weight="20" border="white" :iconClass="item.icon"/>
          <p>{{item.name}}</p>
        </div>
        <div class="desc">
          <p>原定指标:d3</p>
          <p>完成指标:3</p>
        </div>
        <p class="blue">预览</p>
      </div>
    </div>
    <div class="btn">
      <button @click="show=true">审核</button>
    </div>
    <popup position="center" v-model="show" title="项目审核">
      <div class="popup-form">
        <p class="form-label">评审意见</p>
        <textarea></textarea>
      </div>
      <div class="popup-form">
        <p class="form-label">单位意见</p>
        <JInput v-model="form.pass" type="select" @click="selected = true"></JInput>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </popup>

    <popup position="bottom" :overlay="false" v-model="selected">
      <van-picker
        :item-height="30"
        :columns="$store.state.columns"
        show-toolbar
        @cancel="selected = false"
        @confirm="onConfirm" />
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'InspectionSearch',
  data () {
    return {
      list: this.$store.state.ProjectIcon,
      show: false,
      selected: false,
      form: {
        pass: '通过'
      }
    }
  },
  components: {
    Popup
  },
  methods: {
    onConfirm (value) {
      this.form.pass = value
      this.selected = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.InspectionSearch
  padding 10px 6px
  .comTitle
    margin 0
  .base-message
    width 100%
    display flex
    margin-bottom 2px
    div
      // height 166px
    .base-left
      background white
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 119px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-size 16px
        line-height 20px
        margin-bottom 20px
    .base-right
      flex 2 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 181px
          color: #999999;
          height 100%
          text-align right
          font-size 12px
          line-height 26px
  .wrapper
    .icon
      display inline-block
      background white
      margin-left 0.04rem
      margin-bottom 0.04rem
      width 49.452%;
      &:nth-of-type(2n+1)
        margin-left 0
      .img
        background: #003baa
        width .7rem
        height .64rem
        box-sizing border-box
        text-align center
        padding .05rem 0
        display inline-block
        vertical-align top
        .svg-icon
          font-size .23rem
          color white
          margin .07rem
        p
          color white
          font-size .12rem
        .no-img
          margin-top 17px
      .desc
        font-size .12rem
        display inline-block
        vertical-align top
        width .68rem
        p
          padding-top 13px
      .blue
        vertical-align top
        display inline-block
        text-align center
        font-size .12rem
        color #2873ff
        line-height .64rem
  .btn
    text-align center
    margin-top 20px
    button
      background #2873FF
      border-radius: 6px;
      color white
      width 100px
      height 30px
.popup-form
  padding 0 15px
  display flex
  justify-content space-between
  margin-top 10px
  .form-label
    font-size: 14px;
    color: #333333
    display inline-block
    line-height 30px
  textarea
    border: 1px solid #2873FF;
    width 74%
    box-sizing border-box
    font-size: 14px
    padding 5px
    border-radius: 4px;
    height 95px
  .J-input
    border-radius: 4px;
    font-size: 14px
    border: 1px solid #2873FF;
    height 26px
    box-sizing border-box
    width 74%
.button-cell
  font-size: 14px
  margin-top 10px
.form-Cell
  padding 0 10px
  background white
  font-size 14px
  height 200px
  .form-label
    line-height 30px
  .main
    color: #999999;
    width 100%
    // height 130px
    word-wrap break-word
    line-height 18px
    overflow auto
    height 165px
</style>
