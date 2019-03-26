// 介绍信申请
<template>
  <div class="IntroductoryLetter">
    <CTitle>
      介绍信申请
      <span slot="float" style="color:#555555">{{page}}/2</span>
    </CTitle>
    <div class="wrapper" v-show="page === 1">
      <p class="title">申请信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">选择期刊类别：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">刊物选择查询：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">刊物输入查询：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">论文题目：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">项目基金名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">作者姓名：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">作者属性：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">项目基金类别：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">上传文件：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">摘要：</p>
        <textarea></textarea>
      </div>
    </div>
    <div class="wrapper" v-show="page === 2">
      <p class="title">科室审查意见</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">资料是否真实：</p>
        <RadioGrounp v-model="real">
          <JRadio name="0">是</JRadio>
          <JRadio name="1">否</JRadio>
        </RadioGrounp>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">有无抄袭之嫌：</p>
        <RadioGrounp v-model="real">
          <JRadio name="0">是</JRadio>
          <JRadio name="1">否</JRadio>
        </RadioGrounp>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">是否一稿多投：</p>
        <RadioGrounp v-model="real">
          <JRadio name="0">是</JRadio>
          <JRadio name="1">否</JRadio>
        </RadioGrounp>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">存在其他问题否：</p>
        <RadioGrounp v-model="real">
          <JRadio name="0">是</JRadio>
          <JRadio name="1">否</JRadio>
        </RadioGrounp>
      </div>
    </div>
    <div class="btn">
      <button class="next" @click="jump(2)" v-show="page === 1">下一项</button>
      <button class="previous" @click="jump(1)" v-show="page === 2">上一项</button>
    </div>
    <div class="button-cell" v-show="page === 2">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JInput from '@/components/input/j-input'
import JRadio from '@/components/radio/JRadio'
import RadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  namw: 'IntroductoryLetter',
  data () {
    return {
      page: 1,
      real: '0',
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    CTitle,
    JInput,
    JRadio,
    RadioGrounp
  },
  methods: {
    jump (page) {
      this.page = page
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.IntroductoryLetter
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 10px
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
        width 9em
      .JRadioGrounp
        display inline-block
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
      .JRadioGrounp
        width 50%
        .JRadio:last-child
          float right
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
.desc
  margin 0 10px
  padding-bottom 30px
  font-size: 12px;
  color: #999999;
  line-height 16px
.btn
  width 100%
  text-align center
  button
    width 100px
    height 30px
    border-radius: 6px;
  .next
    background: #2873FF;
    color white
  .previous
    background: #C6DAFF;
    color #2873FF;
</style>
