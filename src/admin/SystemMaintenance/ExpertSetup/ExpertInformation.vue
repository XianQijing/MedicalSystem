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
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属科室</span>
        <span>论文题目、组织单位名称</span>
        <div style="text-align:center">
        <JButton type="primary" round @click="jump">审核</JButton>
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
          type: '停用'
        }
      ]
    }
  },
  components: {
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
