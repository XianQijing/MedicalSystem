<template>
  <div class="achievementDetail">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">姓名:</p>
        <p class="j-input">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">所属科室:</p>
        <p class="j-input">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果名称:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人信息:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人单位:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证机关:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">成果获得日期:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证日期:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">登记号:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">成功登记证书:</p>
        <p class="j-input"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementDetail'
}
</script>

<style lang="stylus" scoped>
.achievementDetail
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
      .j-input
        width 50%
        padding 0
        max-width 181px
        text-align right
        font-size: 14px;
        color: #999999;
</style>
