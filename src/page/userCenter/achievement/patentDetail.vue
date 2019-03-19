<template>
  <div class="patentDetail">
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
        <p class="form-label">专利名称:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">专利分类:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">发明人:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人姓名:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">备注:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">发明专利请求书:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">摘要:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">说明书:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">权利要求书:</p>
        <p class="j-input"></p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitlt from '@/components/title/title'
export default {
  name: 'PatentDetail',
  components: {
    CTitlt
  }
}
</script>

<style lang="stylus" scoped>
.patentDetail
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
