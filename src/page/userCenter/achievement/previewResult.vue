<template>
  <div class="PreviewResult">
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/论文icon@3x.png" alt="">
        <p>论文</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/专利icon@3x.png" alt="">
        <p>专利</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/成果icon@3x.png" alt="">
        <p>成果</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/奖项icon@3x.png" alt="">
        <p>奖项</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/专著icon@3x.png" alt="">
        <p>专著</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/会议icon@3x.png" alt="">
        <p>会议</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/任职icon@3x.png" alt="">
        <p>任职</p>
      </div>
      <div class="cell-right">32</div>
    </div>
    <div class="cell">
      <div class="cell-left">
        <img width="24" src="../../../common/image/其他icon@3x.png" alt="">
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
  margin-top 5px
  width 100%
  display flex
  justify-content space-between
  flex-wrap wrap
  .cell
    display flex
    // margin-left 4px
    // flex 1 1 170px
    width 49.5%
    height 64px
    margin-bottom 4px
    .cell-left
      flex 0 0 70px
      background: #003BAA;
      text-align center
      color white
      p
        margin-top 10px
      img
        margin-top 10px
    .cell-right
      text-align center
      flex 1 1 110px
      background white
      font-weight 700
      font-size 20px
      line-height 64px
</style>
