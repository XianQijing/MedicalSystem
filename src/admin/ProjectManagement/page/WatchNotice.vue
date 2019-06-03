// 通知管理--详情
<template>
  <div class="ChangeApplicationSearch">
    <CTitle>通知详情</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">通知标题:</p>
        <p class="form-msg">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">发布单位:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">发布日期:</p>
        <p class="form-msg">e</p>
      </div>
      <div class="formCell">
        <p class="form-label">通知内容:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">附件内容:</p>
        <p class="form-msg blue">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContractSearch',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.ChangeApplicationSearch
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
        color: #999999;
      .blue
        color #2873FF
    .form-Cell
      padding 0 10px
      background white
      font-size 14px
      height 90px
      .form-label
        line-height 30px
      .main
        color: #999999;
        width 100%
        height 50px
        word-wrap break-word
        line-height 18px
</style>
