// 指南发布
<template>
  <div class="GuideRelease">
    <CTitle>文件信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">项目类别:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">项目计划:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">发布单位:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">项目名称:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">项目负责人:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">相关附件：</p>
        <div class="upload">
          上传
          <input type="file">
        </div>
      </div>
    </div>
    <div class="button-cell">
      <button class="reset">重填</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideRelease'
}
</script>

<style lang="stylus" scoped>
.GuideRelease >>> .J-input
  padding 0
  input
    text-align right
.GuideRelease
  .form
    margin 0 6px
    font-size:14px;
    .formCell, .form-Cell
      padding 0 10px
      background white
      margin-bottom 2px
      align-items center
    .form-Cell
      line-height 30px
      textarea
        height 155px
        width 100%
    .formCell
      height 30px
      .upload
        position relative
        font-size:14px;
        color #2873FF
        width 2em
        input
          position absolute
          width 2em
          top 0
          height 14px
          z-index 3
          opacity 0
  .button-cell
    position fixed
    bottom 0
</style>
