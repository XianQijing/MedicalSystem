<template>
  <div class="resumeDetail">
    <div class="base-message">
      <div class="base-wapper border-1px">
        <img src="../../../common/image/Bitmap@2x.png" alt="">
        <div>
          <p>姓名：陈阿斌</p>
          <p>民族：汉族</p>
          <p>年龄：29</p>
        </div>
        <div>
          <p>性别：女</p>
          <p>政治面貌：团员</p>
          <p>导师：张成林</p>
        </div>
      </div>
      <div class="border-1px noImg">
        <div>
          <p>科室：内分泌科</p>
          <p>职称：主治医师</p>
          <p>单位：上海市闸北区中心医院</p>
        </div>
        <div>
          <p>性别：女</p>
          <p>政治面貌：团员</p>
          <p>导师：张成林</p>
        </div>
      </div>
      <div class="border-1px noImg">
        <div>
          <p>科室：内分泌科</p>
          <p>职称：主治医师</p>
          <p>单位：上海市闸北区中心医院</p>
        </div>
        <div>
          <p>性别：女</p>
          <p>政治面貌：团员</p>
          <p>导师：张成林</p>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="icon-wapper" @click="open(item.name)" v-for="item in iconList" :key="item.name">
        <IconSvg :weight="10" border="#c90b0b" :iconClass="item.icon"/>
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
          <p>称号名称-来源部门</p>
          <p>2018年、称号级别</p>
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
  name: 'ResumeDetail',
  data () {
    return {
      show: false,
      name: '',
      iconList: [
        {
          icon: 'icon-rencaichenghaoicon',
          name: '人才称号',
          width: 'normal'
        },
        {
          icon: 'icon-xueshulunwenicon',
          name: '学术论文',
          width: 'normal'
        },
        {
          icon: 'icon-keyanxiangmuicon',
          name: '科研项目',
          width: 'normal'
        },
        {
          icon: 'icon-zhuanliicon',
          name: '技术专利',
          width: 'normal'
        },
        {
          icon: 'icon-jiangxiangicon',
          name: '科技奖项',
          width: 'bigger'
        },
        {
          icon: 'icon-Page3',
          name: '社会任职',
          width: 'normal'
        },
        {
          icon: 'icon-jixujiaoyuicon-zhengchang',
          name: '继教项目',
          width: 'normal'
        },
        {
          icon: 'icon-zhuanzhuicon',
          name: '学术专著',
          width: 'normal'
        },
        {
          icon: 'icon-Page4',
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
.resumeDetail
  // width 100%
  padding 10px 0
  margin 0 6px
  box-sizing border-box
  .base-message
    background-image url('../../../common/image/Group.png')
    background-size 100%
    height 2.3rem
    padding 0.1rem 0
    box-sizing border-box
    .border-1px
      padding 0 0.1rem
      border-1px(white)
      &:last-child
        border-none()
      div
        vertical-align top
        display inline-block
        color white
        font-size 0.13rem
        padding-bottom 0.1rem
        p
          margin-bottom 0.1rem
          &:last-child
            margin 0
    .base-wapper
      img
        width 0.66rem
        border-radius 50%
        margin-right 0.05rem
        vertical-align top
      div
        vertical-align top
        margin-left 0.29rem
        display inline-block
    .noImg
      margin-top 0.05rem
      div:first-child
        width 2.11rem
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
      .svg-icon
        // width 0.44rem
        font-size .44rem
        color #c90b0b
        margin-bottom 0.1rem
        vertical-align top
      .bigger
        width 0.53rem
  .popup-wapper
    padding 0 10px
    max-height 315px
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
