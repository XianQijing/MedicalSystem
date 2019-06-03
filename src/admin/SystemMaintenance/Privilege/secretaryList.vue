// 科研秘书列表
<template>
  <div class="secretaryList">
    <CTitle :screen="true" :textList="textList">信息列表</CTitle>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        type="selection"
        :data="item"
        >
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <span class="border-1px">项目类别</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump">修改</JButton>
        </div>
      </card>
      <button slot="button" class="use">启用</button>
      <button slot="button" class="stop">停用</button>
      <button slot="button" class="delete">删除</button>
    </checkall>
  </div>
</template>

<script>
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
.secretaryList
  padding-bottom 20px
  .delete, .use, .stop
    width 58px
    color white
    height 30px
    font-size 14px
  .delete
    background: $red
  .use
    background $green
  .stop
    background $orange
</style>
