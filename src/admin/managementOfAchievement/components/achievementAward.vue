// 成果奖励
<template>
  <div class="achievementAward">
    <CTitle :screen="true" :textList="textList">奖励列表</CTitle>

    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        type="selection"
        :data="item"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <span>完成人-完成人属性、完成人单位、单位排名</span>
        <p class="black border-1pxTop">
          成果名称
        </p>
        <span>成果类别、颁证机关</span>
        <span>奖励名称、奖励类别、奖励等级</span>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
          <JButton type="primary" round plain @click="jump">返回上一步</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'AchievementAward',
  data () {
    return {
      textList: ['时间范围', '作者属性', '成果类别', '所属学科'],
      multiple: [],
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
        }
      ]
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'SAndTAward'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.achievementAward
  padding-bottom .3rem
  .two
    display flex
    justify-content space-between
</style>
