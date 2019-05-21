// 仪器设备--状态查询及打印
<template>
  <div class="EquipmentStatues">
    <CTitle :screen="true" :textList="textList">状态列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      :status="item.type"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <p style="padding: 15px 0" class="black border-1pxTop">
        项目名称
        <span class="did" :class="{'not': item.dayin === '未打印'}">{{item.dayin}}</span>
      </p>
      <span>项目类别、申购设备名称</span>
      <span>项目计划</span>
      <span class="resTime">批准日期：2018.09.01 12:09</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" round plain>再次打印</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'EquipmentStatues',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '审核状态', '打印状态'],
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
      this.$router.push({name: 'EquipmentStatuesDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.EquipmentStatues
  padding-bottom 20px
  .card
    margin 0 6px
    .did
      border: 1px solid #999999;
      border-radius: 4px;
      font-size: 9px!important
      color: #999999
      height 20px
      width 36px
      line-height 20px
      float right
      text-align center
      &.not
        color: #FFFFFF;
        background: #555555;
        border none
</style>
