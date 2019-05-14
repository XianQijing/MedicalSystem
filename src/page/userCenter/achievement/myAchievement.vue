// 我的成果
<template>
  <div class="myAchievement">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      成果列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <span>完成人姓名-完成人属性、完成人单位、排名</span>
      <p class="black border-1pxTop">专利名称</p>
      <span>专利号</span>
      <span>颁证机关：机关名称占位</span>
      <span class="resTime">审核日期：2018.04.22</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyAchievement',
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
      textList: ['时间范围', '成果类别', '人员属性']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'AchievementDetail'})
    }
  }
}
</script>
