<template>
  <div class="FileList1">
    <CTitle>信息列表</CTitle>
    <div class="list">
      <div class="right">
        <p class="small">归档时间:</p>
        <p class="black">归卷名称占位</p>
      </div>
      <div class="left">
        <div class="up">预览</div>
        <div class="down">修改</div>
      </div>
    </div>

    <Popup v-model="show" position="center" title="修改归卷名称">
      <div class="formCell">
        <p class="form-label">归卷名称</p>
        <JInput></JInput>
      </div>
      <div class="button-cell">
        <button class="reset">重置</button>
        <button class="complete">完成</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Popup from '@/components/popup/popup2'
import JInput from '@/components/input/j-input'
export default {
  name: 'FileList1',
  components: {
    CTitle,
    Popup,
    JInput
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.FileList1
  .list
    margin 0 6px
    display flex
    background white
    .right
      flex 1 1 307px
      p
        margin 10px 0 0 10px
      .small
        font-size: 12px;
    .left
      flex 0 0 56px
      .up, .down
        padding 14px
        background #C6DAFF
        color #2873FF
        font-size 14px
        text-align center
      .down
        margin-top 2px
  .formCell
    margin 10px 16px 90px 16px
    .form-label
      font-size: 14px
      margin-top 4px
    .J-input
      width 74.63%
      height: 26px;
      border: 1px solid #333333;
      border-radius: 4px;
</style>
