// 申报端口
<template>
  <div class="DeclarationPort">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
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
      <div class="formCell">
        <span class="resTime">起始时间：2017.08.12</span>
        <span class="resTime">截止时间：2017.08.12</span>
      </div>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">标书模版预览</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'DeclarationPort',
  data () {
    return {
      textList: ['时间范围', '项目类别', '项目计划', '计划状态'],
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
      this.$router.push({name: 'GuideRelease'})
    }
  }
}
</script>
