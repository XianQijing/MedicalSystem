// 申报开放
<template>
  <div class="open">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">计划名称</p>
        <p class="black">
          单位级课题研究20170511
        </p>
        <p class="plane">项目负责人</p>
        <p class="black">闸北中心医院</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">联系人:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">联系办公室:</p>
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">联系电话:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">开始时间:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">截止时间:</p>
          <p class="j-input">专家人数</p>
        </div>
      </div>
    </div>

    <tabs v-model="clickTab">
      <tab title="项目信息" name="0">
        <ProjectMsg/>
      </tab>
      <tab title="完成单位" name="1">
        <CompletionUnit/>
      </tab>
      <tab title="人员信息" name="2">
      </tab>
      <tab title="知识产权信息" name="3">
      </tab>
      <tab title="经费预算" name="4">
      </tab>
      <tab title="上传标书" name="5">
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import ProjectMsg from '../components/projectMsg'
import CompletionUnit from '../components/CompletionUnit'
export default {
  name: 'open',
  data () {
    return {
      clickTab: 0
    }
  },
  components: {
    Tab,
    Tabs,
    ProjectMsg,
    CompletionUnit
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.open
  padding .10rem .06rem
  .base-message
    width 100%
    display flex
    margin-bottom .02rem
    .base-left
      background white
      padding .10rem
      box-sizing border-box
      margin-right .02rem
      flex 1 1 1.19rem
      p
        text-align center
      .plane
        font-size .12rem
        line-height .16rem
        margin-bottom .09rem
      .black
        font-size .16rem
        line-height .20rem
        margin-bottom .13rem
        &:last-child
          margin-bottom 0
    .base-right
      flex 2 1 2.4rem
      .form-cell
        form-cell-left(.12rem)
        margin-bottom .02rem
        height .26rem
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 1.81rem
          color: #999999;
          height 100%
          text-align right
          font-size .12rem
          line-height .26rem
  .tabs
    margin-top .06rem
.open >>> .tab-pane
      width calc(100% / 3 - .04rem)
      margin-top .04rem
</style>
