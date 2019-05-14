<template>
  <div class="provinceOfPolicy">
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
          <div @click="jump" class="iconfont">详情<IconSvg iconClass="icon-right"/></div>
        </div>
        <div class="address">{{item.address}}</div>
      </div>
    </div>

    <p class="new" @click="show=true"></p>

    <Popup position="center" title="新增政策" v-model="show">
      <div class="form">
        <p class="form-label">政策标题</p>
        <textarea class="title" placeholder="填写标题"></textarea>
      </div>
      <div class="form">
        <p class="form-label">政策内容</p>
        <textarea class="content" placeholder="填写政策内容"></textarea>
        <span>上传</span>
      </div>
      <div class="form">
        <p class="form-label">政策图片</p>
        <div>上传</div>
      </div>
      <button class="button-cell">
        <button class="reset" @click="show=false">取消</button>
        <button class="complete">发布</button>
      </button>
    </Popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'ProvinceOfPolicy',
  data () {
    return {
      show: false,
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
          address: '华东'
        }
      ]
    }
  },
  components: {
    Popup
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
.provinceOfPolicy
  margin 0 .06rem
  .list
    padding-bottom .1rem
    .wrapper
      background white
      margin-bottom .1rem
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
        padding .1rem
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
          color $blue
          font-size:0.13rem
          display inline-block
          .svg-icon
            font-size .13rem
            color $blue
  .new
    width 0.4rem
    height 0.4rem
    position fixed
    bottom .39rem
    right .24rem
    box-shadow:0px 1px 3px rgba(51,51,51,0.5);
    border-radius:50%;
    box-sizing border-box
    background-image url('../../common/image/newDetail.png')
    background-position center 0.46rem;
    // vertical-align middle
    background-size .5rem
  .form
    display flex
    justify-content space-between
    padding 10px 14px 0 14px
    position relative
    p
      font-size 14px
      line-height 30px
      vertical-align top
    textarea
      border:1px solid $blue
      border-radius:4px;
      width 66.67%
      padding 5px 10px
      box-sizing border-box
      font-size:12px
    .title
      height 60px
    .content
      height 247px
    span
      position absolute
      right 23%
      font-size 12px
      top 19px
      color #2873FF
    div
      color #2873FF
      width 66.67%
      vertical-align top
      font-size:14px;
      line-height 30px
  .button-cell
    margin-top 20px
    button
      height 30px
</style>
