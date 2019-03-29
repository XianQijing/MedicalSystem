// 仪器设备--事项申请
<template>
  <div class="EquipmentApplication">
    <div class="header">
      <JInput placeholder="下拉选择" type="select"/>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <CTitle>设备申请</CTitle>
    <div>
      <div class="wrapper">
        <p class="title">考核项目信息</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">设备名称:</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">台（套）数:</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">资金来源:</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">估计金额（元）:</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">申购预算:</p>
          <JRadioGrounp v-model="test">
            <JRadio name="未预算">未预算</JRadio>
            <JRadio name="已预算">已预算</JRadio>
          </JRadioGrounp>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">申购性质:</p>
          <JRadioGrounp v-model="test1">
            <JRadio name="更新">更新</JRadio>
            <JRadio name="新增">新增</JRadio>
          </JRadioGrounp>
        </div>
        <div class="item-wrapper">
          <p class="item-title">设备技术要求:</p>
          <textarea></textarea>
        </div>
        <div class="item-wrapper">
          <p class="item-title">申购理由:</p>
          <textarea></textarea>
        </div>
      </div>
    </div>

    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  namw: 'EquipmentApplication',
  data () {
    return {
      show: false,
      test: '未预算',
      test1: '更新'
    }
  },
  components: {
    CTitle,
    JInput,
    JRadio,
    JRadioGrounp
  },
  methods: {
    pageChange (msg) {
      if (msg === 'next') {
        this.page++
      } else {
        this.page--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.EquipmentApplication
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 0 10px 0 10px
    position relative
    margin-bottom 30px
    .title
      font-size 14px;
      color: #333333;
      padding-top 10px
    .item-wrapper
      border-1px(#D3D3D3)
      padding 15px 10px
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
      .a
        display block
      .JRadioGrounp
        display inline-block
        float right
        width 50%
        .JRadio
          &:last-child
            float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top 10px
        padding 10px
        box-sizing border-box
        height 80px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
.margin
  margin-top 10px
.up
  background: #C6DAFF;
  color: #2873FF;
.header
  display flex
  justify-content space-between
  background white
  padding 10px 12px
  margin-top 10px
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50)
  .J-input
    border: 1px solid #FD4D4D;
    border-radius: 6px;
    width 49%
    min-width 100px
    height 30px
</style>
