// 人才学术水平
<template>
  <div class="BasicDataOfTalents">
    <CTitle>所在单位</CTitle>
    <div class="formCell">
      <p class="form-label">医院等级:</p>
      <p class="form-msg">预览</p>
    </div>
    <CTitle>所在学科</CTitle>
    <div class="formCell">
      <p class="form-label">学科等级:</p>
      <p class="form-msg">测试课题1</p>
    </div>
    <CTitle>学术任职</CTitle>
    <Collaspe name="任职情况">
      <div class="formCell">
        <p class="form-label">任职名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">聘任时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">任期:</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </Collaspe>
    <CTitle>学术荣誉</CTitle>
    <Collaspe name="获得荣誉">
      <div class="formCell">
        <p class="form-label">荣誉名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证日期:</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </Collaspe>
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
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'BasicDataOfTalents',
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
    Popup,
    Collaspe
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
.BasicDataOfTalents
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
    .blue
      color #2873FF
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
