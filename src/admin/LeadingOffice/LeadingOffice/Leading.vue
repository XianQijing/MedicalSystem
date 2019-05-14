<template>
  <div class="Leading">
    <CTitle :screen="true" :textList="textList">科研项目</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <span class="black">负责人－所属科室</span>
      <p class="black border-1pxTop">
        项目名称
      </p>
      <span>项目类别</span>
      <span>项目计划</span>
      <span class="resTime">结题项目时间范围：2017.08.12 - 2018.09.01</span>
      <table>
        <tr>
          <th>项目余额</th>
          <th>匹配余额</th>
          <th>其他余额</th>
        </tr>
        <tr>
          <td>2000.00</td>
          <td>2000.00</td>
          <td>2000.00</td>
        </tr>
      </table>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'Leading',
  data () {
    return {
      textList: ['时间范围', '经费来源', '所属学科'],
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
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'DeclareDetail', query: {msg: '查看详情'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Leading >>> .comTitle
  margin 0
.Leading
  margin 0 6px
  table
    width 100%
    text-align center
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    margin-bottom 10px
    th
      background #003baa
      height 40px
      color white
      font-size 12px
    td
      height 26px
      font-size 12px
      color #999
</style>
