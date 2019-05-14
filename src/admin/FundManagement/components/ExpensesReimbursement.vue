// 经费报销
<template>
  <div class="ExpensesReimbursement">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">经费类别:</p>
        <j-input v-model="test"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">经费属性:</p>
        <j-input></j-input>
      </div>
      <div class="formCell" @click="open([$store.state.columns[0], $store.state.columns[0], $store.state.columns[0]])">
        <p class="form-label red">申请端口:</p>
        <j-input v-model="form.apply"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label red">用途:</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label red">报销金额:</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label red">发票:</p>
        <p class="blue">上传</p>
      </div>
      <div class="form-cell">
        <p class="form-label">报销详细说明:</p>
        <textarea/>
      </div>
    </div>

    <popup position="bottom" v-model="selected">
      <div class="formCell">
        <span>取消</span>
        <span>确认</span>
      </div>
      <div class="content">
        <van-picker
          :item-height="30"
          :columns="$store.state.columns"
          @change="onChange"
          />
        <van-picker
          :item-height="30"
          :columns="$store.state.columns"
          @change="onChange"
          />
        <van-picker
          :item-height="30"
          :columns="$store.state.columns"
          @change="onChange"
          />
      </div>
    </popup>

    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'ExpensesReimbursement',
  data () {
    return {
      test: 'sf',
      selected: true,
      form: {
        apply: ''
      }
    }
  },
  components: {
    Popup
  },
  methods: {
    onChange (picker, value, index) {
      console.log(arguments)
    },
    open (arr) {
      this.selected = true
      this.form.apply = arr.join('-')
    }
  }
}
</script>

<style lang="stylus" scoped>
.ExpensesReimbursement >>> .J-input
  input
    text-align right
    color black
    font-weight 700
.ExpensesReimbursement
  .comTitle
    margin 0
  .form
    .formCell
      background white
      height 30px
      display flex
      align-items center
      justify-content space-between
      padding 0 10px
      margin-bottom 2px
      font-size: 14px;
      color: #333333;
      box-sizing borderj-input
      .red
        color red
      .blue
        font-size: 14px;
        color: #2873FF;
        font-weight 700
      .J-input
        width 50%
        padding 0
        max-width 181px
        text-align right
        font-size: 14px;
        color: #999999;
    .form-cell
      background white
      padding 0 10px 10px 10px
      .form-label
        font-size: 14px;
        color: #333333;
        line-height 30px
      textarea
        width 100%
        font-size 14px;
        color: #333333;
        line-height 18px
        height 150px
        font-weight 700
  .popup
    box-sizing border-box
    .formCell
      height 30px
      // line-height 30px
      font-size: 13px;
      color: #2873FF;
      padding 10px 10px 0 10px
    .content
      display flex
      justify-content space-between
      .van-picker
        flex 1
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
