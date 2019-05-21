// 通知列表
<template>
  <div class="NoticeList">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      通知列表
    </c-title>
    <div class="wrapper">
      <div class="text-wrapper">
        <p class="black">
          <span>通知标题占位</span>
          <span class="red">置顶</span>
        </p>
        <p>通知内容</p>
        <p class="resTime">发布时间：2018.09.01 12:00:00</p>
        <p class="resTime">发布单位：静安区卫计委</p>
      </div>
      <div class="img-wrapper">
        <img src="../../../common/image/eyes.png" alt="">
        <p>附件预览</p>
      </div>
    </div>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p style="padding: 15px 0" class="black border-1pxTop">通知标题</p>
      <span class="resTime">发布单位：静安区卫计委</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'NoticeList',
  data () {
    return {
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        }
      ],
      textList: ['时间范围']
    }
  },
  methods: {
    jump () {
      // this.$router.push({name: 'NoticeList'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.NoticeList
  .wrapper
    width 100%
    height 126px
    font-size 0
    margin-bottom 10px
    .text-wrapper, .img-wrapper
      display inline-block
      vertical-align top
      height 100%
      box-sizing border-box
    .text-wrapper
      background white
      padding-top 10px
      width 84.5%
      p
        padding-bottom 15px
        margin 0 10px
        font-size:14px;
      .black
        span
          display inline-block
          vertical-align top
        .red
          width:36px;
          height:20px;
          background:rgba(220,97,97,1);
          font-size 9px
          color white
          line-height 20px
          text-align center
          border-radius:4px;
          float right
      .resTime
        font-size:12px;
        color:rgba(153,153,153,1);
    .img-wrapper
      background: #c6daff;
      text-align center
      width 15.43%
      p
        width 28px
        font-size 14px
        color: #2873ff;
        margin 0 auto
        line-height 18px
      img
        width 23px
        margin 27px 0 10px 0
</style>
