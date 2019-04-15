<template>
  <div class="DailySetting">
    <CTitle>添加信息</CTitle>
    <div class="formCell">
      <p class="form-label">登录账号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">登录密码:</p>
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
      <p class="form-label">单位名称:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">民族:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">单位电话:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">单位地址:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">单位邮编:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">所属科室:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">学历:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">专业:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">毕业院校:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">职务:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">职称:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">手机:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">邮箱:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">工作年限:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">导师否:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">政治面貌:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">社会任职：:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">工号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">IC卡号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">人员编号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">身份证号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">医师资格证号:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">执业医师注册证号:</p>
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
  name: 'DailySetting'
}
</script>

<style lang="stylus" scoped>
.DailySetting >>> .J-input
  padding 0
  .aSelect
    padding 0
    background none
  input
    text-align right
.DailySetting
  padding-bottom 40px
  margin 0 6px
  .comTitle
    margin 0
  .formCell
    background white
    font-size 14px
    padding 0 10px
    height 30px
    align-items center
    margin 0 0 2px 0
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
