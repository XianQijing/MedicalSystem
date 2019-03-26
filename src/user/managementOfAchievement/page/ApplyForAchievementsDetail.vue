// 成果申报详情
<template>
  <div class="ApplyForAchievementsDetail">
    <CTitle>基本信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">姓名:</p>
        <p class="form-msg">系统项目</p>
      </div>
      <div class="formCell">
        <p class="form-label">所属科室:</p>
        <p class="form-msg">项目年份-项目名称-项目类别</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果名称:</p>
        <p class="form-msg">发明专利</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果登记表:</p>
        <p class="form-msg" style="color:#2873FF">预览</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人信息:</p>
        <p class="form-msg">国家级</p>
      </div>
      <div class="formCell">
        <p class="form-label">完成人单位:</p>
        <p class="form-msg">省市内先进</p>
      </div>
      <div class="formCell">
        <p class="form-label">相关技术评价证明:</p>
        <p class="form-msg">合作单位-单位性质</p>
      </div>
      <div class="formCell">
        <p class="form-label">应用技术成果:</p>
        <p class="form-msg">合作方式</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果鉴定表:</p>
        <p class="form-msg">农业、生物新品种</p>
      </div>
      <div class="formCell">
        <p class="form-label">成果鉴定书:</p>
        <p class="form-msg">d</p>
      </div>
      <div class="form-Cell">
        <p class="form-label">备注:</p>
        <p class="form-msg">无</p>
      </div>
    </div>
    <p class="desc">成果类型（如：鉴定证书、验收报告、行业准入证明、新产品证书等）或者知识产权证明（如：专利证书、植物品种权证书、软件登记证书等）。</p>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
export default {
  name: 'ApplyForAchievementsDetail',
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
.ApplyForAchievementsDetail
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
  .desc
    margin 0 10px
    padding 5px 0
    font-size: 12px;
    color: #999999;
    line-height 16px
</style>
