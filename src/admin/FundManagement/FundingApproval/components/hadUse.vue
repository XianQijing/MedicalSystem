<template>
  <div class="hadUse">
    <CTitle :screen="true" :textList="textList">经费使用审核</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">负责人-所属科室</span>
      <p class="black border-1pxTop">
        项目名称
      </p>
      <span>项目类别、项目支出名目</span>
      <span>项目计划</span>
      <span class="resTime">批准日期：2018.09.01 12:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">审核</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'hadUse',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '审核状态', '所属科室'],
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
      this.$router.push({name: 'HadUseDetail'})
    }
  }
}
</script>
