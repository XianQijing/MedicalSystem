// 用户业绩
<template>
  <div class="achievement">
    <CTitle :screen="true" witchOne="admin">信息列表</CTitle>
    <div class="card">
      <p class="gray">NO:232345</p>
      <p class="black">陈升息－眼科、主任医师、医生</p>
      <p>1986.04、硕士研究生</p>
      <div class="wapper">
        <div class="aBlock" @click="jump(one.path)" v-for="(one, i) in blockList" :key="i">
          <p class="number">{{i}}</p>
          <div class="title">
            <p>{{one.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievement',
  data () {
    return {
      blockList: [
        {
          name: '我的申报',
          path: '/myDeclare'
        },
        {
          name: '我的项目',
          path: '/myProject'
        },
        {
          name: '我的经费',
          path: '/myFunds'
        },
        {
          name: '我的论文',
          path: '/myPaper'
        },
        {
          name: '我的会议',
          path: '/myMeeting'
        },
        {
          name: '我的专利',
          path: '/myPatent'
        },
        {
          name: '我的成果',
          path: '/myAchievement'
        },
        {
          name: '我的奖励',
          path: '/myReward'
        },
        {
          name: '我的著作',
          path: '/myWrite'
        },
        {
          name: '我的任职',
          path: '/myServing'
        },
        {
          name: '我的活动',
          path: '/myActivity'
        }
      ]
    }
  },
  methods: {
    jump (path) {
      this.$router.push({path: path})
    }
  }
}
</script>

<style lang="stylus" scoped>
.achievement
  margin 0 6px
  .card
    background white
    padding 15px 10px
    margin-bottom 10px
    p
      font-size: 14px;
      color: #333333;
    .gray
      font-size: 12px;
      color: #555555
    .black
      font-size: 16px;
      color: #333333;
      margin 15px 0
  .wapper
    display flex
    justify-content space-between
    flex-wrap wrap
    .aBlock
      width 22.8%
      height 48px
      border: 1px solid #2873FF
      border-radius: 4px;
      margin-top 15px
      display flex
      align-items center
      &:last-child
        width 48.6%
      .number
        display inline-block
        font-weight 700
        vertical-align top
        font-size: 20px;
        color: #333333;
        text-align: center;
        flex 2 1 44px
        border-right 1px solid #D3D3D3;
      .title
        vertical-align top
        display inline-block
        flex 1 0 34px
        p
          text-align center
          font-size: 12px
          line-height 15px
          width 34px
          margin 0 auto
</style>
