<template>
  <div class="OfficeMeetingDetail">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">会议名称:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">主办单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">上传文件:</p>
        <p class="form-msg" style="color:#2873FF">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议级别:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议地点:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议日期:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">离院日期:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">返院日期:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议天数:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">会议经费:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">科室意见:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="form-Cell">
        <p class="form-label">主要内容:</p>
        <P class="main"></P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficeMeetingDetail'
}
</script>

<style lang="stylus" scoped>
.OfficeMeetingDetail
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
