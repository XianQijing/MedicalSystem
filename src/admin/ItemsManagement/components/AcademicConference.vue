// 学术会议
<template>
  <div class="AcademicConference">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属科室</span>
      <p class="black border-1pxTop">
        会议名称
      </p>
      <span>交流论文题目、主办单位</span>
      <div class="formCell">
        <span>经费来源:医院经费</span>
        <span>会议经费(元):2000</span>
      </div>
      <span class="resTime">会议地点：上海市闸北中兴路778号</span>
      <span class="resTime">审核日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>>
    </card>
  </div>
</template>

<script>
export default {
  name: 'AcademicConference',
  data () {
    return {
      textList: ['时间范围', '经费来源', '所属学科'],
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
  methods: {
    jump () {
      this.$router.push({name: 'ExaminFund', query: {msg: '查看详情'}})
      this.$store.commit('changeTitle', '查看详情')
    }
  }
}
</script>
