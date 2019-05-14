<template>
  <div class="creditDetail">
    <c-title>基本信息</c-title>
    <div class="form">
      <div class="formCell">
        <p class="form-label">人员编号：</p>
        <j-input placeholder="ABC1234"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">所在单位</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">所属科室：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">工号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">姓名：</p>
        <j-input></j-input>
      </div>
      <div class="formCell" @click="close('sex')">
        <p class="form-label">性别：</p>
        <j-input type="select" v-model="sex"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">职称：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">证件号码：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">上传证书：</p>
        <span style="color:#2873FF" @click="watchPic">预览</span>
      </div>
      <div class="formCell">
        <p class="form-label">I类学分：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">学分属性：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">学时：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">项目名称：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">项目编号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">证书编号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">项目主办单位：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">备注：</p>
        <j-input></j-input>
      </div>
    </div>

    <div class="button-one">
      <button class="butto" @click="show = true">审核</button>
    </div>

    <!-- <popup :toShow="towCell" position="bottom" @close="close">
      <div class="pop-btn">
        <button @click="close">取消</button>
        <button @click="onConfirm(open)">完成</button>
      </div>
      <van-picker :item-height=30 ref="Sex" :columns="sexList" v-show="open === 'sex'" @change="selectSex" />
    </popup> -->

    <popup position="center" v-model="show" title="项目审核">
      <div class="popup-form">
        <p class="form-label">评审意见</p>
        <textarea></textarea>
      </div>
      <div class="popup-form">
        <p class="form-label">评审结果</p>
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
import { ImagePreview } from 'vant'

export default {
  name: 'CreditDetail',
  data () {
    return {
      age: '',
      sex: '',
      show: false,
      selected: false,
      open: 'time',
      sexList: ['男', '女'],
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
    },
    // 图片预览
    watchPic () {
      ImagePreview([
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ])
    }
  },
  mounted () {
    // alert(this.$route)
    // this.$store.commit('changeTitle', this.$route.params.title)
  }
}
</script>

<style lang="stylus" scoped>
.creditDetail >>> .van-picker-column
  font-size: 16px
.formCell >>> .J-input
  padding 0
  text-align right
  .aSelect
    background none
    padding 0
  input
    text-align right
    width 100%
    padding 0
.creditDetail
  // height 100vh
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
      .warning
        color red
        position absolute
        left 96px
  .btn
    text-align center
    padding-top 18px
    button
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
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
    height 121px
    .form-label
      line-height 30px
    .main
      color: #999999;
      width 100%
      height 100px
      word-wrap break-word
      line-height 18px
.content >>> .J-input
      width 200px
      border: 1px solid #2873FF;
      border-radius: 4px;
      height 26px
      margin-bottom 10px
      .aSelect
        input
          text-align left!important
          padding 0 10px
</style>
