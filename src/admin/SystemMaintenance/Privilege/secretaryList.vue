// 科研秘书列表
<template>
  <div class="secretaryList">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :aType="item.type"
        type="selection"
        :data="item"
        :time="false"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <span class="border-1px">项目类别</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump">修改</button>
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
import Popup from '@/components/popup/popup2'
export default {
  name: 'secretaryList',
  data () {
    return {
      textList: ['时间范围', '选择学历', '选择职称'],
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
          type: '通过',
          dayin: '已打印'
        }
      ],
      multiple: []
    }
  },
  components: {
    Card,
    Checkall,
    Popup
  },
  methods: {
    jump () {
      this.$router.push({name: 'AdminMessage'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.secretaryList >>> .card
  margin 0
  margin-bottom 10px
  .card-content
    margin 0
    border none
    padding 0
    .card-white
      margin 0
.secretaryList
  padding-bottom 20px
  .comTitle
    margin 0
  .checkAll
    .abtn
      background: #2873FF;
      border-radius: .06rem
      font-size: .14rem;
      color: #FFFFFF;
      width 1rem
      height .3rem
      margin 0 auto
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    .no
      border-1pxLeft(#D3D3D3)
      padding-left 10px
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .black
      margin-top 15px
      font-size: 16px
    .border-1px
      border-1px(#d3d3d3)
      padding-bottom 15px
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
