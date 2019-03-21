<template>
  <div class="scientificc">
    <div class="base-message">
      <img src="../../../common/image/userIcon.png" alt="">
      <p>科研对标</p>
      <p>科研对标内容占位科研对标内容</p>
    </div>
    <div class="detail">
      <div class="icon-wapper" @click="open(item.name)" v-for="item in iconList" :key="item.name">
        <img :src="item.img" alt="" :class="item.width">
        <p>{{item.name}}</p>
      </div>
    </div>
    <van-popup v-model="show">
      <p class="title border-1px">
        {{name}}
        <span class="cheng" @click="show = false">×</span>
      </p>
      <div class="popup-wapper">
        <div class="no border-1px">
          <p>NO:01</p>
          <p class="big">项目等级：国家级项目</p>
          <p>数量标准：34</p>
          <div class="two">
            <span>当年数量：12</span>
            <span>年度对标：12</span>
          </div>
          <div class="two">
            <span>历年数量：22</span>
            <span>历年对标：22</span>
          </div>
          <p>备注：备注占位备注占位</p>
        </div>
        <div class="no">
          <p>NO:01</p>
          <p>称号名称-来源部门</p>
          <p>2018年、称号级别</p>
        </div>
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
      name: '',
      iconList: [
        {
          img: require('../../../common/image/人才称号icon@3x.png'),
          name: '人才称号',
          width: 'normal'
        },
        {
          img: require('../../../common/image/论文red.png'),
          name: '学术论文',
          width: 'normal'
        },
        {
          img: require('../../../common/image/项目icon@3x.png'),
          name: '科研项目',
          width: 'normal'
        },
        {
          img: require('../../../common/image/专利red.png'),
          name: '技术专利',
          width: 'normal'
        },
        {
          img: require('../../../common/image/奖项red.png'),
          name: '科技奖项',
          width: 'bigger'
        },
        {
          img: require('../../../common/image/任职red.png'),
          name: '社会任职',
          width: 'normal'
        },
        {
          img: require('../../../common/image/继续教育icon@3x.png'),
          name: '继教项目',
          width: 'normal'
        },
        {
          img: require('../../../common/image/专著red.png'),
          name: '学术专著',
          width: 'normal'
        },
        {
          img: require('../../../common/image/page.png'),
          name: '学术',
          width: 'normal'
        }
      ]
    }
  },
  methods: {
    open (name) {
      this.show = !this.show
      this.name = name
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.scientificc
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
      width 1.14rem
      line-height 0.2rem
  .detail
    padding 0.29rem 0 0 0
    background white
    margin-top 8px
    .icon-wapper
      display inline-block
      margin 0 0.31rem
      text-align center
      font-size 0.14rem
      margin-bottom 0.38rem
      &:last-child
        margin-left 0.38rem
      img
        width 0.44rem
        margin-bottom 0.1rem
        vertical-align top
      .bigger
        width 0.53rem
  .popup-wapper
    padding 0 10px
    max-height 326px
    overflow auto
    width 3rem
    max-width 300px
    .no
      padding-top 15px
      border-1px(#D3D3D3)
      &:last-child
        border-none()
      p
        font-size:14px;
        color:rgba(85,85,85,1);
        padding-bottom 15px
        margin-left 5px
      div
        justify-content space-between
        display flex
        padding-bottom 15px
        margin-left 5px
        font-size 14px
        color:rgba(85,85,85,1);
      .big
        font-size 16px
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
