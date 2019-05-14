<template>
  <div class="WatchData">
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>
      <checkall v-model="multiple">
        <card
          v-for="(item, index) in messageList"
          :key="index"
          type="selection"
          :data="item"
          >
          <p class="no border-1pxLeft">NO：{{item.name}}</p>
          <span class="black">申请人-所属单位</span>
          <span>项目类别</span>
          <span>项目计划</span>
          <div style="text-align:center">
            <JButton type="primary" round @click="jump">修改</JButton>
          </div>
        </card>
        <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
      </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'WatchData',
  data () {
    return {
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '审核状态'],
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
      this.$router.push({name: 'MsgDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.WatchData
  padding-bottom .3rem
  margin 0 .06rem
</style>
