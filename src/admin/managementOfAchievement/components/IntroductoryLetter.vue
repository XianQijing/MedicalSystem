// 介绍信审核
<template>
  <div class="IntroductoryLetter">
    <CTitle :screen="true" :textList="textList">介绍信列表</CTitle>

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
        <span class="black">陈阿斌-第一作者、眼科</span>
        <p class="black border-1pxTop">
          论文题目
        </p>
        <span>论文类别、期刊名称</span>
        <div class="two">
          <span>是否收费：是</span>
          <span>收费标准：10</span>
        </div>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <div style="text-align:center" v-if="item.type === '通过'">
          <JButton type="primary" round @click="jump">查看</JButton>
          <JButton type="primary" round plain @click="jump">返回上一步</JButton>
        </div>
        <div style="text-align:center" v-if="item.type !== '通过'">
          <JButton type="primary" @click="jump">审核</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'IntroductoryLetter',
  data () {
    return {
      textList: ['时间范围', '作者属性', '成果类别', '所属学科'],
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
          type: '审核中'
        }
      ]
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'ExamineIntroductoryLetter'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.IntroductoryLetter
  padding-bottom .3rem
  .two
    display flex
    justify-content space-between
</style>
