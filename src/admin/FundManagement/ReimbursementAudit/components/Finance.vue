<template>
  <div class="Finance">
    <div>
      <CTitle :screen="true" :textList="textList">财务已审核列表</CTitle>

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
        <span>项目类别</span>
        <span>项目计划</span>
        <span>报销额度：200.00</span>
        <span class="resTime">审核日期：2018.09.10</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
          <JButton type="primary" round plain @click="back">返回上一步</JButton>
        </div>
      </card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Finance',
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
      this.$router.push({name: 'FinanceDetail'})
    },
    back () {
      this.$MessageBox('确认返回上一步！', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定'
      }).then(() => {
      }).catch(() => {
      })
    }
  }
}
</script>
