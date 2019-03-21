<template>
  <div class="AddOrEdit">
    <CTitlt>{{msg}}通知</CTitlt>
    <div class="content">
      <div class="formCell s">
        <p class="form-label">通知标题：</p>
        <input type="text" placeholder="标题编辑">
      </div>
      <div class="s">
        <p class="form-label">通知内容：</p>
        <textarea placeholder="通知内容"></textarea>
      </div>
      <div class="formCell">
        <p class="form-label">相关附件：</p>
        <p style="color:#2873FF">上传</p>
      </div>
      <div class="formCell">
        <p class="form-label">截止时间：</p>
        <p>2019.09.30</p>
      </div>
      <div class="formCell">
        <p class="form-label">状态：</p>
        <div class="radio">
          <van-radio v-model="checked" name="显示">
            <img :src="checked=='显示' ? icon.active : icon.normal" width=14>
            显示
          </van-radio>
          <van-radio v-model="checked" name="隐藏">
            <img :src="checked=='隐藏' ? icon.active : icon.normal" width=14>
            隐藏
          </van-radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitlt from '@/components/title/title'
export default {
  name: 'AddOrEdit',
  data () {
    return {
      msg: '编辑',
      checked: '显示',
      icon: {
        normal: require('../../common/image/normal.png'),
        active: require('../../common/image/active.png')
      }
    }
  },
  components: {
    CTitlt
  },
  created () {
    this.msg = this.$route.query.msg
    document.title = this.$route.query.msg + '通知'
  }
}
</script>

<style lang="stylus" scoped>
.content
  margin 0 6px
  .formCell, .s
    width 100%
    background white
    padding 0 10px
    line-height 30px
    font-size 14px
    box-sizing border-box
    margin-bottom 2px
    textarea
      height 170px
  .formCell
    height 30px
    p
      vertical-align top
    input
      height 30px
      text-align right
.radio
  color black
  display flex
  justify-content space-between
  width 128px
.AddOrEdit >>> .van-radio__input
  display none
</style>
