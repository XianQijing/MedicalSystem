// 科研合作
<template>
  <div class="ScientificResearchCooperation">
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
        <p style="padding: 15px 0" class="black border-1pxTop">
          会议名称
        </p>
        <span>论文题目、组织单位名称</span>
        <div class="formCell">
          <span>合作申请人:陈阿斌</span>
          <span>合作经费:20000.00</span>
        </div>
        <span class="resTime">会议地点：会议地点</span>
        <div style="text-align:center" v-if="item.type !== '审核中'">
          <button slot="button" class="abtn" @click="jump('查看详情')">查看</button>
          <button slot="button" class="abtn btn">返回上一步</button>
        </div>
        <div style="text-align:center" v-if="item.type === '审核中'">
          <button slot="button" class="abtn" @click="jump('交流审核')">审核</button>
        </div>
      </card>
      <button slot="button" class="delete" @click="stop('删除')">删除</button>
    </checkall>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'ScientificResearchCooperation',
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
    jump (msg) {
      this.$router.push({name: 'CooperationAudit', query: {msg: msg}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ScientificResearchCooperation
  padding-bottom 20px
  .checkAll
    margin 0 6px
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      // display block
      margin 0 auto
      &.btn
        margin-left 5px
        font-size: 14px;
        color: #2873FF;
        background: #C6DAFF;
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
      color: #333333;
    .resTime
      font-size: 12px;
      color: #999999;
  .delete
    width 58px
    color white
    height 30px
    background: #FD4D4D
    font-size 14px
</style>
