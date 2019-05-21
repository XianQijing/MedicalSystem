// 评审通知列表--查看详情
<template>
  <div class="watchDetail">
    <CTitle>详细信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">初评通知标题:</p>
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
        <p class="form-label">会议初评通知:</p>
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
export default {
  name: 'watchDetail'
}
</script>

<style lang="stylus" scoped>
.watchDetail
  margin 0 .06rem
  .form
    font-size:.14rem;
    .formCell
      padding 0 .10rem
      background white
      margin-bottom .02rem
      align-items center
      height .30rem
      .J-input
        color #999999
      .blue
        color #2873FF
</style>
