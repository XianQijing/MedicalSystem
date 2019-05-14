<template>
  <div class="Cooperation">
    <CTitle :screen="true" :textList="textList">科研合作</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <!-- <p slot="type" style="height:100%">{{item.type}}</p> -->
      <span class="black">负责人－所属科室</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
      </p>
      <span>项目计划</span>
      <div class="formCell">
        <span>合作申请人:陈阿斌</span>
        <span>合作经费:</span>
      </div>
      <span class="resTime">审核日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'Cooperation',
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
      this.$router.push({name: 'CooperationDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Cooperation >>> .comTitle
  margin 0
.Cooperation
  margin 0 6px
</style>
