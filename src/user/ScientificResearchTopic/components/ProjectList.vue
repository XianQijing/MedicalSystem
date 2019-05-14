// 课题列表
<template>
  <div class="ProjectList">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black border-1px">申请人-所属单位</span>
      <span>项目类别</span>
      <span>项目类别</span>
      <span class="resTime">审核时间:2018.06.01 00:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">详情</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '所属科室', '审核状态'],
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
          type: '通过',
          dayin: '已打印'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'DeclareDetail'})
    }
  }
}
</script>
