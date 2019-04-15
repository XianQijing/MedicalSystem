// 登记状态查询详情
<template>
  <div class="RegistrationStatusDetail">
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
        <p class="form-label">著作名称:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">出版年月:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">ISBN号:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">出版社:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">角色:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">印数:</p>
        <p class="form-msg">合作方式</p>
      </div>
      <div class="formCell">
        <p class="form-label">字数:</p>
        <p class="form-msg">农业、生物新品种</p>
      </div>
      <div class="formCell">
        <p class="form-label">定价:</p>
        <p class="form-msg">2019.09.01 12:00:00</p>
      </div>
      <div class="formCell">
        <p class="form-label">参编:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">合作单位:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">著作封面:</p>
        <p class="form-msg" style="color: #2873FF">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">著作版权页:</p>
        <p class="form-msg" style="color: #2873FF">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationStatusDetail'
}
</script>

<style lang="stylus" scoped>
.RegistrationStatusDetail
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
