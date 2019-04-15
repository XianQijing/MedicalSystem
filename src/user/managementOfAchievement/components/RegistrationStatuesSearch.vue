// 成果登记状态查询
<template>
  <div class="RegistrationStatuesSearch">
    <CTitle :screen="true" :textList="textList">成果列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        >
        <div slot="time">2018.04.12 14:56</div>
        <p class="no">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申报人－眼科</span>
        <span>完成人-完成人属性、完成人单位、排名</span>
        <p style="padding: 15px 0" class="black border-1pxTop">
          成果名称
        </p>
        <span>成果类别</span>
        <span>颁证机关:</span>
        <span class="resTime">审核日期：2018.04.22</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">查看</button>
        </div>
      </card>
  </div>
</template>

<script>
import Card from '@/components/card/card'
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'RegistrationStatuesSearch',
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
    Card,
    Checkall
  },
  methods: {
    jump () {
      this.$router.push({name: 'RegistrationStatuesDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.RegistrationStatuesSearch >>> .comTitle
  margin 0
.RegistrationStatuesSearch
  // padding-bottom 20px
  .card
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
        // padding-left 10px
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    .apply
      float right
      font-size: 12px;
      color: #555555;
      vertical-align top
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 17px
    .black
      margin-top 15px
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
