<template>
  <div class="MsgDetail">
    <CTitle>修改信息</CTitle>
    <div class="formCell">
      <p class="form-label">登录账号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">真实姓名:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">性别:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">出生年月:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">学历:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">学位:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">学科:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">职称:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">职称级别:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">手机号码:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">邮箱:</p>
      <JInput></JInput>
    </div>
    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsgDetail'
}
</script>

<style lang="stylus" scoped>
.MsgDetail >>> .J-input
  padding 0
  .aSelect
    padding 0
    background none
  input
    text-align right
.MsgDetail
  margin 0 .06rem
  padding-bottom .3rem
  .comTitle
    margin 0
  .formCell
    background white
    font-size .14rem
    padding 0 .10rem
    height .3rem
    align-items center
    margin 0 0 .02rem 0
    .upload
      color #2873FF
      position relative
      input
        position absolute
        width 100%
        height 100%
        right 0
        opacity 0
        z-index 3
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
