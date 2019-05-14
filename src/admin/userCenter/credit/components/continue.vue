<template>
  <div class="continueCredit">
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
        >
        <p class="no">NO：{{item.name}}</p>
        <span class="black">陈升息－眼科、副主任医师、医生</span>
        <span>闸北中心医院、主任医师</span>
        <div class="two">
          <span>二级学科：内科</span>
          <span>三级学分：消化内科</span>
        </div>
        <button slot="button" class="abtn" @click="jump('审核详情')">审核</button>
      </card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContinueCredit',
  data () {
    return {
      textList: ['时间选择', '学历选择', '所属科室', '职称选择'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位'
        }
      ]
    }
  },
  methods: {
    // 路由跳转
    jump (name) {
      this.$router.push({name: 'ContinueDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.continueCredit
  .comTitle
    margin 0
  .card-wapper
    .two
      display flex
      justify-content space-between
      font-size: 14px;
      color: #333333;
      span
        margin-bottom 0!important
</style>
