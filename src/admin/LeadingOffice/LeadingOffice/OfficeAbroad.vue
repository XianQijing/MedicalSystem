<template>
  <div class="OfficeAbroad">
    <CTitle :screen="true" :textList="textList">出国交流</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <span class="black">负责人－所属科室</span>
      <p class="black border-1pxTop">
        项目名称
      </p>
      <span>项目计划</span>
      <span class="resTime">结题项目时间范围：2017.08.12 - 2018.09.01</span>
      <div class="formCell">
        <span class="resTime">离院日期:2018.08.12</span>
        <span class="resTime">批准日期:2018.09.11</span>
      </div>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'OfficeAbroad',
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
      this.$router.push({name: 'OfficeAbroadDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.OfficeAbroad >>> .comTitle
  margin 0
.OfficeAbroad
  margin 0 6px
</style>
