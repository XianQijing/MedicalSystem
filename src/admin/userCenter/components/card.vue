<template>
  <div class="card">
    <div class="timeIcon" :class="color"><i class="iconfont">&#xe608;</i></div>
    <div class="time">{{messageList.time}}</div>
    <div class="card-content">
      <div class="card-white">
        <slot></slot>
        <p class="no border-1pxLeft">NO：{{messageList.no}}</p>
        <p class="user">{{messageList.name}}</p>
        <div class="type" :class="color">{{messageList.type}}</div>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <span>15221135677、硕士研究生</span>
        <span>登录次数：362</span>
        <span class="resTime">注册时间：2018.09.23 13:51</span>
        <button>修改</button>
        </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/checkbox/checkbox'
export default {
  name: 'card',
  data () {
    return {
      checked: false
    }
  },
  props: {
    messageList: {
      type: Object
    }
  },
  components: {
    Checkbox
  },
  computed: {
    color () {
      let type = this.messageList.type
      if (type === '正常') {
        return 'normal'
      } else if (type === '停用') {
        return 'stop'
      }
    }
  },
  methods: {
    onChange (data) {
      this.$emit('multiple', data)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.card
  margin-left 6px
  font-size 0
  .timeIcon
    width 16px
    height 16px
    background green
    color white
    font-size 10px
    display inline-block
    border-radius 50%
    vertical-align top
    margin-right 10px
  .time
    display inline-block
    vertical-align top
    font-size: 14px;
    color: #999999;
  .card-content
    margin-left 7px
    border-left 2px solid #D3D3D3
    padding 15px 0
    .card-white
      margin-left 17px
      padding 15px 10px
      background white
      position relative
      .checkbox
        margin-right 10px
      .no, .user
        padding-left 10px
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
      .no
        border-1pxLeft(#D3D3D3)
      .type
        height 40px
        width 30px
        position absolute
        font-size: 10px;
        color: #FFFFFF;
        top 0
        right 10px
        line-height 40px
        text-align center
      span
        display block
        font-size: 14px;
        color: #333333;
        margin-bottom 17px
      .black
        margin-top 15px
        font-weight 700
        font-size: 16px;
      .resTime
        font-size: 12px;
        color: #999999;
      button
        background: #2873FF;
        border-radius: 6px;
        font-size: 14px;
        color: #FFFFFF;
        width 100px
        height 30px
        display block
        margin 0 auto
  .normal
    background #45C186
  .stop
    background: #999999;
</style>
