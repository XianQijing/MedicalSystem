<template>
  <div class="ApplicationTypeDetail">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">姓名:</p>
        <p class="form-msg">系统项目</p>
      </div>
      <div class="formCell">
        <p class="form-label">所属科室:</p>
        <p class="form-msg">项目年份-项目名称-项目类别</p>
      </div>
      <div class="formCell">
        <p class="form-label">专利名称:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">专利分类:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">发明人:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人姓名:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">发明专利请求书:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">摘要:</p>
        <p class="form-msg">合作方式</p>
      </div>
      <div class="formCell">
        <p class="form-label">说明书:</p>
        <p class="form-msg">农业、生物新品种</p>
      </div>
      <div class="formCell">
        <p class="form-label">权利要求书:</p>
        <p class="form-msg">2018.09.01 12:00:00 - 2019.09.01 12:00:00</p>
      </div>
      <div class="formCell">
        <p class="form-label">摘要:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">说明书:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">权利要求书:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="form-Cell">
        <p class="form-label">备注:</p>
        <p class="form-msg">无</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationTypeDetail',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.ApplicationTypeDetail
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
        color: #999999
    .form-Cell
      padding 7px 10px
      background white
      .form-label
        font-size: 14px;
        color: #333333;
        margin-bottom 10px
      .form-msg
        font-size: 14px;
        color: #999999
        height 40px
        overflow auto
</style>
