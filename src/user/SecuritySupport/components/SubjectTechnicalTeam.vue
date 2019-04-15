<template>
  <div class="SubjectTechnicalTeam">
    <CTitle>
      技术团队
      <span slot="float" style="color: #555555;">1/6</span>
    </CTitle>
    <div class="wrapper">
      <div class="title">
        技术掌握情况
        <div class="float">
          <span>新增</span>
          <span>删除</span>
        </div>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">病种:</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">主任(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">副主任(人):</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">主治(人):</p>
        <JInput/>
      </div>
    </div>
    <CTitle>
      学科带头人
    </CTitle>
    <div class="wrapper">
      <p class="title">学术地位</p>
      <div class="formCell border-1px">
        <p class="form-label">正高级职称(人):</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">研究生导师(人):</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">国家级学术委员会任职(人):</p>
        <JInput/>
      </div>
    </div>

    <div class="btn">
      <button class="butto" @click="change">下一项</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubjectTechnicalTeam',
  data () {
    return {
      test: '0'
    }
  },
  methods: {
    change (msg) {
      this.$router.push({name: 'SubjectTechnicalTeam'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectTechnicalTeam
  .wrapper
    background: #ffffff;
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding .15rem .1rem 0 .1rem
    &.top
      margin-top .1rem
    .title
      margin-bottom .02rem
      font-size: .14rem
      .float
        float right
        span
          color: #2873ff;
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
