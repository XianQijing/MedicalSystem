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
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">申请人-所属单位</span>
      <span>项目类别</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">审核</JButton>
      </div>
    </card>
  </div>
</template>

<script>
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
  padding-bottom .3rem
  .card, .comTitle
    margin 0 .06rem
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
