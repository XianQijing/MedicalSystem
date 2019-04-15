// 介绍信查询及打印--详情
<template>
  <div class="IntroductoryLetterDetail">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">刊物:</p>
        <p class="form-msg">系统项目</p>
      </div>
      <div class="formCell">
        <p class="form-label">论文题目:</p>
        <p class="form-msg">项目年份-项目名称-项目类别</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目基金名称:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">文件:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">作者信息:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目基金类别:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">资料是否真实:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">有无抄袭之嫌:</p>
        <p class="form-msg">合作方式</p>
      </div>
      <div class="formCell">
        <p class="form-label">是否一稿多投:</p>
        <p class="form-msg">农业、生物新品种</p>
      </div>
      <div class="formCell">
        <p class="form-label">存在其他问题:</p>
        <p class="form-msg"></p>
      </div>
      <div class="form-Cell">
        <p class="form-label">摘要:</p>
        <p class="form-msg">无</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductoryLetterDetail',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.IntroductoryLetterDetail
  .form
    margin 0 6px
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
        color: #999999
    .form-Cell
      padding 7px 10px
      background white
      .form-label
        font-size: 14px;
        color: #333333;
        margin-bottom 10px
      .form-msg
        font-size: 14px;
        color: #999999
        height 40px
        overflow auto
</style>
