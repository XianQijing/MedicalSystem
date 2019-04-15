// 项目申报
<template>
  <div class="ProjectList">
    <div v-show="page">
      <CTitle>
        主办活动信息
        <span slot="float">1/2</span>
      </CTitle>
      <div class="wrapper">
        <p class="title">会议信息</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">活动名称:</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">主办学科:</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">参加对象:</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">举办时间:</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">参加地点:</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目级别:</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">是否收费:</p>
          <JRadioGrounp v-model="test">
            <JRadio name="0">是</JRadio>
            <JRadio name="1">否</JRadio>
          </JRadioGrounp>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">收费标准（元/人）:</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">学分:</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">上传通知书:</p>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img :src="icon" alt="">上传文件</div>
          </div>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">上传议程:</p>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img :src="icon" alt="">上传文件</div>
          </div>
        </div>
      </div>

      <div class="btn">
        <button class="butto" @click="page = false">下一项</button>
      </div>
    </div>
    <ProjectListComponent v-show="!page"/>
  </div>
</template>

<script>
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
import ProjectListComponent from './ProjectListComponent'
export default {
  namw: 'ProjectList',
  data () {
    return {
      test: '0',
      page: false,
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    JRadio,
    JRadioGrounp,
    ProjectListComponent
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ProjectList
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    // margin-bottom 30px
    position relative
    .title
      font-size 14px;
      color: #333333;
      div
        float right
        font-size: 14px;
        color: #2873FF;
        span
          margin-left 10px
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
        width 45%
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
    .upload
      border none
      // display inline-block
      width 100%
      text-align center
      height 37px
      position relative
      input
        border none
        position absolute
        bottom 0
        margin 0
        padding 0
        height 14px
        width 75px
        opacity 0
        left 50%
        margin-left -37.5px
      .text
        position absolute
        font-size 14px
        color: #2873FF;
        bottom 0
        vertical-align bottom
        width 100%
        text-align center
        img
          width 19px
          height 19px
          vertical-align bottom
          margin-right 10px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
</style>
