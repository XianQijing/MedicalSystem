<template>
  <div class="FundsSetting">
    <CTitle>额度设置</CTitle>
    <div class="wrapper">
      <span>金额设置:</span>
      <span class="blue">删除</span>
      <JInput/>
    </div>
    <p class="addNewOne" @click="account('添加账户')"></p>
    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FundsSetting'
}
</script>

<style lang="stylus" scoped>
.FundsSetting
  .comTitle
    margin 0
  .wrapper
    background white
    padding 7px 10px
    span
      font-size .14rem
    .blue
      float right
      color #2873ff
  .J-input
    width: 1.00rem
    height: .26rem
    border: 1px solid #2873ff;
    border-radius: .04rem
    margin .17rem auto .35rem auto
    font-size .14rem
  .addNewOne
    background-image url('../../../common/image/newDetail.png')
    height 40px
    width 40px
    background-size 40px
    display inline-block
    position fixed
    right 24px
    bottom 39px
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
