// 成果申报状态查询
<template>
  <div class="ApplyForAchievementsType">
    <CTitle :screen="true" :textList="textList">成果列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no">NO：{{item.name}}</p>
      <p slot="type" style="height:100%">{{item.type}}</p>
      <span class="black">申报人－眼科</span>
      <span>完成人-完成人属性、完成人单位、排名</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        成果名称
      </p>
      <span>成果类别</span>
      <span class="resTime">审核日期：2018.04.22</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'ApplyForAchievementsType',
  data () {
    return {
      textList: ['时间范围', '著作属性', '著作类型', '所属学科', '审核状态'],
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
          type: '通过'
        }
      ]
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'ApplyForAchievementsDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ApplyForAchievementsType
  .two
    display flex
    justify-content space-between
</style>
