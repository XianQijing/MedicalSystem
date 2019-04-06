// 重点学科
<template>
  <div class="KeyDisciplines">
    <div class="search">
      <JInput type="clearable" placeholder="搜索" v-model="search" :image="require('../../../common/image/cha.png')" width="14px">
        <img src="../../../common/image/Search.png" alt="">
      </JInput>
      <span>取消</span>
    </div>
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :aType="item.type"
      >
      <div slot="time">2018.04.12 14:56</div>
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <p slot="type" style="height:100%">{{item.type}}</p>
      <span class="black">申请人-所属单位</span>
      <span>项目类别</span>
      <div style="text-align:center">
        <button slot="button" class="abtn" @click="jump">审核</button>
      </div>
    </card>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Card from '@/components/card/card'
import JInput from '@/components/input/j-input'
export default {
  name: 'KeyDisciplines',
  data () {
    return {
      search: '',
      textList: ['时间范围', '审核状态'],
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
    CTitle,
    Card,
    JInput
  },
  methods: {
    jump () {
      this.$router.push({name: 'KeyDisciplinesExamine'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.KeyDisciplines >>> .J-input
  padding-right 0
  input
    width 80%
.KeyDisciplines
  padding-bottom 20px
  .card
    margin 0 6px
    .abtn
      background: #2873FF;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      width 100px
      height 30px
      margin 0 auto
      &.blue
        background #C6DAFF
        color:rgba(40,115,255,1);
        margin-left 10px
    .no, .user
        font-size: 12px;
        color: #555555;
        display inline-block
        vertical-align top
    span
      display block
      font-size: 14px;
      color: #333333;
      margin-bottom 15px
    .black
      margin-top 15px
      font-size: 16px;
    .border-1pxTop
      border-1pxTop(#D3D3D3)
      color: #333333;
    .resTime
      font-size: 12px;
      color: #999999;
  .search
    height 46px
    padding 8px
    background: #ffffff;
    box-sizing border-box
    img
      width 12.87px
      height 12.87px
    .J-input
      display inline-block
      height: 28px;
      border: 1px solid #2873ff;
      border-radius: 5px;
      width 85%
    span
      color: #2873ff
      font-size: 17px;
      // line-height 46px
      vertical-align middle
      margin-left 5px
</style>
