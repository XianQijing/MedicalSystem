// 实验申请--状态查询及打印--详情
<template>
  <div class="ExperimentalPritingDetail">
    <CTitle>使用信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">实验名称:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">支付费用:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">课题名称:</p>
        <p class="form-msg">e</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目经费:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">使用时间:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">实验内容:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">实验流程:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="form-Cell">
        <p class="form-label">实验计划（进度安排）:</p>
        <p class="main">测试课题1</p>
      </div>
    </div>
    <CTitle>参与人员</CTitle>
    <div class="white">
      <p class="no">NO：01</p>
      <p class="black">姓名-科室</p>
      <p>职称占位、实验分工占位</p>
    </div>
    <div class="white">
      <p class="no">NO：01</p>
      <p class="black">姓名-科室</p>
      <p>职称占位、实验分工占位</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperimentalPritingDetail'
}
</script>

<style lang="stylus" scoped>
.ExperimentalPritingDetail
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
  .white
    padding 0 10px 15px 10px
    background white
    margin 0 6px
    margin-bottom 10px
    p
      padding-top 10px
      font-size: 14px;
      color: #333333;
    .no
      font-size: 12px;
      color: #555555;
</style>
