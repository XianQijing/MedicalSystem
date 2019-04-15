<template>
  <div class="OfficeServingDetail">
    <CTitle>详情信息</CTitle>
    <div class="form">
      <div class="formCell">
          <p class="form-label">姓名：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">所属科室：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">任职类型：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">届期：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">级别：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">职务：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">聘任时间：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">任期：</p>
          <p class="form-msg">项目年份-项目名称-项目类别</p>
        </div>
        <div class="formCell">
          <p class="form-label">聘书扫描件：</p>
          <span style="color:#2873FF">预览</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficeServingDetail'
}
</script>

<style lang="stylus" scoped>
.OfficeServingDetail
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
</style>
