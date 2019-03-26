<template>
  <div class="examineAndVerify">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">项目来源:</p>
        <p class="form-msg">系统项目</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目信息:</p>
        <p class="form-msg">项目年份-项目名称-项目类别</p>
      </div>
      <div class="formCell">
        <p class="form-label">知识产权:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">所属专业:</p>
        <p class="form-msg">二级学科：皮肤专业</p>
      </div>
      <div class="formCell">
        <p class="form-label">获奖情况:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">技术水平:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">单位信息:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">合作方式:</p>
        <p class="form-msg">合作方式</p>
      </div>
      <div class="formCell">
        <p class="form-label">转化结果:</p>
        <p class="form-msg">农业、生物新品种</p>
      </div>
      <div class="formCell">
        <p class="form-label">转化时间:</p>
        <p class="form-msg">2018.09.01 12:00:00 - 2019.09.01 12:00:00</p>
      </div>
      <div class="formCell">
        <p class="form-label">转化申请表:</p>
        <p class="form-msg">无</p>
      </div>
      <div class="formCell">
        <p class="form-label">转化合同:</p>
        <p class="form-msg">无</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
export default {
  name: 'ExamineAndVerify',
  data () {
    return {
    }
  },
  components: {
    CTitle,
    JInput
  }
}
</script>

<style lang="stylus" scoped>
.examineAndVerify
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
</style>
