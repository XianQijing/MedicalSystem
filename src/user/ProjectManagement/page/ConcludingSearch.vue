// 状态查询--详情
<template>
  <div class="ConcludingSearch">
    <div class="white">
      <p>项目名称占位</p>
      <p>项目类别占位</p>
    </div>
    <div class="wrapper first">
      <div class="icon">
        <div class="img">
          <p class="no-img">验收<br/>申请表</p>
        </div>
        <div class="desc">
          <!-- <p>原定指标:d3</p> -->
          <!-- <p>完成指标:3</p> -->
        </div>
        <p class="blue">预览</p>
      </div><div class="icon">
        <div class="img">
          <p class="no-img">课题<br/>总结报告</p>
        </div>
        <div class="desc">
          <!-- <p>原定指标:d3</p> -->
          <!-- <p>完成指标:3</p> -->
        </div>
        <p class="blue">预览</p>
      </div><div class="icon">
        <div class="img">
          <p class="no-img">鉴定<br/>证书</p>
        </div>
        <div class="desc">
          <!-- <p>原定指标:d3</p> -->
          <!-- <p>完成指标:3</p> -->
        </div>
        <p class="blue">预览</p>
      </div><div class="icon">
        <div class="img">
          <p class="no-img">验收<br/>证书</p>
        </div>
        <div class="desc">
          <!-- <p>原定指标:d3</p> -->
          <!-- <p>完成指标:3</p> -->
        </div>
        <p class="blue">预览</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="icon" v-for="item in list" :key="item.name">
        <div class="img">
          <img :src="item.icon" alt="">
          <p>{{item.name}}</p>
        </div>
        <div class="desc">
          <p>原定指标:d3</p>
          <p>完成指标:3</p>
        </div>
        <p class="blue">预览</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'ConcludingSearch',
  data () {
    return {
      list: this.$store.state.ProjectIcon
    }
  },
  components: {
    CTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ConcludingSearch
  padding 10px 6px
  .comTitle
    margin 0
  .wrapper
    .icon
      display inline-block
      background white
      margin-left 0.04rem
      margin-bottom 0.04rem
      width 49.452%;
      &:nth-of-type(2n+1)
        margin-left 0
      .img
        background: #003baa
        width .7rem
        height .64rem
        box-sizing border-box
        text-align center
        padding .05rem 0
        display inline-block
        vertical-align top
        img
          width .23rem
          margin .07rem
        p
          color white
          font-size .12rem
        .no-img
          margin-top 17px
      .desc
        font-size .12rem
        display inline-block
        vertical-align top
        width .68rem
        p
          padding-top 13px
      .blue
        vertical-align top
        display inline-block
        text-align center
        font-size .12rem
        color #2873ff
        line-height .64rem
  .first
    margin-bottom 5px
  .white
    padding 15px 10px 0 10px
    background white
    margin-bottom 10px
    p
      padding-bottom 15px
      font-size:16px;
      &:last-child
        font-size:14px;
</style>
