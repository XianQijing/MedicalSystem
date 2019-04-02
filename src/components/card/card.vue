<template>
  <div>
    <div class="card" v-if="type !== 'selection'">
      <div class="timeIcon" v-if="time" :class="color"><i class="iconfont">&#xe608;</i></div>
      <div class="time"><slot name="time"></slot></div>
      <div class="card-content">
        <div class="card-white">
          <slot></slot>
          <div class="type" :class="color" v-if="nowType"><slot name="type"></slot></div>
          <div class="button">
            <slot name="button"></slot>
          </div>
          </div>
      </div>
    </div>
    <div class="card" v-if="type === 'selection'">
      <div class="timeIcon" v-if="time" :class="color"><i class="iconfont">&#xe608;</i></div>
      <div class="time"><slot name="time"></slot></div>
      <div class="card-content">
        <div class="card-white">
          <checkbox v-model="checked"></checkbox>
          <slot></slot>
          <div class="type" :class="color" v-if="nowType"><slot name="type"></slot></div>
          <div class="button">
            <slot name="button"></slot>
          </div>
          </div>
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
    aType: {
      type: String
    },
    time: {
      type: Boolean,
      default: true
    },
    nowType: {
      type: Boolean,
      default: true
    },
    type: {
      type: String
    },
    data: {}
  },
  components: {
    Checkbox
  },
  computed: {
    color () {
      let type = this.aType
      if (type === '正常' || type === '通过' || type === '已分配') {
        return 'normal'
      } else if (type === '停用' || type === '隐藏') {
        return 'stop'
      } else if (type === '审核中' || type === '未分配') {
        return 'active'
      } else if (type === '建议修改') {
        return 'warning'
      }
    }
  },
  methods: {
    onChange (data) {
      this.$emit('multiple', data)
    }
  },
  watch: {
    checked (val) {
      if (val === true) {
        this.$parent.getValue(this.data)
      } else {
        this.$parent.delValue(this.data)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.card
  margin-left 6px
  font-size 0
  .timeIcon
    width 16px
    height 16px
    background #45C186
    color white
    font-size 10px
    display inline-block
    border-radius 50%
    vertical-align top
    margin-right 10px
  .time
    display inline-block
    vertical-align bottom
    font-size: 14px;
    color: #999999;
  .card-content
    margin-left 7px
    border-left 2px solid #D3D3D3
    padding 10px 0
    .card-white
      margin-left 17px
      padding 15px 10px
      background white
      position relative
      .checkbox
        margin-right 10px
      .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
      // .no
      //   padding-left 10px
      //   border-1pxLeft(#D3D3D3)
      .type
        height 40px
        width 30px
        position absolute
        font-size: 10px;
        color: #FFFFFF;
        text-align center
        top 0
        right 10px
        line-height 40px
        text-align center
        p
          width 20px
          display flex
          align-items center
          height 40px
          line-height 14px
          margin 0 auto
          flex-wrap wrap
          word-wrap: break-word;
          word-break: normal;
          overflow visible
      // span
      //   display block
      //   font-size: 14px;
      //   color: #333333;
      //   margin-bottom 17px
      // .black
      //   margin-top 15px
      //   font-weight 700
      //   font-size: 16px;
      // .resTime
      //   font-size: 12px;
      //   color: #999999;
      // .button
      //   // background: #2873FF;
      //   // border-radius: 6px;
      //   // font-size: 14px;
      //   // color: #FFFFFF;
      //   // width 100px
      //   height 30px
      //   // display block
      //   // margin 0 auto
  .normal
    background #45C186
  .stop
    background: #999999;
  .active
    background: #F9712C;
  .warning
    background: #FD4D4D;
</style>
