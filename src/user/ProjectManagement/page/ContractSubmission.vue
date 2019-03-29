<template>
  <div class="ContractSubmission">
    <CTitle>合同基本信息</CTitle>
    <div class="form">
      <div class="two">
        <p>项目负责人占位</p>
        <p class="float">课题编号：398492</p>
      </div>
      <p class="black">项目名称-项目类别</p>
      <span>总金额（万元）：283722</span>
      <div class="formCell border-1pxTop">
        <p class="form-label">合同编号:</p>
        <JInput></JInput>
      </div>
      <div class="formCell border-1pxTop">
        <p class="form-label">项目编号:</p>
        <JInput></JInput>
      </div>
      <div class="formCell border-1pxTop">
        <p class="form-label">时间范围:</p>
        <JInput type="select"></JInput>
      </div>
      <div class="formCell border-1pxTop">
        <p class="form-label">合同类型:</p>
        <JInput type="select"></JInput>
      </div>
      <div class="formCell border-1pxTop">
        <p class="form-label">付款方式:</p>
        <JInput type="select"></JInput>
      </div>
      <div class="formCell border-1pxTop">
        <p class="form-label">受托单位:</p>
        <JInput></JInput>
      </div>
      <div class="formCell border-1pxTop">
        <p class="form-label">委托单位:</p>
        <JInput></JInput>
      </div>
      <div class="form-Cell border-1pxTop">
        <p class="form-label">原档文件:</p>
        <Upload/>
      </div>
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
import Upload from '@/components/upload/upload'
export default {
  name: 'ContractSubmission',
  components: {
    CTitle,
    JInput,
    Upload
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ContractSubmission
  min-height 100%
  position relative
  .form
    margin 0 6px
    background white
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding 10px 10px 0 10px
    align-items center
    p
      font-size: 16px;
      font-weight: 400;
    .black
      margin-bottom 12px
    span
      color: #333333;
      font-size: 14px;
      font-weight: 400;
      display block
      margin-bottom 12px
    .two
      display flex
      justify-content space-between
      .float
        float right
        margin-bottom 12px
        font-size: 14px;
    .formCell
      height 40px
    .formCell, .form-Cell
      padding-left 10px
      align-items center
      &.border-1pxTop
        border-1pxTop(#d3d3d3)
      .form-label
        color: #fd4d4d;
        font-size: 16px;
        font-weight: 400;
        line-height 40px
      .J-input
        width: 30%;
        height: 30px;
        border: 1px solid #fd4d4d;
        border-radius: 6px;
      .upload
        padding-bottom 10px
  .button-cell
    position absolute
    bottom 0
</style>
