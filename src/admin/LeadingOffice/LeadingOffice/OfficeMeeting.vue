<template>
  <div class="OfficeMeeting">
    <CTitle :screen="true" :textList="textList">国内会议</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">负责人－所属科室</span>
      <p class="black border-1pxTop">
        项目名称
      </p>
      <span>项目计划</span>
      <span class="resTime">会议地点：上海市闸北中兴路778号</span>
      <span class="resTime">审核日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'OfficeMeeting',
  data () {
    return {
      textList: ['时间范围', '经费来源', '所属学科'],
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
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'OfficeMeetingDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.OfficeMeeting >>> .comTitle
  margin 0
.OfficeMeeting
  margin 0 6px
</style>
