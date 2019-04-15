<template>
  <div class="InfluenceList">
    <div class="base-message">
      <img src="../../../common/image/userIcon.png" alt="">
      <p>科研对标</p>
      <p>上海中医药大学附属曙光医院科技影响力数据</p>
    </div>
    <div class="detail">
      <div class="icon-wapper" @click="open(item.name)" v-for="item in iconList" :key="item.name">
        <img :src="item.img" alt="" :class="item.width">
        <p>{{item.name}}</p>
      </div>
    </div>

    <van-popup v-model="show">
      <p class="title border-1px">
        选择指标
        <span class="cheng" @click="show = false">×</span>
      </p>
      <div class="popup-wapper">
        <div class="icon-wapper" @click="openShow1" v-for="(item, index) in iconList1" :key="index">
          <img :src="item.img" alt="" :class="item.width">
          <p v-html="item.name">{{item.name}}</p>
        </div>
      </div>
      <div class="btn">
        <button @click="show=false">返回上一级</button>
      </div>
    </van-popup>

    <van-popup v-model="show1">
      <p class="title border-1px">
        选择指标
        <span class="cheng" @click="show1 = false">×</span>
      </p>
      <div class="popup-wapper1">
        <div class="icon-wapper" @click="jump" v-for="(item, index) in iconList2" :key="index">
          <img :src="item.img" alt="" :class="item.width">
          <p v-html="item.name">{{item.name}}</p>
        </div>
      </div>
      <div class="btn">
        <button @click="show=true, show1=false">返回上一级</button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Scientific',
  data () {
    return {
      show: false,
      show1: false,
      name: '',
      iconList: this.$store.state.InfluenceList,
      iconList1: this.$store.state.InfluenceList1,
      iconList2: this.$store.state.InfluenceList2
    }
  },
  methods: {
    open (name) {
      this.show = !this.show
      this.name = name
    },
    openShow1 () {
      this.show1 = true
      this.show = false
    },
    jump () {
      this.$router.push({name: 'InfluenceListDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.InfluenceList
  // width 100%
  padding 20px 0 10px 0
  margin 0 6px
  box-sizing border-box
  .base-message
    background-image url('../../../common/image/Group.png')
    background-size 100%
    height 2.3rem
    padding 0.1rem 0
    box-sizing border-box
    text-align center
    color white
    font-size 0.14rem
    img
      width 0.42rem
      margin-bottom 0.1rem
      margin-top 0.2rem
    p
      margin 0 auto
      margin-bottom 0.21rem
      width 2.6rem
      font-size .2rem
      line-height .24rem
      // line-height 0.2rem
  .detail
    padding 0.29rem 0 0 0
    background white
    margin-top 8px
    .icon-wapper
      display inline-block
      margin 0 0.31rem
      text-align center
      font-size 0.14rem
      margin-bottom 0.15rem
      img
        width 0.44rem
        margin-bottom 0.1rem
        vertical-align top
      .bigger
        width 0.53rem
  .popup-wapper
    .icon-wapper
      width calc(100% / 3)
  .popup-wapper1
    .icon-wapper
      width calc(100% / 2)
  .popup-wapper, .popup-wapper1
    width 3rem
    .icon-wapper
      text-align center
      display inline-block
      margin-top .2rem
      clear both
      img
        width .4rem
      p
        padding-bottom .15rem
        padding-top .1rem
        font-size .14rem
        line-height .18rem
        margin 0 auto
  .btn
    margin-top .1rem
    margin-bottom .14rem
    button
      width 1rem
      height .3rem
      color white
      background: #c90b0b;
      border-radius: .06rem
      font-size .14rem
  .title
    padding 10px 0
    margin 0 10px
    font-size:16px;
    text-align center
    border-1px(#D3D3D3)
    .cheng
      position absolute
      right 0
      color #2873FF
      font-size 30px
      top 5px
      font-weight 400
</style>
