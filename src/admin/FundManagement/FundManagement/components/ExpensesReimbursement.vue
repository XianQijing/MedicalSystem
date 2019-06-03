// 经费报销
<template>
  <div class="ExpensesReimbursement">
    <CTitle>经费报销</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">经费类别:</p>
        <div class="blue">
          <IconSvg iconClass="icon-bianjiicon"/>
          项目经费
        </div>
      </div>
      <div class="formCell">
        <p class="form-label">经费属性:</p>
        <div class="blue">
          <IconSvg iconClass="icon-bianjiicon"/>
          科研课题
        </div>
      </div>
      <div class="formCell" @click="open([$store.state.columns[0], $store.state.columns[0], $store.state.columns[0]])">
        <p class="form-label red">申请端口:</p>
        <div class="blue">
          <IconSvg iconClass="icon-bianjiicon"/>
            {{test}}
        </div>
      </div>
      <div class="formCell">
        <p class="form-label red">用途:</p>
        <div class="blue">
          <IconSvg iconClass="icon-bianjiicon"/>
          用途占位
        </div>
      </div>
      <div class="formCell">
        <p class="form-label red">报销金额:</p>
        <div class="blue">
          <IconSvg iconClass="icon-bianjiicon"/>
          1928.00
        </div>
      </div>
      <div class="formCell">
        <p class="form-label red">发票:</p>
        <div class="blue">
          <IconSvg iconClass="icon-icon_download"/>
        </div>
      </div>
      <div class="form-cell">
        <p class="form-label">报销详细说明:</p>
        <textarea class="blue" placeholder="报销详细说明占位"/>
      </div>
    </div>

    <popup position="bottom" v-model="selected">
      <van-picker
        :item-height="30"
        :show-toolbar="true"
        :columns="columns"
        @confirm="confirm"
      />
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
      selected: false,
      test: '间接经费-科研管理费-费用',
      form: {
        apply: ''
      },
      columns: [
        {
          values: ['一端口1', '一端口2', '一端口3', '一端口4', '一端口5'],
          className: 'column1'
        },
        {
          values: ['二端口1', '二端口2', '二端口3', '二端口4', '二端口5'],
          className: 'column2'
        },
        {
          values: ['三端口1', '三端口2', '三端口3', '三端口4', '三端口5'],
          className: 'column3'
        }
      ]
    }
  },
  components: {
    Popup
  },
  methods: {
    confirm (val) {
      this.test = val.join('-')
      this.selected = false
    },
    open (arr) {
      this.selected = true
      this.form.apply = arr.join('-')
    }
  }
}
</script>

<style lang="stylus" scoped>
.ExpensesReimbursement >>> .div
  input
    text-align right
    color black
    font-weight 700
.ExpensesReimbursement
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
      box-sizing borderdiv
      .red
        color red
      .blue
        font-size: 14px;
        color: #2873FF!important
        font-weight 700
      .div
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
