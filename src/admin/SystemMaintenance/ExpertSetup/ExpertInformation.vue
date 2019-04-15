// 专家信息管理
<template>
  <div class="ExpertInformation">
    <CTitle :screen="true" :textList="textList">项目列表</CTitle>

    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        type="selection"
        :data="item"
        :aType="item.type"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属科室</span>
        <span>论文题目、组织单位名称</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">审核</button>
        </div>
      </card>
      <button slot="button" class="use">启用</button>
      <button slot="button" class="stop">停用</button>
      <button slot="button" class="delete">删除</button>
    </checkall>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'ExpertInformation',
  data () {
    return {
      textList: ['时间范围', '所属科室', '审核状态'],
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
    Card,
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'ExpertEdit'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ExpertInformation
  padding-bottom 20px
  margin 0 6px
  .comTitle
    margin 0
  .checkAll
    .abtn
      background: #2873FF;
      border-radius: .06rem;
      font-size: .14rem;
      color: #FFFFFF;
      width 1.00rem
      height .30rem
      // display block
      margin 0 auto
    .no, .user
        padding-left 10px
        font-size: .12rem
        color: #555555;
        display inline-block
        vertical-align top
    .no
      border-1pxLeft(#D3D3D3)
    span
      display block
      font-size: .14rem
      color: #333333;
      margin-bottom 17px
    .black
      margin-top 15px
      font-size: .16rem
    .resTime
      font-size: .12rem
      color: #999999;
  .delete, .use, .stop
    width 58px
    color white
    height 30px
    font-size 14px
  .delete
    background: #FD4D4D
  .use
    background #45c186
  .stop
    background #f9712c
</style>
