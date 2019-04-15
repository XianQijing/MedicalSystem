// 项目信息
<template>
  <div class="projectMessage">
    <div class="form-cell">
      <p class="label">项目名称：</p>
        <j-input placeholder="项目名称"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">项目类别：</p>
        <j-input placeholder="项目类别"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">关键词：</p>
        <j-input placeholder="关键词"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">研究类型：</p>
        <j-input placeholder="研究类型"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">项目所在科室：</p>
        <j-input placeholder="项目所在科室"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">其他相关学科：</p>
        <j-input placeholder="其他相关学科"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">项目所属学科：</p>
        <j-input placeholder="项目所属学科"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">项目开始时间：</p>
        <j-input placeholder="项目开始时间"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">项目结束时间：</p>
        <j-input placeholder="项目结束时间"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">项目内容摘要：</p>
        <j-input placeholder="项目内容摘要"></j-input>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectMessage'
}
</script>

<style lang="stylus" scoped>
.projectMessage >>> .J-input
  input
    text-align right
    font-size 14px
.projectMessage
  margin-top 5px
  .form-cell
    background white
    height 30px
    display flex
    align-items center
    justify-content space-between
    padding 0 10px
    margin-bottom 2px
    font-size: 14px;
    color: #333333;
    box-sizing border-box
    font-size 14px
    .J-input
      width 50%
      padding 0
      max-width 181px
      font-size: 14px;
      color: #333333;
      font-weight 700
      height 100%
</style>
