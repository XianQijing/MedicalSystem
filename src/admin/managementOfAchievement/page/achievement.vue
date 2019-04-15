// 成果转化
<template>
  <div class="achievement">
    <c-title>
      成果列表
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
        <span class="black">项目负责人</span>
        <p style="padding: 15px 0" class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <span>发明专利、实用专利</span>
        <span>二级学科：皮肤专业、三级学科：皮肤病专业</span>
        <span>国家级、区县级</span>
        <span>省市内先进、国际先进</span>
        <span>合作单位</span>
        <span>合作方式</span>
        <span>农业、生物新品种</span>
        <span class="resTime">转化时间：2018.09.01 12:09:32-2018.10.12 12:00:00</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">查看</button>
          <button slot="button" class="abtn" @click="jump">返回上一步</button>
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
  name: 'Achievement',
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
      this.$router.push({name: 'ExamineAndVerify'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.achievement
  padding-bottom 30px
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
      &:last-child
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
