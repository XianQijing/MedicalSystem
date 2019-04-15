<template>
  <div class="PrintingDetail">
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
        <p class="form-label">专利名称:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">专利申请费:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">专利奖励费:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">专利维护费:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">经费来源:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintingDetail',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.PrintingDetail
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
