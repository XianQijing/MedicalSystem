<template>
  <div class="changePassword">
    <c-title>密码修改</c-title>
    <div class="form">
      <div class="formCell">
        <p class="form-label">登录账号:</p>
        <j-input placeholder="ABC1234"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">旧密码:</p>
        <j-input placeholder="ABC1234"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">新密码:</p>
        <j-input placeholder="ABC1234"></j-input>
      </div>
      <div class="formCell">
        <p class="form-label">确认密码:</p>
        <j-input placeholder="ABC1234"></j-input>
      </div>
    </div>

    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete" @click="test">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data () {
    return {
      warning: false
    }
  },
  methods: {
    test () {
      this.$Dialog({
        message: '修改成功!',
        title: '提示',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.changePassword >>> .J-input
  padding 0
  text-align right
  .aSelect
    background none
    padding 0
  input
    text-align right
    width 100%
    padding 0
.changePassword
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
  .button-cell
    margin-top 10px
</style>
