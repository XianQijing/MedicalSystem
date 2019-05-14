<template>
  <div class="IdentificationDetail">
    <div class="white">
      <h1>项目名称占位</h1>
      <p>项目类别占位</p>
    </div>
    <div class="wrapper">
      <div class="no-img">
        <p>验收<br/>申请表</p>
        <div class="yulan">
          <img src="../../../common/image/eyes.png" alt=""><span>预览</span>
        </div>
      </div><div class="no-img">
        <p>课题<br/>总结报告</p>
        <div class="yulan">
          <img src="../../../common/image/eyes.png" alt=""><span>预览</span>
        </div>
      </div>
      <div class="no-img">
        <p>鉴定<br/>证书</p>
        <div class="yulan">
          <img src="../../../common/image/eyes.png" alt=""><span>预览</span>
        </div>
      </div><div class="no-img">
        <p>验收<br/>证书</p>
        <div class="yulan">
          <img src="../../../common/image/eyes.png" alt=""><span>预览</span>
        </div>
      </div>
      <div class="icon" v-for="item in list" :key="item.name">
        <div class="img">
          <IconSvg :iconClass="item.icon"/>
          <!-- <img :src="item.icon" alt=""> -->
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
  name: 'IdentificationDetail',
  data () {
    return {
      show: false,
      selected: false,
      form: {
        pass: '通过'
      },
      list: this.$store.state.ProjectIcon
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
.IdentificationDetail
  padding 10px 6px
  .comTitle
    margin 0
  .wrapper
    .icon
      display inline-block
      background white
      margin-left 0.04rem
      margin-bottom 0.04rem
      width calc(100% / 2 - 0.02rem)
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
          margin .07rem
          color white
        p
          color white
          font-size .12rem
      .desc
        font-size .12rem
        display inline-block
        vertical-align top
        width .68rem
        p
          padding-top .13rem
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
.no-img
  display inline-block
  background white
  margin-left 0.04rem
  margin-bottom 0.04rem
  width calc(100% / 2 - 0.02rem)
  &:nth-of-type(2n+1)
    margin-left 0
  p
    background: #003baa
    width .7rem
    height .5rem
    box-sizing border-box
    color white
    text-align center
    display inline-block
    vertical-align top
    font-size .12rem
    padding-top .08rem
    line-height .16rem
  .yulan
    display inline-block
    width 1rem
    background white
    text-align right
    line-height .5rem
    height .5rem
    img
      width .16rem
    span
      color #2873ff
      font-size .12rem
      margin-left 4px
.white
  background white
  padding 10px
  margin-bottom 10px
  h1
    font-size .16rem
    padding-bottom .15rem
  p
    font-size .14rem
</style>
