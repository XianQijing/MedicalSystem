<template>
  <div class="PreviewResult">
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-xueshulunwenicon"/>
        <p>论文</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-zhuanliicon"/>
        <p>专利</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-chengguoicon"/>
        <p>成果</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-jiangxiangicon"/>
        <p>奖项</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-zhuanzhuicon"/>
        <p>专著</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-guoneihuiyiicon"/>
        <p>会议</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-Page3"/>
        <p>任职</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <IconSvg :weight="20" border="white" iconClass="icon-qitaicon"/>
        <p>其他</p>
      </div>
      <div class="cell-right">32</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewResult'
}
</script>

<style lang="stylus" scoped>
.PreviewResult
  margin-top .05rem
  width 100%
  display flex
  justify-content space-between
  flex-wrap wrap
  .cell
    display flex
    // margin-left 4px
    // flex 1 1 170px
    width 49.5%
    height .64rem
    margin-bottom .04rem
    .cell-left
      width .7rem
      background: #003BAA;
      text-align center
      color white
      p
        margin-top .1rem
        font-size .12rem
        line-height .15rem
      .svg-icon
        margin-top .1rem
        font-size .24rem
        font-weight bolder
    .cell-right
      text-align center
      width 1.1rem
      background white
      font-weight 700
      font-size .2rem
      line-height .64rem
</style>
