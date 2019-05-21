// 项目申报指南
<template>
  <div class="Disciplineplan">
    <CTitle>申报信息</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">指南名称:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">发布单位:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">发布日期:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="formCell">
        <p class="form-label">计划指南:</p>
        <p class="J-input">dsf</p>
      </div>
      <div class="form-Cell">
        <p class="form-label">相关附件：</p>
        <div class="wrapper">
          <div class="item">
            相关附件
          </div><div class="item">
            相关附件
          </div><div class="item">
            相关附件
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Disciplineplan'
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.Disciplineplan
  .form
    font-size .14rem
    .formCell, .form-Cell
      padding 0 .1rem
      background white
    .form-Cell
      .form-label
        line-height .3rem
    .formCell
      margin-bottom .02rem
      align-items center
      height .3rem
      .J-input
        color #999999
      .blue
        color #2873FF
    .wrapper
      margin .01rem .1rem .1rem
      font-size 0
      .item
        width calc(100% / 3 - .2rem / 3)
        height .58rem
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 2px rgba(0,0,0,0.5);
        border-radius .06rem
        display inline-block
        margin-right .1rem
        margin-bottom .1rem
        font-size .14rem
        color $blue
        line-height .58rem
        text-align center
        &:nth-of-type(3n)
          margin-right 0
</style>
