// 项目查询
<template>
  <div class="ProjectSearch">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
      </p>
      <span>主办学科、参加对象、项目级别</span>
      <div class="formCell">
        <span>参加人数:23</span>
        <span>外院人数:19</span>
        <span>外省人数：3</span>
      </div>
      <div class="formCell">
        <span>参加人数:23</span>
        <span>外院人数:19</span>
        <span>外省人数：3</span>
      </div>
      <span class="resTime">批准日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查询</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'ProjectSearch',
  data () {
    return {
      textList: ['时间范围'],
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
    jump (msg) {
      this.$router.push({name: 'ProjectSearchDetail'})
    }
  }
}
</script>
