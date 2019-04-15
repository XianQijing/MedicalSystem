<template>
  <div class="Budget">
    <div class="content">
      <CTitle>{{msg}}</CTitle>
      <p class="select" @click="show = true">{{budget}}<span class="iconfont">&#xe7ee;</span></p>
      <div class="wrapper" style="padding-top: 0">
        <p class="title">设备费</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目经费：</p>
          <JInput></JInput>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">匹配经费：</p>
          <JInput></JInput>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">其他经费：</p>
          <JInput></JInput>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">备注：</p>
          <textarea></textarea>
        </div>
      </div>
      <p class="desc">提交：当申报书所有信息上传无误后，可以提交申报书，申报书提交后不可修改。如需修改必须联系单位或相关科教主管部门退回修改。</p>
    </div>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>

    <popup v-model="show" position="bottom">
      <van-picker
      show-toolbar
      :columns="columns"
      @cancel="show = false"
      :item-height=30
      @confirm="onConfirm"
    />
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'Budget',
  data () {
    return {
      msg: '',
      budget: '设备费',
      show: false,
      columns: ['设备费', '材料费', '燃料动力费', '差旅费', '会议费']
    }
  },
  components: {
    Popup
  },
  created () {
    this.msg = this.$route.query.form
  },
  methods: {
    onConfirm (val) {
      this.show = false
      this.budget = val
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.Budget
  .select
    color: #2873FF
    vertical-align middle
    text-align center
    font-size: 16px;
    .iconfont
      vertical-align text-top
      font-size: 20px;
      // width 21px
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin 10px 6px
    &.shuo
      box-shadow none
    .title
      font-size 14px;
      color: #333333;
    p
      font-size: 14px;
      color: #333333;
      padding-top 15px
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
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
  .desc
    margin-top 10px
    line-height 16px
    font-size: 12px;
    color: #999999;
    margin 0 16px
  .content
    min-height 100vh
    padding-bottom 60px
    box-sizing border-box
  .button-cell
    position relative
    margin-top -30px
</style>
