// 状态查询
<template>
  <div class="InspectionSearch">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <p slot="type" style="height:100%">{{item.type}}</p>
      <span class="black">申请人-所属单位</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
      </p>
      <span>项目类别</span>
      <span>项目计划</span>
      <span class="resTime">批准日期：2018.09.01 12:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump('InspectionSearch')">查看</JButton>
        <JButton type="primary" v-if="item.type === '审核中'" round plain @click="jump('InspectionEdit')">修改</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'InspectionSearch',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属科室', '审核状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中',
          dayin: '已打印'
        }
      ]
    }
  },
  methods: {
    jump (name) {
      this.$router.push({name: name})
    }
  }
}
</script>
