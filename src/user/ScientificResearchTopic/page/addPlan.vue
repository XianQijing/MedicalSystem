<template>
  <div class="AddPlan">
    <CTitle>项目计划设置</CTitle>
    <div class="formCell">
      <p class="form-label">项目类别:</p>
      <JInput type="select"></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">项目计划:</p>
      <JInput type="select"></JInput>
    </div>
    <CTitle>申报时间设置</CTitle>
    <div class="formCell">
      <p class="form-label">申报起始时间:</p>
      <JInput type="select"></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">申报截止时间:</p>
      <JInput type="select"></JInput>
    </div>
    <CTitle>联系方式设置</CTitle>
    <div class="formCell">
      <p class="form-label">联系人:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">联系办公室:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">联系电话:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">电子邮箱:</p>
      <JInput></JInput>
    </div>
    <CTitle>上传标书模版、专家评分标准</CTitle>
    <div class="formCell">
      <p class="form-label">专家评分标准:</p>
      <div class="upload">
        <input type="file">
        <p>上传</p>
      </div>
    </div>
    <div class="formCell">
      <p class="form-label">标书模版:</p>
      <div class="upload">
        <input type="file">
        <p>继续上传</p>
      </div>
    </div>
    <CTitle>发布单位设置</CTitle>
    <div class="formCell">
      <p class="form-label">项目主管单位:</p>
      <JInput></JInput>
    </div>
    <div class="formCell">
      <p class="form-label">发布日期:</p>
      <JInput></JInput>
    </div>
    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
export default {
  name: 'AddPlan',
  components: {
    CTitle,
    JInput
  }
}
</script>

<style lang="stylus" scoped>
.AddPlan >>> .J-input
  padding 0
  .aSelect
    padding 0
    background none
  input
    text-align right
.AddPlan
  min-height 100%
  position relative
  padding-bottom 60px
  box-sizing border-box
  .formCell
    background white
    font-size 14px
    padding 0 10px
    height 30px
    align-items center
    margin 0 6px 2px 6px
    .upload
      color #2873FF
      position relative
      input
        position absolute
        width 100%
        height 100%
        right 0
        opacity 0
        z-index 3
  .button-cell
    position absolute
    bottom 0
</style>
