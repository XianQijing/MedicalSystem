// 版面费打印、论文列表--详情
<template>
  <div class="CostApplicationDetail">
    <CTitle>申请信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">论文题目:</p>
        <p class="form-msg">系统项目</p>
      </div>
      <div class="formCell">
        <p class="form-label">发表年月:</p>
        <p class="form-msg">项目年份-项目名称-项目类别</p>
      </div>
      <div class="formCell">
        <p class="form-label">卷期:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">起讫页:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">ISSN或SN号:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">SCI收录影响因子:</p>
        <p class="form-msg" style="color: black;font-weight: 700">影响因子</p>
      </div>
      <div class="formCell">
        <p class="form-label">报销金额:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">发表论文:</p>
        <p class="form-msg" style="color: #2873FF">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">上传发票:</p>
        <p class="form-msg" style="color: #2873FF">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">经费来源:</p>
        <p class="form-msg"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CostApplicationDetail',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.CostApplicationDetail
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
