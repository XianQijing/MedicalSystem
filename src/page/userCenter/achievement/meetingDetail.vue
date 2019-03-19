<template>
  <div class="meetingDetail">
    <CTitlt>基本信息</CTitlt>
    <div class="form">
      <div class="formCell">
        <p class="form-label">会议名称:</p>
        <p class="j-input">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">主办单位:</p>
        <p class="j-input">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">论文题目:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">会议类型:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">会议地点:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">会议日期:</p>
        <p class="j-input"></p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitlt from '@/components/title/title'
export default {
  name: 'MeetingDetail',
  components: {
    CTitlt
  }
}
</script>

<style lang="stylus" scoped>
.meetingDetail
  .form
    margin 0 6px
    .formCell
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
      .j-input
        width 50%
        padding 0
        max-width 181px
        text-align right
        font-size: 14px;
        color: #999999;
</style>
