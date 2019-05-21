// 申报端口
<template>
  <div class="DisciplineDeclarationPort">
    <CTitle :screen="true" :textList="textList">申报列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black border-1px">申请人-所属单位</span>
      <span>项目类别</span>
      <span>项目类别</span>
      <span class="resTime">时间范围：2018.04.01 00:00 － 2018.06.01 00:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump('DeclareDetail')">下载标书模板</JButton>
        <JButton type="primary" v-if="item.type !== '申报结束'" round @click="jump('open')">申报开放</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'DisciplineDeclarationPort',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '申报状态'],
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
          type: '申报结束',
          dayin: '已打印'
        }
      ]
    }
  },
  methods: {
    jump (msg) {
      this.$router.push({name: msg})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.border-1px
  border-1px(#d3d3d3)
  padding-bottom .17rem
</style>
