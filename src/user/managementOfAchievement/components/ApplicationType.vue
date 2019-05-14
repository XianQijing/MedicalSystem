// 申请状态查询
<template>
  <div class="ApplicationType">
    <CTitle :screen="true" :textList="textList">成果列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <span class="black">申报人－眼科</span>
      <p class="black border-1pxTop">
        专利名称
      </p>
      <span>专利分类</span>
      <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'ApplicationType',
  data () {
    return {
      textList: ['时间范围', '著作属性', '著作类型', '所属学科', '审核状态'],
      multiple: [],
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
          type: '通过'
        }
      ]
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'ApplicationTypeDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ApplicationType
  .two
    display flex
    justify-content space-between
</style>
