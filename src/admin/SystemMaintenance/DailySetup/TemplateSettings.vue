<template>
  <div class="TemplateSettings">
    <CTitle>类别列表</CTitle>
    <div class="formCell">
      <p>会议总结模板:</p>
      <div>
        <span>文件名</span>
        <span class="blue">上传</span>
      </div>
    </div>
    <div class="formCell">
      <p>会议总结模板:</p>
      <div>
        <span>文件名</span>
        <span class="blue">上传</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemplateSettings'
}
</script>

<style lang="stylus" scoped>
.TemplateSettings
  .comTitle
    margin 0
  .formCell
    margin-bottom 2px
    background white
    padding 0 10px
    font-size .14rem
    height .3rem
    align-items center
    .blue
      color: #2873ff
      margin-left 10px
</style>
