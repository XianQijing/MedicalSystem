// 我的会议
<template>
  <div class="myMeeting">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      会议列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p class="black border-1pxTop">交流论文题目</p>
      <span>会议名称、主办单位</span>
      <div class="three">
        <span>经费来源：项目经费</span>
        <span>会议类型：国内会议</span>
      </div>
      <span class="reset">会议地点：会议地点占位</span>
      <JButton type="primary" round @click="jump">查看</JButton>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyMeeting',
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
      textList: ['时间范围', '会议类型', '经费来源']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'MeetingDetail'})
    }
  }
}
</script>
