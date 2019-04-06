// 通知列表--查看详情
<template>
  <div class="TopicListDetail">
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
import CTitle from '@/components/title/title'
export default {
  name: 'TopicListDetail',
  components: {
    CTitle
  }
}
</script>

<style lang="stylus" scoped>
.TopicListDetail
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
