// 成果登记
<template>
  <div class="registrationOfAchievements">
    <CTitle :screen="true" :textList="textList">登记列表</CTitle>

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
        <span class="black">申请人-所属单位</span>
        <span>完成人-完成人属性、完成人单位、单位排名</span>
        <p style="padding: 15px 0" class="black border-1pxTop">
          成果名称
        </p>
        <span>成果类别、颁证机关</span>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump('查看详情')">查看</button>
          <button slot="button" class="btn" @click="jump">返回上一步</button>
        </div>
      </card>
      <button slot="button" class="delete" @click="stop('删除')">删除</button>
    </checkall>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'RegistrationOfAchievements',
  data () {
    return {
      textList: ['时间范围', '成果类别', '所属学科', '审核状态'],
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
    CTitle,
    Card,
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'SAndTRegistration'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.registrationOfAchievements >>> .comTitle
  margin 0
.registrationOfAchievements
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
    .btn
      margin-left 5px
      font-size: 14px;
      color: #2873FF;
      background: #C6DAFF;
      border-radius: 6px;
      width 100px
      height 30px
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
    .two
      display flex
      justify-content space-between
  .delete
    width 58px
    color white
    height 30px
    background: #FD4D4D
    font-size 14px
</style>
