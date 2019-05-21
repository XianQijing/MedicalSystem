// 储备项目
<template>
  <div class="ReserveItem">
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
      <p class="black border-1pxTop">项目名称</p>
      <span>15221135677、硕士研究生</span>
      <span>项目计划占位</span>
      <span class="resTime">时间范围：2018.04.01 00：00 - 2018.06.01 00：00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">详情</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'ReserveItem',
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
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '所属项目']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'DeclareDetail'})
    }
  }
}
</script>
