// 状态查询--详情
<template>
  <div class="ContractSearch">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">合同编号:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目编号:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">起始年月:</p>
        <p class="form-msg">e</p>
      </div>
      <div class="formCell">
        <p class="form-label">终止年月:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目类别:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">合同类型:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">付款方式:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">课题编号:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">总金额（万元）:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">受托单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">委托单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目负责人:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">原档文件:</p>
        <p class="form-msg blue">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'ContractSearch',
  components: {
    CTitle
  }
}
</script>

<style lang="stylus" scoped>
.ContractSearch
  .form
    margin 0 6px
    .formCell
      padding 0 10px
      height 30px
      background white
      margin-bottom 2px
      align-items center
      .form-label
        font-size: 14px;
        color: #333333;
      .form-msg
        font-size: 14px;
        color: #999999;
      .blue
        color #2873FF
    .form-Cell
      padding 0 10px
      background white
      font-size 14px
      height 90px
      .form-label
        line-height 30px
      .main
        color: #999999;
        width 100%
        height 50px
        word-wrap break-word
        line-height 18px
</style>
