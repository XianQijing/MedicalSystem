// 财务账号设置
<template>
  <div class="FinancialAccountSetting">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        type="selection"
        :data="item"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <p slot="type" style="height:100%">{{item.type}}</p>
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <span class="border-1pxTop">项目类别</span>
        <span>项目类别</span>
        <div style="text-align:center">
        <JButton type="primary" round @click="jump">修改</JButton>
        </div>
      </card>
      <button slot="button" class="delete">删除</button>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
import Popup from '@/components/popup/popup2'
export default {
  name: 'FinancialAccountSetting',
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
    Checkall,
    Popup
  },
  methods: {
    jump () {
      this.$router.push({name: 'DailySetting'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FinancialAccountSetting
  padding-bottom 20px
  .delete
    width 58px
    color white
    height 30px
    font-size 14px
    background: $red
</style>
