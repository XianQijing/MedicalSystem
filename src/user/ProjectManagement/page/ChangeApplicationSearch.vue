// 状态查询--详情
<template>
  <div class="ChangeApplicationSearch">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">项目名称:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目类别:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">变更后项目名称:</p>
        <p class="form-msg">e</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目计划:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目编号:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目负责人:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目管理单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">批准立项时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目原完成时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">变更项目负责人:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目延期时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">修改后项目标书:</p>
        <p class="form-msg blue">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">变更组员:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">变更内容:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">变更事由:</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'ChangeApplicationSearch',
  components: {
    CTitle
  }
}
</script>

<style lang="stylus" scoped>
.ChangeApplicationSearch
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
