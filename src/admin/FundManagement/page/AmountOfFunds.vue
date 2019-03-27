<template>
  <div class="AmountOfFunds">
    <div class="blue">
      <p class="title">{{msg}}</p>
      <div class="blue-wrapper">
        <div class="border-1px">
          <p class="all">总计经费</p>
          <p class="num">9000</p>
        </div>
        <div class="formCell">
          <div>
            <p class="desc">项目经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">匹配经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">其他经费</p>
            <p class="num">2000.00</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <p class="title">NO：01</p>
      <div class="formCell border-1px">
        <p class="all">项目经费</p>
        <p class="num">3000.00</p>
      </div>
      <div class="formCell">
        <span class="all">到款时间：2018.09.01 12:00</span>
        <span class="num">到账时间：2018.09.01 12:00.00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmountOfFunds',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.msg = this.$route.query.msg
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AmountOfFunds
  .blue
    background: #003BAA;
    padding 10px
    margin-top 10px
    color: #FFFFFF;
    .title
      font-size: 16px;
    .blue-wrapper
      padding 0 10px
      text-align center
      .border-1px
        border-1px(#D3D3D3)
        padding 15px 0 10px 0
        .all
          font-size: 14px;
          display inline-block
          vertical-align middle
        .num
          font-size: 20px;
          margin-left 20px
          display inline-block
          vertical-align middle
    .formCell
      margin-top 10px
      .desc
        font-size: 14px;
      .num
        font-size: 20px;
        margin-top 15px
  .content
    background: #FFFFFF;
    margin-top 10px
    padding 10px
    .title
      font-size: 12px;
      color: #555555;
    .formCell
      padding-top 15px
      span
        font-size: 12px;
        color: #999999;
    .border-1px
      padding-bottom 15px
      font-size: 16px;
      color: #333333;
      font-weight 700
      border-1px(#D3D3D3)
</style>
