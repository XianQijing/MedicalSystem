<template>
  <div class="II">
    <c-title
      :screen="true"
      screenText="筛选"
      :textList="textList">
      学分列表
    </c-title>

    <div class="card-wapper">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <span>闸北中心医院、主任医师</span>
        <p class="black border-1pxTop">项目名称</p>
        <div class="two">
          <span>项目编号：283746283</span>
          <span>证书编号：283746283</span>
        </div>
        <div class="two">
          <span>举办形式：会议</span>
          <span>授予学分：12</span>
        </div>
        <div class="two">
          <span>二级学科：内科</span>
          <span>三级学分：消化内科</span>
        </div>
        <span class="resTime">项目主办单位：闸北中心医院</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="jump('查看详情')">查看</JButton>
          <JButton v-if="item.type !== '通过'" type="primary" plain round @click="jump('修改详情')">修改</JButton>
        </div>
      </card>
    </div>
    <!--  -->
    <!-- <popup :toShow="popShow" @close="screen">
      <popup-data :selectList="selectList"></popup-data>
    </popup> -->
  </div>
</template>

<script>
export default {
  name: 'II',
  data () {
    return {
      // keshi: 'sf',
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
          type: '建议修改'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '建议修改'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        }
      ],
      textList: ['时间范围', '学分属性', '所属科室', '审核状态'],
      selectList: {
        time: [5],
        belong: ['眼科', '普通外科', '肝胆外科', '心胸外科'],
        eduation: [7],
        degree: [4],
        titles: [8],
        levels: [0],
        search: [1]
      }
    }
  },
  methods: {
    // 路由跳转
    jump (name) {
      this.$router.push({name: 'CreditDetail', params: {name: name}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.II
  .two
    display flex
    justify-content space-between
    font-size: 14px;
    color: #333333;
</style>
