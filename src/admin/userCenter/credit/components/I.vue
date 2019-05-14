<template>
  <div class="I">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      学分列表
    </c-title>

    <div class="card-wapper">
      <checkall v-model="test">
        <card
          v-for="(item, index) in messageList"
          :key="index"
          :status="item.type"
          type="selection"
          >
          <p class="no border-1pxLeft">NO：{{item.name}}</p>
          <p slot="type" style="height:100%">{{item.type}}</p>
          <span class="black">陈升息－眼科、副主任医师、医生</span>
          <span>闸北中心医院、主任医师</span>
          <p class="black border-1pxTop">项目名称</p>
          <div class="two">
            <span>项目编号：283746283</span>
            <span>证书编号：283746283</span>
          </div>
          <div class="two">
            <span>学分属性：省市级</span>
            <span>I类学分：12</span>
          </div>
          <span class="resTime">项目主办单位：闸北中心医院</span>
          <div style="text-align:center">
            <JButton v-if="item.type === '审核中'" type="primary" round  @click="jump('审核详情')">审批</JButton>
            <JButton v-if="item.type !== '审核中'" type="primary" round  @click="jump('查看详情')">查看</JButton>
            <JButton v-if="item.type !== '审核中'" type="primary" round plain>返回上一步</JButton>
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
  name: 'I',
  data () {
    return {
      keshi: 'sf',
      textList: ['时间范围', '学分属性', '所属科室', '性别选择', '职称选择', '审核状态'],
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
          type: '通过'
        }
      ],
      test: []
    }
  },
  methods: {
    // 路由跳转
    jump (name) {
      this.$router.push({name: 'CreditDetail', params: {name: name}})
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
    // JInput,
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.I
  padding-bottom .3rem
.auditing
  display flex
  justify-content center
  .abtn
    margin 0!important
</style>
