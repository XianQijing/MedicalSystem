<template>
  <div class="TalentAuditStatusQuery">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属科室</span>
      <span>主办单位</span>
      <span class="resTime">单位名称:</span>
      <span class="resTime">审核时间:</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'TalentAuditStatusQuery',
  data () {
    return {
      textList: ['时间范围', '所属科室', '审核状态'],
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
      this.$router.push({name: 'TalentBasicInformation', query: {msg: 'Detail'}})
    }
  }
}
</script>
