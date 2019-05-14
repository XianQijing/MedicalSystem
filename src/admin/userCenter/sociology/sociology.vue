<template>
  <div class="sociology">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      信息列表
    </c-title>

    <div class="card-wapper">
      <checkall v-model="test">
        <card
          v-for="(item, index) in messageList"
          :key="index"
          :status="item.type"
          :time="item.time"
          type="selection"
          :data="item"
          >
          <p class="no border-1pxLeft">NO：{{item.name}}</p>
          <span class="black">陈升息－眼科、副主任医师、医生</span>
          <span>15221135677、硕士研究生</span>
          <span>登录次数：362</span>
          <span class="resTime">注册时间：2018.09.23 13:51</span>
          <div style="text-align:center">
            <JButton type="primary" v-if="item.type === '通过'"  round @click="jump('详情')">详情</JButton>
            <JButton type="primary" v-if="item.type === '审核中'" round @click="jump('审核')">审核</JButton>
          </div>
        </card>
        <JButton slot="button" type="danger" @click="stop('删除')">删除</JButton>
      </checkall>
    </div>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'Sociology',
  data () {
    return {
      test: [],
      keshi: 'sf',
      textList: ['时间范围', '任职类别', '所属科室', '任职属性', '审核状态'],
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
      ]
    }
  },
  methods: {
    // 路由跳转
    jump (form) {
      this.$router.push({name: 'Reviewed', params: {from: form}})
    },
    stop (type) {
      if (this.test.length > 0) {
        this.$MessageBox('确认删除所选任职', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }).then(() => {

        }).catch(() => {

        })
      }
    }
  },
  components: {
    Checkall
  }
}
</script>

<style lang="stylus" scoped>
.sociology
  margin 0 .06rem
  padding-bottom .3rem
</style>
