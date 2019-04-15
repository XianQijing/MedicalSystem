<template>
  <div class="EditNotice">
    <CTitle>编辑内容</CTitle>
    <div class="form">
      <div class="formCell">
        <p class="form-label">标题:</p>
        <JInput placeholder="标题内容填写"/>
      </div>
      <div class="form-Cell">
        <p class="form-label">内容:</p>
        <textarea placeholder="填写"></textarea>
      </div>
      <div class="formCell">
        <p class="form-label">状态:</p>
        <JRadioGrounp v-model="test">
          <JRadio name="0">显示</JRadio>
          <JRadio name="1">隐藏</JRadio>
        </JRadioGrounp>
      </div>
      <div class="formCell">
        <p class="form-label">相关附件:</p>
        <div class="upload blue">
          继续上传
        </div>
      </div>
    </div>

    <div class="button-cell">
      <button class="reset">取消</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  name: 'EditNotice',
  data () {
    return {
      test: '0'
    }
  },
  components: {
    JRadioGrounp,
    JRadio
  }
}
</script>

<style lang="stylus" scoped>
.EditNotice >>> .J-input
  padding-right 0
  input
    text-align right
.EditNotice
  .form
    margin 0 6px
    font-size 14px
    .formCell, .form-Cell
      margin-bottom 2px
      background white
      padding 0 10px
    .formCell
      align-items center
      height 30px
      .blue
        color: #2873ff;
    .form-Cell
      .form-label
        line-height 30px
      textarea
        height 150px
        width 100%
        line-height 18px
.button-cell
  position fixed
  bottom 0
  left 0
</style>
