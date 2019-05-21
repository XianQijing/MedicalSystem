<template>
  <div
    class="card"
    :class="[
      time ? 'time-card' : '',
      {
        'is-selection': type === 'selection'
      }
    ]"
  >
    <IconSvg class="timeIcon" :class="color" iconClass="icon-shijian" v-if="time"></IconSvg>
    <div class="time">{{time}}</div>
    <div class="card-content">
      <div class="card-white">
        <div class="content">
        <checkbox v-model="checked" v-if="type === 'selection'"></checkbox>
          <slot></slot>
        </div>
        <div class="type" :class="color" v-if="status"><p>{{status}}</p></div>
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
    time: {
      type: String
    },
    status: String,
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
      let type = this.status
      if (type === '正常' || type === '通过' || type === '已分配') {
        return 'normal'
      } else if (type === '停用' || type === '隐藏' || '申报结束') {
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
  font-size 0
  .timeIcon
    width .16rem
    height .16rem
    background #45C186
    color white
    font-size .1rem
    display inline-block
    border-radius 50%
    vertical-align top
  .time
    display inline-block
    vertical-align bottom
    font-size: .14rem;
    color: #999999;
  .card-content
    padding-bottom .1rem
    .card-white
      padding .15rem 0
      background white
      position relative
      .content
        p, span
          margin-left .1rem
          margin-right .1rem
        span
          display block
          font-size .14rem;
          color: #333333
          margin-bottom .17rem
        .resTime
          font-size .12rem
          color: #999999;
        .black
          margin-top .15rem
          font-size: .16rem;
          color: #333333;
        .border-1pxTop
          border-1pxTop(#D3D3D3)
          color: #333333
          padding: .15rem 0
      .checkbox
        margin-left .10rem
        width .12rem
        height .12rem
      .no, .user
        font-size: .12rem;
        color: #555555;
        display inline-block
        vertical-align top
      .type
        height .4rem
        width .3rem
        position absolute
        font-size: .1rem
        color: #FFFFFF;
        text-align center
        top 0
        right .1rem
        text-align center
        display flex
        align-items center
        flex-wrap wrap
        p
          width .2rem
          word-wrap: break-word;
          margin 0 auto
  &.is-selection
    .card-content
      .card-white
        .no, .user
          padding-left .1rem
          border-1pxLeft(#d3d3d3)
  &.time-card
    margin-left 6px
    .timeIcon
      margin-right .1rem
    .card-content
      margin-left .07rem
      padding .1rem 0
      border-left .02rem solid #D3D3D3
      .card-white
        margin-left .17rem
  .normal
    background #45C186
  .stop
    background: #999999;
  .active
    background: #F9712C;
  .warning
    background: #FD4D4D;
</style>
