// 任职审核,公用
<template>
  <div class="reviewed">
    <c-title>基本信息</c-title>
      <div class="form">
        <div class="formCell">
          <p class="form-label">姓名：</p>
          <j-input placeholder="ABC1234"></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">所属科室：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">任职类型：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">届期：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">级别：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">职务：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">聘任时间：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">任期：</p>
          <j-input></j-input>
        </div>
        <div class="formCell">
          <p class="form-label">聘书扫描件：</p>
          <span style="color:#2873FF" @click="watchPic">预览</span>
        </div>
      </div>

    <div v-if="from === '审核'">
      <c-title>任职登记审核</c-title>
      <div class="form">
        <div class="formCell text">
          <p class="form-label">审核意见：</p>
          <textarea placeholder="审核意见占位"></textarea>
        </div>
        <div class="formCell">
          <p class="form-label">审核结果：</p>
          <j-input type="select" v-model="pass" @click="close"></j-input>
        </div>
      </div>
    </div>

    <div v-if="from === '审核'" class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认提交</button>
    </div>
    <popup :toShow="towCell" position="bottom" @close="close">
      <div class="pop-btn">
        <button @click="close">取消</button>
        <button @click="onConfirm(open)">完成</button>
      </div>
      <van-picker :item-height=30 ref="Sex" :columns="List" @change="selectSex" />
    </popup>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Popup from '@/components/popup/popup'
import JInput from '@/components/input/j-input'
import { ImagePreview } from 'vant'
export default {
  name: 'Reviewed',
  data () {
    return {
      age: '',
      from: '',
      pass: '',
      towCell: false, // 学科选择
      open: 'time',
      List: ['通过', '建议修改', '不通过']
    }
  },
  mounted () {
    this.from = this.$route.params.from
    document.title = `任职${this.$route.params.from}`
  },
  methods: {
    // 性别选择
    selectSex (picker, value) {
      this.pass = value
    },
    close (type) {
      this.towCell = !this.towCell
      this.open = type
      console.log('sdf')
    },
    onConfirm (open) {
      this.pass = this.$refs.Sex.getValues(1)
      this.towCell = false
    },
    // 图片预览
    watchPic () {
      ImagePreview([
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ])
    }
  },
  components: {
    CTitle,
    Popup,
    JInput
  }
}
</script>

<style lang="stylus" scoped>
.reviewed >>> .van-picker-column
  font-size: 16px
.reviewed >>> .J-input
  padding 0
  text-align right
  .aSelect
    background none
    padding 0
  input
    text-align right
    width 100%
    padding 0
.reviewed
  min-height 100%
  .form
    margin 0 6px
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
      box-sizing border-box
      .J-input
        width 50%
        padding 0
        max-width 181px
        font-size: 14px;
        color: #333333;
        font-weight 700
    .text
      height 100px
      display block
      p
        line-height 30px
      textarea
        font-size: 14px;
        color: #333333;
        font-weight 700
        width 100%
        height 60px
  .pop-btn
    display flex
    justify-content space-between
    padding 15px 10px
    font-size: 13px;
    color: #2873FF;
    button
      background none
  .pop-title
    display flex
    justify-content space-around
    padding-bottom 15px
  .black
    font-size: 16px;
    color: #333333;
    font-weight 700
  .two
    margin-top 15px
    display flex
    justify-content space-between
    font-size: 14px;
    color: #333333;
  .button-cell
    position absolute
    bottom 0
</style>
