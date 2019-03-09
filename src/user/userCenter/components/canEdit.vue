<template>
  <div class="canEdit">
    <c-title>基本信息</c-title>
    <base-message/>
    <c-title>
      可修改信息
      <div slot="float">{{page}}/2</div>
    </c-title>
    <div class="formWapper">
      <div v-show="whichPage">
        <p class="personal">个人信息</p>
        <div class="doctor">
          <span>学历：硕士研究生</span>
          <span>学位：学士</span>
        </div>
        <div class="form">
          <div class="cell border-1px">
            <span class="label">身份证号:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">出生年月:</span>
            <j-input type="select" placeholder="下拉选择"/>
          </div>
          <div class="cell border-1px">
            <span class="label">性别:</span>
            <div class="radio">
              <van-radio v-model="radio" name="男">
                <img :src="radio==='男' ? icon.active : icon.normal" width=14>
                男
              </van-radio>
              <van-radio v-model="radio" name="女">
                <img :src="radio==='女' ? icon.active : icon.normal" width=14>
                女
              </van-radio>
            </div>
          </div>
          <div class="cell border-1px">
            <span class="label">民族:</span>
            <j-input type="select" placeholder="下拉选择"/>
          </div>
          <div class="cell border-1px">
            <span class="label">手机号:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">邮箱:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">毕业院校:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">专业:</span>
            <j-input type="select" placeholder="下拉选择"/>
          </div>
        </div>
      </div>

      <div v-show="!whichPage">
        <p class="personal">职业信息</p>
        <div class="form">
          <div class="cell border-1px">
            <span class="label">工号:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">IC卡号:</span>
            <j-input type="select" placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">人员编号:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">医生资格证号:</span>
            <j-input type="select" placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">职业医生注册号:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">职务:</span>
            <j-input placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">职业类别:</span>
            <j-input placeholder="下拉选择"/>
          </div>
          <div class="cell border-1px">
            <span class="label">工作年限:</span>
            <j-input type="select" placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">博导:</span>
            <div class="radio">
              <van-radio v-model="checked" name="硕导">
                <img :src="checked=='硕导' ? icon.active : icon.normal" width=14>
                硕导
              </van-radio>
              <van-radio v-model="checked" name="博导">
                <img :src="checked=='博导' ? icon.active : icon.normal" width=14>
                博导
              </van-radio>
              <van-radio v-model="checked" name="否">
                <img :src="checked=='否' ? icon.active : icon.normal" width=14>
                否
              </van-radio>
            </div>
          </div>
          <div class="cell border-1px">
            <span class="label">政治面貌:</span>
            <j-input type="select" placeholder="填写内容"/>
          </div>
          <div class="cell border-1px">
            <span class="label">社会任职:</span>
            <j-input type="select" placeholder="下拉选择"/>
          </div>
        </div>
      </div>
    </div>
    <div class="btn" v-show="whichPage">
      <button @click="next" class="next">下一项</button>
    </div>
    <div class="btn ba" v-show="!whichPage">
      <button @click="next" class="back" >上一项</button>
    </div>
    <div class="tabBar" v-show="!whichPage">
      <button class="reset">重置</button>
      <button class="submit">确认提交</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import BaseMessage from './baseMessage'
export default {
  name: 'CanEdit',
  data () {
    return {
      whichPage: true,
      radio: '男',
      checked: '否',
      test: '',
      icon: {
        normal: require('./image/normal.png'),
        active: require('./image/active.png')
      }
    }
  },
  computed: {
    page () {
      if (this.whichPage === true) {
        return 1
      } else {
        return 2
      }
    }
  },
  methods: {
    next () {
      this.whichPage = !this.whichPage
    }
  },
  components: {
    BaseMessage,
    CTitle,
    JInput
  },
  watch: {
    radio (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.canEdit >>> .float
  font-size: 13px;
  color: #555555;
.canEdit >>> .van-radio__input
  display none
.canEdit
  .formWapper
    margin 0 6px
    padding 15px 10px
    background white
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    .personal
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .form
      .cell
        width 100%
        padding-left 10px
        display flex
        justify-content space-between
        border-1px(#D3D3D3)
        align-items center
        color red
        padding 10px 0
        &:last-child
          border-none()
        .J-input
          width 160px
          height 30px
          border 1px solid #FD4D4D
          border-radius: 6px
        span
          padding-left 10px
  .btn
    width 100%
    text-align center
    padding 15px 0
    &.ba
      padding-bottom 40px
    .next, .back
      border-radius: 6px;
      width 100px
      height 30px
      font-size: 14px;
    .next
      color white
      background: #2873FF;
    .back
      background: #C6DAFF;
      color #2873FF;
  .tabBar
    width 100%
    display flex
    height 30px
    position fixed
    bottom 0
    .reset
      text-align center
      flex 1
      background: #EBF6FF;
      font-size: 14px;
      color: #2873FF;
    .submit
      flex 1
      background: #2873FF;
      font-size: 14px;
      color: #FFFFFF;
      text-align center
.doctor
  font-size: 12px;
  color: #555555;
  display flex
  justify-content space-between
  margin-bottom 5px
.radio
  color black
  display flex
  justify-content space-between
  width 183px
</style>
