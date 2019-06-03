// 经费审核--详情
<template>
  <div class="PerformanceDetail.vue">
    <CTitle>审核信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">发票信息:</p>
        <p class="form-msg blue"><IconSvg iconClass="icon-icon_preview"/></p>
      </div>
      <div class="formCell">
        <p class="form-label">用途:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="form-Cell">
        <p class="form-label">报销详细说明:</p>
        <P class="main"></P>
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
  name: 'PerformanceDetail.vue',
  data () {
    return {
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
.PerformanceDetail.vue
  margin 0 .06rem
  .form
    .formCell
      padding 0 .10rem
      height .30rem
      background white
      margin-bottom 2px
      align-items center
      .form-label
        font-size: .14rem;
        color: #333333;
      .form-msg
        font-size: .14rem;
        color: #999999;
      .blue
        color #2873FF
  .btn
    text-align center
    margin-top .20rem
    button
      background #2873FF
      border-radius: .06rem;
      color white
      width 1.00rem
      height .30rem
.popup-form
  padding 0 .15rem
  display flex
  justify-content space-between
  margin-top .10rem
  .form-label
    font-size: .14rem;
    color: #333333
    display inline-block
    line-height .30rem
  textarea
    border: 1px solid #2873FF;
    width 74%
    box-sizing border-box
    font-size: .14rem
    padding .05rem
    border-radius: 4px;
    height .95rem
  .J-input
    border-radius: 4px;
    font-size: .14rem
    border: 1px solid #2873FF;
    height .26rem
    box-sizing border-box
    width 74%
.button-cell
  font-size: .14rem
  margin-top .10rem
.form-Cell
  padding 0 .10rem
  background white
  font-size .14rem
  height 2.00rem
  .form-label
    line-height .30rem
  .main
    color: #999999;
    width 100%
    // height 130px
    word-wrap break-word
    line-height .18rem
    overflow auto
    height 1.65rem
</style>
