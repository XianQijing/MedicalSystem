// 项目预算状态
<template>
  <div class="ProjectBudgetStatues">
    <div v-show="printing">
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>

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
        <span class="resTime">审核日期：2018.09.10</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
        </div>
      </card>
    </div>

    <StatusPrinting v-show="!printing" v-model="printing"/>
  </div>
</template>

<script>
import StatusPrinting from './StatusPrinting'
export default {
  name: 'ProjectBudgetStatues',
  data () {
    return {
      printing: true,
      textList: ['时间范围', '类别选择', '项目类别', '项目计划'],
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
  components: {
    StatusPrinting
  },
  methods: {
    jump () {
      this.$router.push({name: 'BudegetStatues'})
    }
  }
}
</script>
