// 出国交流--状态查询及打印--详情
<template>
  <div class="GoAbroadPritingDetail">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">学术会议名称:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">名称英文:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议地点:</p>
        <p class="form-msg">e</p>
      </div>
      <div class="formCell">
        <p class="form-label">年内出国次数:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">离院时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">返院时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">参会论文题目:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">题目英文:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">出国培训名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">名称英文:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">组织单位名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">经费来源证明:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">经费资助方名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">论文报告形式:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">出国学习、培训、交流计划</p>
        <p class="form-msg blue">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoAbroadPritingDetail'
}
</script>

<style lang="stylus" scoped>
.GoAbroadPritingDetail
  margin 0 6px
  .form
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
