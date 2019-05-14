// 项目查询
<template>
  <div class="PlanRelease">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        type="selection"
        :data="item"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <p class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <div class="formCell">
          <span class="resTime">开始时间：2017.08.12</span>
          <span class="resTime">审核日期：2018.03.13</span>
        </div>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">修改</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>

    <p class="addNewOne" @click="jump"></p>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'PlanRelease',
  data () {
    return {
      textList: ['时间范围', '计划状态', '项目类别', '项目计划'],
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
      ],
      multiple: []
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'addPlan'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.PlanRelease
  padding-bottom .3rem
  margin 0 .06rem
  .addNewOne
    background-image url('../../../common/image/newDetail.png')
    height 40px
    width 40px
    background-size 40px
    display inline-block
    position fixed
    right 24px
    bottom 39px
</style>
