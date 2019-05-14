// 介绍信查询及打印
<template>
  <div class="IntroductoryLetterSearch">
    <CTitle :screen="true" :textList="textList">介绍信列表</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>作者姓名-作者属性</span>
      <p class="black border-1pxTop">
        论文题目
        <span class="did">已打印</span>
      </p>
      <span>论文类别、期刊名</span>
      <span class="resTime">审核时间：2018.09.01 12:00</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
        <JButton type="primary" round plain @click="jump">重新打印</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'IntroductoryLetterSearch',
  data () {
    return {
      textList: ['时间范围', '作者属性', '论文类别', '审核状态', '打印状态'],
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
  methods: {
    jump () {
      this.$router.push({name: 'IntroductoryLetterDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.IntroductoryLetterSearch
  .did
    border: 1px solid #999999;
    border-radius: 4px;
    font-size: 9px!important
    color: #999999!important
    height 20px
    width 36px
    line-height 20px
    float right
    text-align center
</style>
