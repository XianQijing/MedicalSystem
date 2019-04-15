<template>
  <div class="continueCredit">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      学分列表
    </c-title>

    <div class="card-wapper">
      <card
        :time="false"
        v-for="(item, index) in messageList"
        :key="index"
        :nowType="false"
        >
        <p class="no">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <span>闸北中心医院、主任医师</span>
        <div class="two">
          <span>二级学科：内科</span>
          <span>三级学分：消化内科</span>
        </div>
        <button slot="button" class="abtn" @click="jump('审核详情')">审核</button>
      </card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card/card'
export default {
  name: 'ContinueCredit',
  data () {
    return {
      textList: ['时间选择', '学历选择', '所属科室', '职称选择'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        }
      ]
    }
  },
  methods: {
    // 路由跳转
    jump (name) {
      this.$router.push({name: 'ContinueDetail'})
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.continueCredit >>> .float
  font-size: 13px;
  color: #2873FF;
  .screen
    display inline-block
    width 13px
    height 13px
    background-size 13px
    vertical-align top
    bg-aimage(screen)
.continueCredit >>> .card
  margin 0
  .card-content
    border none
    margin 0
    padding 0
    padding-bottom 10px
    .card-white
      margin 0
      // .no
      //   padding-left 0
      //   border-none()
.continueCredit
  padding-bottom 30px
  .comTitle
    margin 0
  .card-wapper
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      display block
      margin 0 auto
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 17px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px
    .two
      display flex
      justify-content space-between
      font-size: 14px;
      color: #333333;
</style>
