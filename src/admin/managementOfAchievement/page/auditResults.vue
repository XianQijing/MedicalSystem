// 科技成果申报--成果审核、详情
<template>
  <div class="auditResults">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">成果名称:</p>
        <p class="form-msg">成果名称</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果登记表:</p>
        <p class="form-msg">无</p>
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
        <p class="form-label">相关技术评价证明:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">应用技术成果:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果鉴定表:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果鉴定书:</p>
        <p class="form-msg" style="color:#2873FF">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">备注:</p>
        <p class="form-msg">无</p>
      </div>
    </div>
    <p class="desc">相关的评价证明（如：鉴定证书、验收报告、行业准入证明、新产品证书等）或者知识产权证明（如：专利证书、植物品种权证书、软件登记证书等）。</p>
    <div class="btn" v-if="msg === '成果审核'">
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
  name: 'AuditResults',
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
    Popup
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
.auditResults
  margin 0 6px
  .form
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
.desc
  margin 5px 6px 0 6px
  font-size: 14px;
  color: #999999;
  line-height 20px
</style>
