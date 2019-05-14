// 项目查询
<template>
  <div class="TaskGuide">
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
          <span>项目类别</span>
          <span>项目计划</span>
          <span class="resTime">批准日期：2018.09.01 12:00</span>
          <div style="text-align:center">
            <JButton type="primary" round @click="jump">详情</JButton>
            <JButton type="primary" round plain>修改</JButton>
          </div>
        </card>
          <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
      </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'TaskGuide',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '显示状态'],
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
          type: '审核中',
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
      this.$router.push({name: 'GuideRelease'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.TaskGuide
  padding-bottom .3rem
  margin 0 .06rem
</style>
