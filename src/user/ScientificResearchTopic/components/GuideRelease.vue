// 课题计划指南
<template>
  <div class="GuideRelease">
    <CTitle>指南信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">指南名称:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">发布单位:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">发布日期:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">计划指南:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">相关附件：</p>
        <p class="blue J-input">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'GuideRelease',
  components: {
    CTitle
  }
}
</script>

<style lang="stylus" scoped>
.GuideRelease
  .comTitle
    margin 0
  .form
    font-size:14px;
    .formCell
      padding 0 10px
      background white
      margin-bottom 2px
      align-items center
      height 30px
      .J-input
        color #999999
      .blue
        color #2873FF
</style>
