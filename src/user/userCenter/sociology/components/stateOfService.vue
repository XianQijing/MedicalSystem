<template>
  <div class="stateOfService">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      任职登记
    </c-title>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        type="selection"
        :data="item"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <p style="padding: 15px 0" class="black border-1pxTop">聘任机构</p>
        <div class="two">
          <span>聘任时间：2018.01</span>
          <span>任职类型：专委会任职</span>
        </div>
        <div class="two">
          <span>任期：0.5</span>
          <span>审核日期：2018.03.13 13:45</span>
        </div>
        <button slot="button" class="abtn" @click="jump('查看详情')">查看</button>
      </card>
      <button slot="button" class="delete" @click="stop('删除')">删除</button>
    </checkall>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'StateOfService',
  data () {
    return {
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
          type: '通过'
        }
      ],
      textList: ['时间范围', '任职类别', '所属科室', '任职属性', '审核状态']
    }
  },
  components: {
    Card,
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'Reviewed', params: {from: '查看'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.stateOfService
  padding-bottom 30px
  .checkAll
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      display block
      margin 0 auto
    .no, .user
        padding-left 10px
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    .no
      border-1pxLeft(#D3D3D3)
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 17px
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
    .two
      display flex
      justify-content space-between
      font-size: 14px;
      color: #333333;
  .delete
    width 58px
    color white
    height 30px
    background: #FD4D4D
    font-size 14px
</style>
