// 申报状态
<template>
  <div class="ApplicationStatus">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">项目负责人-主办学科</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
      </p>
      <span>参加对象、项目级别</span>
      <div class="formCell">
        <span>是否收费：是</span>
        <span>收费标准：10</span>
      </div>
      <span class="resTime">举办时间：2018.09.01 12:00 - 2018.10.01 12:00</span>
      <span class="resTime">举办地点：上海市闸北中兴路778号</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'ApplicationStatus',
  data () {
    return {
      textList: ['时间范围', '审核状态'],
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
    }
  }
}
</script>
