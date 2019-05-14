// 形式审查
<template>
  <div class="FormalInspection">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        type="selection"
        :data="item"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <p style="padding: 15px 0" class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <span class="resTime">开始时间：2017.08.12</span>
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
  name: 'FormalInspection',
  data () {
    return {
      textList: ['时间范围', '所属科室', '研究类型', '项目类别', '项目计划', '审核状态'],
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
      this.$router.push({name: 'DeclareDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FormalInspection
  padding-bottom .3rem
  margin 0 .06rem
</style>
