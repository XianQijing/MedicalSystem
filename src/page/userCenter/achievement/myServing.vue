// 我的任职
<template>
  <div class="myServing">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      任职列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p class="black border-1pxTop">聘任机构</p>
      <span>任职名称、任职属性</span>
      <span>届期：1    任期：0.5</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyServing',
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
      textList: ['时间范围', '任职类型', '任职属性']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ServingDetail'})
    }
  }
}
</script>
