// 科技成果登记--成果审核
<template>
  <div class="SAndTRegistration">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">成果名称:</p>
        <p class="form-msg">成果名称</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人信息:</p>
        <p class="form-msg">完成人姓名-第三作者</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人单位:</p>
        <p class="form-msg">完成人单位</p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证机关:</p>
        <p class="form-msg">机关</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果获得日期:</p>
        <p class="form-msg">2018.09.01</p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证日期:</p>
        <p class="form-msg">2018.09.01</p>
      </div>
      <div class="formCell">
        <p class="form-label">登记号:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果鉴定书:</p>
        <p class="form-msg" style="color:#2873FF">预览</p>
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
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
export default {
  name: 'SAndTRegistration',
  data () {
    return {
      show: false,
      selected: false,
      msg: '',
      form: {
        pass: '通过'
      }
    }
  },
  components: {
    CTitle,
    Popup,
    JInput
  },
  methods: {
    onConfirm (value) {
      this.form.pass = value
      this.selected = false
    }
  },
  mounted () {
    this.msg = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
.SAndTRegistration
  .form
    margin 0 6px
    .formCell
      padding 0 10px
      height 30px
      background white
      margin-bottom 2px
      align-items center
      .form-label
        font-size: 14px;
        color: #333333;
      .form-msg
        font-size: 14px;
        color: #999999;
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
</style>
