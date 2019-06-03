// 经费决算--查询
<template>
  <div class="FundsFinalAccountsDetail">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">项目类别</p>
        <p class="black">内分泌科</p>

        <p class="plane">项目计划</p>
        <p class="black">
          项目计划
        </p>
        <p class="plane">立项时间</p>
        <p class="black">2018.09.01 12:32:12</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">项目负责人:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">所属科室:</p>
          <p class="j-input">全体人员</p>
        </div>
        <div class="form-cell">
          <p class="label">项目来源:</p>
          <p class="j-input">项目来源</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">00902</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input">29384</p>
        </div>
        <div class="form-cell">
          <p class="label">经费总额:</p>
          <p class="j-input">2000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">3000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">匹配经费:</p>
          <p class="j-input">3000.00</p>
        </div>
        <div class="form-cell">
          <p class="label">其他经费:</p>
          <p class="j-input">100</p>
        </div>
        <div class="form-cell">
          <p class="label">项目周期:</p>
          <p class="j-input">1年</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input">2018.10.12</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input">状态1</p>
        </div>
      </div>
    </div>
    <CTitle>支出详情</CTitle>
    <card
      v-for="(item, index) in tableList"
      :key="index"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <p class="black">摘要：直接经费-设备费-购置费-设备费1</p>
      <JTable :data="tableList">
        <JTableColums label="拨款金额" prop="index"/>
        <JTableColums label="项目金额" prop="name"/>
        <JTableColums label="匹配金额" prop="price"/>
        <JTableColums label="其他金额" prop="index"/>
      </JTable>
      <JTable :data="tableList">
        <JTableColums label="使用金额" prop="index"/>
        <JTableColums label="项目金额" prop="name"/>
        <JTableColums label="匹配金额" prop="price"/>
        <JTableColums label="其他金额" prop="price"/>
      </JTable>
    </card>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
export default {
  name: 'FundsFinalAccountsDetail',
  data () {
    return {
      clickTab: 0,
      tableList: [
        {
          index: 2000.00,
          name: '2000.00',
          price: '2000.00',
          num: 2000.00,
          money: 2000.00,
          remarks: '2000.00',
          time: '2019.08.01'
        },
        {
          index: 2000.00,
          name: '2000.00',
          price: '2000.00',
          num: 2000.00,
          money: 2000.00,
          remarks: '2000.00',
          time: '2019.08.01'
        },
        {
          index: 2000.00,
          name: '2000.00',
          price: '2000.00',
          num: 2000.00,
          money: 2000.00,
          remarks: '2000.00',
          time: '2019.08.01'
        }
      ]
    }
  },
  components: {
    JTable,
    JTableColums
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundsFinalAccountsDetail
  padding 10px 6px
  .comTitle
    margin 0
  .base-message
    width 100%
    display flex
    margin-bottom 2px
    div
      // height 166px
    .base-left
      background white
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 119px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-weight 700
        font-size 16px
        line-height 20px
        margin-bottom 20px
    .base-right
      flex 2 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        &:last-child
          margin 0
        .j-input
          width 50%
          padding 0
          max-width 181px
          color: #999999;
          height 100%
          text-align right
          font-size 12px
          line-height 26px
  .card
    .j-table
      color white
      font-size: 14px;
      margin-top 4px
    .no, .user
      font-size: 12px;
      color: #555555;
      display inline-block
      vertical-align top
    .black
      margin-top 15px
      font-weight 700
      font-size: 16px;
      margin-bottom 11px
</style>
