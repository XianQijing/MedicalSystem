// 我的申报--查看
<template>
  <div class="declareDetail">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">计划名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">发布单位</p>
        <p class="black">闸北中心医院</p>
      </div>
      <div class="base-right">
        <div class="form-cell">
          <p class="label">联系人</p>
          <j-input placeholder="联系人"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">联系办公室</p>
          <j-input placeholder="联系办公室"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱</p>
          <j-input placeholder="电子邮箱"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">联系电话</p>
          <j-input placeholder="联系电话"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">开始时间</p>
          <j-input placeholder="开始时间"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">截止时间</p>
          <j-input placeholder="截止时间"></j-input>
        </div>
      </div>
    </div>

    <tabs v-model="clickTab">
      <tab title="项目信息" name="0">
        <project-message/>
      </tab>
      <tab title="完成单位" name="1">
        <complete-and-person/>
      </tab>
      <tab title="人员信息" name="2">
        <complete-and-person name="人员信息"/>
      </tab>
      <tab title="知识产权信息" name="3">
        <Knowledge/>
      </tab>
      <tab title="经费预算" name="4">
        <budget/>
      </tab>
      <tab title="上传标书" name="5">
        <complete-and-person name="上传标书"/>
      </tab>
      <tab title="上传附件" name="6">
        <complete-and-person name="上传附件"/>
      </tab>
      <tab title="预期成果" name="7">
        <preview-result/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectMessage from './projectMessage'
import CompleteAndPerson from './completeAndPerson'
import Knowledge from './knowledge'
import Budget from './budget'
import PreviewResult from './previewResult'
export default {
  name: 'DeclareDetail',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    JInput,
    Tab,
    Tabs,
    ProjectMessage,
    CompleteAndPerson,
    Knowledge,
    Budget,
    PreviewResult
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.base-message >>> .J-input
  input
    text-align right
    font-size 12px
.declareDetail >>> .tab-pane
  width 23.5%
  margin-bottom 5px
.declareDetail
  padding 10px 6px
  .base-message
    width 100%
    display flex
    margin-bottom 10px
    div
      height 166px
    .base-left
      background white
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 121px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-weight 700
        font-size 16px
        line-height 20px
    .base-right
      flex 1 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        .J-input
          width 50%
          padding 0
          max-width 181px
          color: #333333;
          font-weight 700
          height 100%
</style>
