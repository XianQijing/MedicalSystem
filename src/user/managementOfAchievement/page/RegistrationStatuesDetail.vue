<template>
  <div class="RegistrationStatuesDetail">
    <CTitle>专利信息</CTitle>
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
        <p class="form-label">成果名称:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人信息:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人单位:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">颁证机关:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果获得日期:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">登记号:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果登记证书:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationStatuesDetail'
}
</script>

<style lang="stylus" scoped>
.RegistrationStatuesDetail
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
        color: #999999
</style>
