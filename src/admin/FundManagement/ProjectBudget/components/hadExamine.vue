// 项目预算
<template>
  <div class="hadExamine">
    <CTitle :screen="true" :textList="textList">预算变更审核</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科</span>
      <p class="black border-1pxTop">项目名称</p>
      <span>项目类别</span>
      <span>项目计划</span>
      <span class="resTime">项目到款总额：0.00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" round plain @click="jump">返回上一步</JButton>
      </div>
    </card>
  </div>

</template>

<script>
export default {
  name: 'hadExamine',
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
          type: '通过',
          dayin: '已打印'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'BudegetStatues'})
    }
  }
}
</script>
