<template>
  <div class="policyList">
    <CTitle :screen="true" :textList="textList">政策列表</CTitle>
    <div class="list">
      <div class="wrapper" v-for="item in data" :key="item.img">
        <div class="left">
          <img :src="item.img" alt="">
        </div>
        <div class="right">
          <p class="title">{{item.title}}</p>
          <p class="desc">{{item.desc}}</p>
          <span class="time">{{item.time}}</span>
          <span @click="jump" class="iconfont">详情&#xe7eb;</span>
          <div class="address">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
export default {
  name: 'PolicyList',
  data () {
    return {
      textList: ['时间范围', '区域选择', '省份选择', '城市选择'],
      data: [
        {
          img: require('../../../static/Rectangle@2x.png'),
          title: '通知文件标题',
          desc: '纪念金砖国家领导人会晤10周年非正式会议当地时间27日在南非约翰内斯堡',
          time: '2018.09.01 12:00:00',
          address: '华南'
        },
        {
          img: require('../../../static/Rectangle.png'),
          title: '通知文件标题',
          desc: '纪念金砖国家领导人会晤10sdssdfsdfds周年非正式会议当地时间27日在南非约翰sddfs内斯堡',
          time: '2018.09.01 12:00:00',
          address: '华南'
        }
      ]
    }
  },
  components: {
    CTitle
  },
  methods: {
    jump () {
      this.$router.push({name: 'PolicyDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.list
  margin 0 6px
  padding-bottom 10px
  .wrapper
    background white
    margin-bottom 10px
    position relative
    .address
      position absolute
      top 0
      width .3rem
      height .29rem
      color white
      font-size .1rem
      line-height .29rem
      text-align center
      background #FF5E28
      right .11rem
    div
      display inline-block
      vertical-align top
    .left
      width 1.2rem
      height 1.3rem
      background #EFEFF4
      img
        width 100%
    .right
      padding 10px
      box-sizing border-box
      width calc(100% - 1.3rem)
      p
        margin-bottom 0.15rem
      .title
        font-size 0.16rem
      .desc
        color:rgba(85,85,85,1);
        font-size 0.12rem
        line-height 0.16rem
        height 0.34rem
        text-wrap()
      .time
        font-size 0.12rem
        color #999999
        display inline-block
        vertical-align:top
      .iconfont
        float right
        color #2873FF
        font-size:0.13rem
        display inline-block
</style>
