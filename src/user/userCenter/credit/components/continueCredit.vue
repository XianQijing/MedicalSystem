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
      time="2018.04.12 14:56"
    >
      <p class="black ss">项目名称</p>
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
import Popup from '@/components/popup/popup'

export default {
  name: 'ContinueDetail',
  data () {
    return {
      popShow: false
    }
  },
  components: {
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
  .black
    font-size: .16rem
    color: #333333;
    margin-bottom .15rem
    &.ss
      margin-top 0!important
  .two
    // margin-top 15px
    display flex
    justify-content space-between
    color: #333333;
    &:last-child
      span
        margin-bottom 0!important
  .base-message
    background white
    padding .15rem .10rem
    div
      display flex
      justify-content space-between
      font-size: .12rem;
      color: #555555;
    p
      margin-top .15rem
.continueCredit >>> .float
    font-size: .13rem;
    color: #2873FF;
    .screen
      display inline-block
      width .13rem
      height .13rem
      background-size .13rem
      vertical-align top
      bg-aimage(screen)
</style>
