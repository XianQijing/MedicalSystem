// 经费审核
<template>
  <div class="ExaminFund">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">会议名称:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">主办单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议级别:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议地点:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议日期:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">经费来源:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">交流形式:</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </div>

    <div class="table">
      <table>
        <tr>
          <th>会务费</th>
          <th>住宿费</th>
          <th>交通费</th>
          <th>资料费</th>
          <th>其他费用</th>
        </tr>
        <tr>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>0.00</td>
        </tr>
      </table>
    </div>
    <div class="btn" v-if="msg !== '查看详情'">
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
  name: 'ExaminFund',
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
.ExaminFund
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
.table
  margin 12px 6px 0 6px
  table
    width 100%
    border-collapse:collapse
    text-align center
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    th
      background  #003BAA
      color white
      font-size: 14px;
      height 40px
    tr
      background: #FFFFFF;
      font-size: 14px;
      color: #999999;
      height 26px
</style>
