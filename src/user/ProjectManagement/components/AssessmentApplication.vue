// 考核申请
<template>
  <div class="AssessmentApplication">
    <div v-show="page===1">
      <div class="wrapper">
        <JInput type="select" placeholder="类别下拉选择"></JInput>
        <JInput type="select" placeholder="项目下拉选择"></JInput>
      </div>
      <div class="s shuo wrapper">
        <span>项目编号：29382</span>
        <p class="black">项目负责人-所属科室</p>
        <p class="black">项目名称</p>
        <p>项目类别-项目计划</p>
        <div class="formCell">
          <p>项目总额：20000.00</p>
          <p>项目余额：20000.00</p>
        </div>
      </div>

      <CTitle>
        考核项目信息
        <span style="color: #555555;" slot="float">
          {{page}}/2
        </span>
      </CTitle>
      <div class="wrapper shuo" style="padding-top: 0">
        <p class="title">考核项目信息</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">拟完成日期:</p>
          <JInput type="select"></JInput>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">拟鉴定日期:</p>
          <JInput type="select"></JInput>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">课题执行情况表:</p>
          <JInput type="select"></JInput>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">课题执行情况表:</p>
          <upload/>
        </div>
      </div>
      <div class="btn">
        <button class="butto" @click="page = 2">下一项</button>
      </div>
    </div>

    <div v-show="page === 2">
      <CTitle>
        考核项目信息
        <span style="color: #555555;" slot="float">
          {{page}}/2
        </span>
      </CTitle>
      <div class="icon-wrapper" v-show="item.name !=='其他' " v-for="item in list" :key="item.name">
        <div class="img-wrapper">
          <img :src="item.icon" alt="">
          <p>{{item.name}}</p>
        </div>
        <div class="zhibiao">
          <p class="title">原定指标</p>
          <p>3</p>
        </div>
        <div class="upload">
          <div class="formCell margin">
            <p class="form-msg">完成指标</p>
            <p class="form-desc">
              1
            </p>
          </div>
          <div class="formCell">
            <p class="form-msg">上传文件</p>
            <div class="form-desc blue">
              上传
              <input type="file">
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button class="up" @click="page = 1">上一项</button>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">取认提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Upload from '@/components/upload/upload'
import JInput from '@/components/input/j-input'
export default {
  namw: 'AssessmentApplication',
  data () {
    return {
      page: 1,
      list: this.$store.state.ProjectIcon
    }
  },
  components: {
    CTitle,
    JInput,
    Upload
  },
  methods: {
    jump () {
      this.$router.push({name: 'ApplicationPort'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.AssessmentApplication
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 10px
    .formCell
      p
        color: #999999;
        font-size: 12px;
    &.shuo
      box-shadow none
    .title
      font-size 14px;
      color: #333333;
    p
      font-size: 14px;
      color: #333333;
      padding-top 15px
    .black
      font-size 16px
      &.border-1px
        padding-bottom 15px
        border-1px(#D3D3D3)
    span
      font-size: 12px;
      color: #555555;
    &:first-child
      margin-top 10px
      padding-bottom 10px
      display flex
      justify-content space-between
    &.s
      margin 0
      padding-bottom 10px
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: 6px;
      width 1.64rem
      display inline-block
      height 30px
    .item-wrapper
      padding 0 10px 15px 10px
      position relative
      border-1px(#D3D3D3)
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
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
        display inline-block
        position absolute
        top 50%
        right 0
        margin-top -7px
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
      .upload
        margin-top 10px
  .icon-wrapper
    // background white
    margin-bottom 4px
    display flex
    .img-wrapper
      background: #003baa;
      text-align center
      flex 0 0 .7rem
      img
        width .23rem
        margin-top .12rem
        margin-bottom .07rem
      p
        color white
        font-size: .12rem;
        padding-bottom .06rem
    .zhibiao
      margin-right .02rem
      flex 0 0 .7rem
      background white
      text-align center
      p
        font-size .16rem
      .title
        margin .1rem 0
        font-size .12rem
    .upload
      flex 1 1 2.21rem
      .formCell
        background white
        height .3rem
        line-height .3rem
        padding 0 10px
        &.margin
          margin-bottom .02rem
        .form-msg, .form-desc
          font-size: .14rem;
        .blue
          color #2873ff
          position relative
          input
            width 2em
            position absolute
            bottom .02rem
            z-index 3
            opacity 0
  .up
    width 100px
    height 30px
    background: #c6daff;
    border-radius: 6px;
    color: #2873ff;
    margin-top 10px
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
