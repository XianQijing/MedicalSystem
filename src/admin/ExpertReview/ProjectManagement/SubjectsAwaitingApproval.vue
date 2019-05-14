<template>
  <div class="SubjectsAwaitingApproval">
    <CTitle :screen="true" :textList="textList">等待审批课题</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属科室</span>
      <p class="black border-1pxTop">
        会议名称
      </p>
      <span>交流论文题目、主办单位</span>
      <span>交流论文题目、主办单位</span>
      <span>交流论文题目、主办单位</span>
      <span class="resTime">审核时间：</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">审批</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'SubjectsAwaitingApproval',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '所属科室', '研究类型'],
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
      this.$router.push({name: 'ProjectDetail1', query: {msg: '查看详情'}})
      this.$store.commit('changeTitle', '查看详情')
    }
  }
}
</script>
