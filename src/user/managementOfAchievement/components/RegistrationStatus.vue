// 登记状态查询
<template>
  <div class="RegistrationStatus">
    <CTitle :screen="true" :textList="textList">介绍信列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>著作权人-著作属性</span>
      <p class="black border-1pxTop">著作名称</p>
      <span>ISBN号、主要合作单位</span>
      <span>印数／字数／定价：34/34876/¥28.00</span>
      <span>出版年月／著作类型：2016.09/人民出版社</span>
      <span class="resTime">审核时间：2018.09.01 12:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'RegistrationStatus',
  data () {
    return {
      textList: ['时间范围', '作者属性', '论文属性', '论文类别', '经费来源'],
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
          type: '通过'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'RegistrationStatusDetail'})
    }
  }
}
</script>
