// 审核状态查询--打印
<template>
  <div class="StatusPrinting">
    <div class="formCell">
      <p class="form-label">项目名称:</p>
      <p class="form-desc">项目名称</p>
    </div>
    <div class="formCell">
      <p class="form-label">立项时间:</p>
      <p class="form-desc">2018.09.01</p>
    </div>
    <CTitle>学术论文列表</CTitle>

    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        type="selection"
        :data="item"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">
          论文题目
          <span class="did" :class="{'not': item.dayin === '未打印'}">{{item.dayin}}</span>
        </span>
        <span>论文属性、期刊名称</span>
        <div class="two">
          <span>支出金额：200.00</span>
          <span>经费归属：项目经费</span>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">打印</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'StatusPrinting',
  data () {
    return {
      multiple: [],
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
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中',
          dayin: '已打印'
        }
      ]
    }
  },
  props: {
    value: {
      type: Boolean
    }
  },
  components: {
    Checkall
  },
  methods: {
    stop () {
      this.$emit('input', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
.StatusPrinting
  padding-bottom .2rem
  .checkAll
    .did
      border: 1px solid #999999;
      border-radius: 4px;
      font-size: 9px!important
      color: #999999
      height 20px
      width 36px
      line-height 20px
      float right
      text-align center
      &.not
        color: #FFFFFF!important
        background: #555555;
        border none
  .formCell
    padding 0 10px
    background white
    height 30px
    align-items center
    font-size: 14px;
    color: #333333;
    .form-desc
      font-size: 14px;
      color: #999999;
    &:first-child
      margin-bottom 2px
      margin-top 10px
</style>
