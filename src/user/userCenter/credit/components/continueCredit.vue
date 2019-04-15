<template>
  <div class="continueCredit">
    <c-title>基本信息
      <div slot="float" @click="screen(true)">
        时间选择
        <span class="screen"></span>
      </div>
    </c-title>
    <div class="base-message">
      <div>
        <span>人员编号：38372</span>
        <span>工号：01938</span>
      </div>
      <p class="black">姓名-所属科室</p>
      <p>所在单位占位、职称</p>
    </div>
    <c-title>学分获取</c-title>
    <card
      aType="通过"
      :nowType="false"
    >
      <p slot="time" style="height:100%">2018.04.12 14:56</p>
      <p class="black">项目名称</p>
      <div class="two">
        <span>分值：12</span>
        <span>学分属性：区内学分</span>
      </div>
      <div class="two">
        <span>累计学分：120</span>
        <span>学分类别：I类学分</span>
      </div>
    </card>
    <popup position="bottom" :toShow="popShow" @close="screen">
    </popup>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import Popup from '@/components/popup/popup'

export default {
  name: 'ContinueDetail',
  data () {
    return {
      popShow: false
    }
  },
  components: {
    Card,
    Popup
  },
  methods: {
    screen (type) {
      this.popShow = type
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.continueCredit
  .comTitle
    margin 0
  .black
    font-size: 16px;
    color: #333333;
    font-weight 700
  .two
    margin-top 15px
    display flex
    justify-content space-between
    font-size: 14px;
    color: #333333;
  .base-message
    background white
    padding 15px 10px
    div
      display flex
      justify-content space-between
      font-size: 12px;
      color: #555555;
    p
      margin-top 15px
.continueCredit >>> .float
    font-size: 13px;
    color: #2873FF;
    .screen
      display inline-block
      width 13px
      height 13px
      background-size 13px
      vertical-align top
      bg-aimage(screen)
</style>
