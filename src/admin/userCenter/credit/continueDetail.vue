<template>
  <div class="continueDetail">
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
        <p class="form-label">出生年月：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">学历：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">职称：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">工作年限：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">人员编号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">IC卡号：</p>
        <j-input></j-input>
      </div>
    </div>
    <c-title>学分获取</c-title>
    <card
      aType="通过"
      :nowType="false"
    >
      <p slot="time" style="height:100%">2018.04.12 14:56</p>
      <p class="black">项目名称</p>
      <div class="two">
        <span>分值：12</span>
        <span>学分属性：区内学分</span>
      </div>
      <div class="two">
        <span>累计学分：120</span>
        <span>学分类别：I类学分</span>
      </div>
    </card>

    <popup :toShow="towCell" position="bottom" @close="close">
      <div class="pop-btn">
        <button @click="close">取消</button>
        <button @click="onConfirm(open)">完成</button>
      </div>
      <van-picker :item-height=30 ref="Sex" :columns="List" v-show="open === 'sex'" @change="selectSex" />
    </popup>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import Popup from '@/components/popup/popup'
import Card from '@/components/card/card'

export default {
  name: 'ContinueDetail',
  data () {
    return {
      age: '',
      sex: '',
      towCell: false, // 学科选择
      open: 'time',
      List: []
    }
  },
  components: {
    CTitle,
    JInput,
    Popup,
    Card
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.continueDetail >>> .van-picker-column
  font-size: 16px
.continueDetail >>> .J-input
  padding 0
  text-align right
  .aSelect
    background none
    padding 0
  input
    text-align right
    width 100%
    padding 0
.continueDetail
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
.card
  margin-right 6px
  margin-left 10px
</style>
