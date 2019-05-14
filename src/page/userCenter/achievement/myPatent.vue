// 我的专利
<template>
  <div class="myPatent">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      专利列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <p style="padding: 15px 0" class="black border-1pxTop">专利名称</p>
      <span>专利号</span>
      <div class="three">
        <span>专利权利人：陈阿斌</span>
        <span>专利类型：发明专利</span>
      </div>
      <span class="reset">审核日期：2018.04.22</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyPatent',
  data () {
    return {
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
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        }
      ],
      textList: ['时间范围', '专利类别']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'PatentDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.myPatent
  .three
    display flex
    justify-content space-between
    span
      font-size: 13px;
      color: #333333;
  .reset
    font-size: 12px;
    color: #999999;
</style>
