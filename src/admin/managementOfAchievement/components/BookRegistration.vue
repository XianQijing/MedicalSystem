// 著作登记
<template>
  <div class="BookRegistration">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>

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
        <span>著作权人-著作属性</span>
        <p class="black border-1pxTop">
          著作名称
        </p>
        <span>ISBN号、主要合作单位</span>
        <span>印数／字数／定价：34/34876/￥28.00</span>
        <span>出版年月／著作类型：2016.09/人民出版社</span>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">查看</JButton>
          <JButton type="primary" round plain @click="jump">返回上一步</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'BookRegistration',
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
      this.$router.push({name: 'ExamineRegistration'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.BookRegistration
  padding-bottom .3rem
    .two
      display flex
      justify-content space-between
</style>
