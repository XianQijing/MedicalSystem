<template>
  <div class="SubjectBasicInformation">
    <CTitle>
      学术梯队
      <span slot="float" style="color: #555555;">1/4</span>
    </CTitle>
    <div class="wrapper">
      <p class="title">专业技术职称</p>
      <div class="formCell border-1px">
        <p class="form-label">正高职称(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">副高职称(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">中级职称(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">初级职称(人):</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">中高级人员占学科团队(%):</p>
        <JInput/>
      </div>
    </div>
    <div class="wrapper top">
      <p class="title">最高学历</p>
      <div class="formCell border-1px">
        <p class="form-label">博士学历(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">硕士学历(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">其他学历(人):</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">硕士以上学历占学科团队(%):</p>
        <JInput/>
      </div>
    </div>
    <div class="wrapper top">
      <p class="title">成员年龄</p>
      <div class="formCell border-1px">
        <p class="form-label">35岁以下(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">36 - 45岁(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">46 - 55岁(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">55岁以上(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">平均年龄(岁):</p>
        <JInput/>
      </div>
    </div>
    <div class="wrapper top">
      <p class="title">学缘结构</p>
      <div class="formCell border-1px">
        <p class="form-label">中医学专业(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">西医学专业(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">中西医结合(人):</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">其他专业(人):</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">学缘结构是否合理</p>
        <JRadioGrounp v-model="test">
          <JRadio name="0">合理</JRadio>
          <JRadio name="1">不合理</JRadio>
        </JRadioGrounp>
      </div>
    </div>

    <div class="btn">
      <button class="butto" @click="change">下一项</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
import JInput from '@/components/input/j-input'
export default {
  name: 'SubjectBasicInformation',
  data () {
    return {
      test: '0'
    }
  },
  components: {
    CTitle,
    JInput,
    JRadio,
    JRadioGrounp
  },
  methods: {
    change (msg) {
      this.$router.push({name: 'SubjectBasicInformation'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectBasicInformation
  .wrapper
    background: #ffffff;
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding .15rem .1rem 0 .1rem
    &.top
      margin-top .1rem
    .title
      margin-bottom .02rem
      font-size: .14rem
    .formCell
      padding 0 .1rem
      height .42rem
      align-items center
      .form-label
        font-size .16rem
        color: #fd4d4d;
      .J-input
        border: 1px solid #fd4d4d;
        border-radius: .06rem
        height .3rem
        width 1rem
        font-size .14rem
    .border-1px
      border-1px(#d3d3d3)
  .btn
    button
      width 1rem
      height .3rem
      border-radius .06rem
      margin-top: 15px;
      font-size .14rem
      margin-left .1rem
      &.blue
        color: #2873ff;
        background: #c6daff;
      &:first-child
        margin-left 0
  .desc
    margin-top .1rem
    color: #999999;
    font-size: .12rem
    line-height .15rem
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
