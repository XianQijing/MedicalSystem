<template>
  <div class="editPersonalMessage">
    <c-title>基本信息</c-title>
    <div class="form">
      <div class="formCell">
        <p class="form-label">登录账号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">真实姓名：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">性别：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">出生年月：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">单位名称：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">民族：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">单位电话：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">单位邮编：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">所属科室：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">学历：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">专业：</p>
        <j-input></j-input>
      </div>
    </div>
    <div class="btn">
      <button>展开更多</button>
    </div>
    <c-title>密码修改</c-title>
    <div class="form last">
      <div class="formCell">
        <p class="form-label">登录账号：</p>
        <j-input></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">新密码：</p>
        <j-input v-model="newPassword"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">确认密码：</p>
        <span class="warning" v-show="warning">密码不一致</span>
        <j-input v-model="confirmPassword"></j-input>
      </div>
    </div>
    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">保存</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
export default {
  name: 'EditPersonalMessage',
  data () {
    return {
      newPassword: '',
      confirmPassword: ''
    }
  },
  components: {
    CTitle,
    JInput
  },
  computed: {
    warning () {
      if (this.newPassword !== this.confirmPassword) {
        return true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.editPersonalMessage >>> .J-input
  padding 0
  text-align right
  input
    text-align right
    width 100%
    padding 0
.editPersonalMessage
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
  .button-cell
    position fixed
    bottom 0
    left 0
  .last
    padding-bottom 40px
</style>
