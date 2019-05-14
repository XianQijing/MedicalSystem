// 转化查询
<template>
  <div class="conversionSearch">
    <CTitle :screen="true" :textList="textList">成果列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>著作权人-著作属性</span>
      <p class="black border-1pxTop">
        项目类别
      </p>
      <span>项目计划</span>
      <span>发明专利、实用专利</span>
      <span>二级学科：皮肤专业、三级学科：皮肤病专业</span>
      <span>国家级、区县级</span>
      <span>省市内先进、国际先进</span>
      <span>合作单位</span>
      <span>合作方式</span>
      <span>农业、生物新品种</span>
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
  name: 'ConversionSearch',
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
      this.$router.push({name: 'ExamineAndVerify'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.conversionSearch
  .two
    display flex
    justify-content space-between
</style>
