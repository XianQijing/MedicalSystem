// 变更合同
<template>
  <div class="ContractChange">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      项目列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p style="padding: 15px 0" class="black border-1pxTop">项目名称</p>
      <span>项目类别</span>
      <span>项目计划</span>
      <div class="formCell">
        <span>合同类型：横向合同</span>
        <span>付款方式：线上支付</span>
      </div>
      <span class="resTime">时间范围：2018.04.01 00：00 - 2018.06.01 00：00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">变更合同</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'ContractChange',
  data () {
    return {
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
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        }
      ],
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属科室', '合同类型', '付款方式', '审核状态']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ContractChange'})
    }
  }
}
</script>
