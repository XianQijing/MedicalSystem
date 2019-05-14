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
      <button class="butto" @click="pass">审核</button>
    </div>

    <popup :toShow="towCell" position="bottom" @close="close">
      <div class="pop-btn">
        <button @click="close">取消</button>
        <button @click="onConfirm(open)">完成</button>
      </div>
      <van-picker :item-height=30 ref="Sex" :columns="sexList" v-show="open === 'sex'" @change="selectSex" />
    </popup>

    <popup position="warning" :toShow="tanChuang" @close="pass">
      <span slot="title">项目审核</span>
      <div class="content">
        <div class="formCell">
          <p class="form-label">评审意见</p>
          <textarea placeholder="填写意见"></textarea>
        </div>
        <div class="formCell">
          <p class="form-label">评审结果</p>
          <j-input @click="openPassed" placeholder="通过" type="select" v-model="sex"></j-input>
        </div>
      </div>
      <popup :overlay="false" :toShow="passed" position="bottom" @close="openPassed">
        <van-picker
          :item-height=30
          ref="Sex"
          :columns="sexList"
          v-show="open === 'sex'"
          @change="selectSex" />
      </popup>
      <div class="button-cell">
        <button class="complete" @click="pass">取消</button>
        <button class="reset">确认</button>
      </div>
    </popup>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
import Popup from '@/components/popup/popup'
import { ImagePreview } from 'vant'

export default {
  name: 'CreditDetail',
  data () {
    return {
      age: '',
      sex: '',
      towCell: false, // 学科选择
      tanChuang: false, // 审核,
      passed: false, // 是否通过选择器
      open: 'time',
      sexList: ['男', '女']
    }
  },
  components: {
    JInput,
    Popup
  },
  methods: {
    // 性别选择
    selectSex (picker, value) {
      this.sex = value
    },
    close (type) {
      this.towCell = !this.towCell
      this.open = type
    },
    onConfirm (open) {
      if (open === 'sex') {
        this.sex = this.$refs.Sex.getValues(1)
      }
      this.towCell = false
    },
    // 审核通过弹窗按钮
    pass () {
      this.tanChuang = !this.tanChuang
    },
    // 审核结果按钮
    openPassed () {
      this.passed = !this.passed
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
    this.$store.commit('changeTitle', this.$route.params.name)
  }
}
</script>

<style lang="stylus" scoped>
.creditDetail >>> .van-picker-column
  font-size: 16px
.creditDetail >>> .J-input
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
  .last
    padding-bottom 40px
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
.content
  margin 0 15px
  .formCell
    margin-top 10px
    font-size: 14px;
    p
      line-height 16px
    textarea
      border: 1px solid #2873FF;
      border-radius: 4px;
      width 200px
      height 95px
      padding 0 10px
      box-sizing border-box
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
