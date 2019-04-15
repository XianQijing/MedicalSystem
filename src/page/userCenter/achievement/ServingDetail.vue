<template>
  <div class="writingsDetail">
    <CTitlt>基本信息</CTitlt>
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
        <p class="form-label">专业委员会:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">届期:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">职务:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">聘任时间:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">任期:</p>
        <p class="j-input"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServingDetail'
}
</script>

<style lang="stylus" scoped>
.writingsDetail
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
