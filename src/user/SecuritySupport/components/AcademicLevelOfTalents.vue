<template>
  <div class="AcademicLevelOfTalents" :class="msg">
    <CTitle>所在单位</CTitle>
    <div class="wrapper">
      <p class="title">医院等级</p>
      <div class="formCell">
        <p class="form-label">等级选择:</p>
        <JInput type="select"/>
      </div>
    </div>
    <CTitle>所在学科</CTitle>
    <div class="wrapper">
      <p class="title">学科等级</p>
      <div class="formCell">
        <p class="form-label">等级选择:</p>
        <JInput type="select"/>
      </div>
    </div>
    <CTitle>学术任职</CTitle>
    <div class="wrapper">
      <div class="title">
        任职情况
        <div class="float">
          <span>新增</span>
          <span>删除</span>
        </div>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">任职名称:</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">聘任时间:</p>
        <JInput type="select"/>
      </div>
      <div class="formCell">
        <p class="form-label">任期(年):</p>
        <JInput/>
      </div>
    </div>
    <CTitle>学术荣誉</CTitle>
    <div class="wrapper">
      <div class="title">
        获得荣誉
        <div class="float">
          <span>新增</span>
          <span>删除</span>
        </div>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">荣誉名称:</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">颁证单位:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">颁证日期:</p>
        <JInput type="select"/>
      </div>
    </div>
    <p class="desc">
      提交：当申报书所有信息上传无误后，可以提交申报书，申报书
      提交后不可修改。如需修改必须联系单位或相关科教主管部门退
      回修改。
    </p>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcademicLevelOfTalents',
  props: {
    msg: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AcademicLevelOfTalents
  padding-bottom 30px
  .comTitle
    margin 0
  .wrapper
    background: #ffffff;
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding .15rem 0.1rem 0 .1rem
    &.top
      margin-top .1rem
    .title
      margin-bottom .02rem
      font-size: .14rem
    .float
      float right
      padding-right .1rem
      span
        color: #2873ff;
    .formCell
      height .42rem
    .formCell, .form-Cell
      padding 0 0 0 0.1rem
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
  .desc
    margin-top .1rem
    color: #999999;
    font-size: .12rem
    line-height .15rem
  .button-cell
    position fixed
    bottom 0
    left 0
.Detail
  margin 0 6px
  .wrapper
    .float
      display none
    .formCell, .form-Cell
      .form-label
        font-size .16rem
        color: black;
      .J-input
        border none
        border-radius: none
        height .3rem
        width 1rem
        font-size .14rem
</style>
