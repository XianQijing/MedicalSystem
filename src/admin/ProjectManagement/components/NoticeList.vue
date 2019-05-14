// 通知列表
<template>
  <div class="NoticeList">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      通知列表
    </c-title>
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        type="selection"
        :status="item.type"
        :time="item.time"
        :data="item"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <div style="text-align:center">
          <button slot="button" class="abtn" @click="jump('WatchNotice')">查看</button>
          <button slot="button" class="abtn blue" @click="jump('EditNotice')">编辑</button>
        </div>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump('WatchNotice')">查看</JButton>
          <JButton type="primary" round plain @click="jump('EditNotice')">编辑</JButton>
        </div>
      </card>
      <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
    </checkall>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'NoticeList',
  data () {
    return {
      multiple: [],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '隐藏'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        }
      ],
      textList: ['时间范围']
    }
  },
  components: {
    Checkall
  },
  methods: {
    jump (name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style lang="stylus" scoped>
.NoticeList
  padding-bottom .2rem
</style>
