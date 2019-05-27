// 经费报销申请
<template>
  <div class="ApplicationEntry">
    <div class="wrapper">
      <JInput type="select" placeholder="类别选择"></JInput>
      <JInput type="select" placeholder="项目选择"></JInput>
      <JInput type="select" placeholder="事项号"></JInput>
    </div>
    <div class="s wrapper">
      <span>项目编号：29382</span>
      <span>财务编号：92873</span>
      <p class="black">项目负责人-所属科室</p>
      <p class="black">项目名称</p>
      <p>项目类别-项目计划</p>
      <div class="formCell">
        <p>项目总额：20000.00</p>
        <p>项目余额：20000.00</p>
      </div>
    </div>

    <CTitle>
      申请端口
      <span slot="float" @click="add">添加</span>
    </CTitle>
    <div class="green" v-for="(item, index) in list" :key="index">
      <div class="middle">
        <span class="msg">{{item.time}}科研报销信息</span>
        <span class="delete" v-if="index !== 0" @click="deleted(item)">删除</span>
      </div>
      <div class="desc">
        <div class="sum-price border-1px">
          <span>报销金额</span>
          <span class="num">{{item.baoXiao}}</span>
        </div>
        <div class="detail-price">
          <div>
            <p>项目经费</p>
            <p class="num">{{item.xiangMu}}</p>
          </div>
          <div>
            <p>匹配经费</p>
            <p class="num">{{item.piPei}}</p>
          </div>
          <div>
            <p>其他经费</p>
            <p class="num">{{item.qiTa}}</p>
          </div>
        </div>
      </div>
      <div class="arrow" @click="jump">
        <span class="iconfont">&#xe7eb;</span>
      </div>
    </div>
    <!--  -->
    <CTitle>报销详细说明</CTitle>
    <div class="wrapper shuo" style="padding-top: 0">
      <div class="item-wrapper border-1px">
        <p class="item-title">报销详细说明：</p>
        <textarea></textarea>
      </div>
    </div>

    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  namw: 'ApplicationEntry',
  data () {
    return {
      icon: require('../../../common/image/upload.png'),
      list: [
        {
          time: '2017年12月09日',
          baoXiao: '9000.00',
          xiangMu: '3000.00',
          piPei: '2000.00',
          qiTa: '4000.00'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ApplicationPort'})
    },
    add () {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      this.list.push({
        time: `${year}年${month}月${day}日`,
        baoXiao: '0.00',
        xiangMu: '0.00',
        piPei: '0.00',
        qiTa: '0.00',
        id: this.length + 1
      })
    },
    deleted (item) {
      this.list = this.list.filter(data => {
        return data !== item
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationEntry
  padding-bottom .2rem
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding .1rem .1rem 0 .1rem
    margin-bottom .10rem
    p
      font-size: .14rem;
      color: #333333;
      padding-top .15rem
    .black
      font-size .16rem
    span
      font-size: .12rem;
      color: #555555;
      margin-bottom .10rem
    &:first-child
      margin-top .10rem
      padding-bottom .10rem
      display flex
      justify-content space-between
    &.s
      margin 0
      padding-bottom .10rem
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: .06rem;
      width 1.12rem
      display inline-block
      height .30rem
    .item-wrapper
      padding 0 .10rem .15rem .10rem
      .item-title
        display inline-block
        font-size: .16rem;
        color: #FD4D4D;
        vertical-align top
      textarea
        border: 1px solid #FD4D4D;
        border-radius: .06rem;
        display block
        width 100%
        margin-top .10rem
        padding .10rem
        box-sizing border-box
        height .80rem
  .green
    background: #45C186;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding .15rem 0 .15rem .10rem
    color white
    margin-bottom .1rem
    &:last-child(1)
      margin-bottom 0
    .middle
      display flex
      justify-content space-between
      align-items center
      .msg
        font-size: .16rem;
      .delete
        font-size .13rem
        margin-right .10rem
    .desc, .arrow
      display inline-block
      text-align center
      vertical-align middle
    .desc
      .sum-price
        width 3.14rem
        border-1px(#D3D3D3)
        padding .15rem 0 .15rem 0
        span
          font-size: .14rem
          &:last-child
            font-size .20rem
            margin-left .20rem
      .detail-price
        display flex
        justify-content space-between
        margin-top .15rem
        div
          flex 1
          p
            font-size: .14rem
          .num
            font-size .20rem
            margin-top .16rem
    .arrow
        margin-top -.20rem
        width .313rem
      .iconfont
        font-size .25rem
  .button-cell
    position fixed
    bottom 0
    left 0
    right 0
</style>
