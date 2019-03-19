<template>
  <div class="paperDetail">
    <CTitlt>基本信息</CTitlt>
    <div class="form">
      <div class="formCell">
        <p class="form-label">刊物名称:</p>
        <p class="j-input">项目名称1</p>
      </div>
      <div class="formCell">
        <p class="form-label">作者姓名:</p>
        <p class="j-input">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">作者属性:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">论文题目:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">基金名称:</p>
        <p class="j-input"></p>
      </div>
      <div class="form-Cell">
        <p class="form-label">主要内容:</p>
        <p class="content">主要内容</p>
      </div>
    </div>
    <CTitlt>科室审查意见</CTitlt>
    <div class="form">
      <div class="formCell">
        <p class="form-label">资料是否真实:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">有无抄袭之嫌:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">是否一稿多投:</p>
        <p class="j-input"></p>
      </div>
      <div class="formCell">
        <p class="form-label">存在其他问题:</p>
        <p class="j-input"></p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitlt from '@/components/title/title'
export default {
  name: 'PaperDetail',
  components: {
    CTitlt
  }
}
</script>

<style lang="stylus" scoped>
.paperDetail
  .form
    margin 0 6px
    .form-Cell
      background white
      padding 7px 10px
      font-size: 14px;
      .content
        font-size: 14px;
        margin-top 10px
        color: #999999;
        height 77px
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
