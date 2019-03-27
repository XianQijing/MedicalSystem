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
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">项目来源:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">项目编号:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">财务编号:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">经费总额:</p>
          <p class="j-input">专家人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目经费:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">匹配经费:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">其他经费:</p>
          <p class="j-input">参加人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目周期:</p>
          <p class="j-input">外省人数</p>
        </div>
        <div class="form-cell">
          <p class="label">验收时间:</p>
          <p class="j-input">外院人数</p>
        </div>
        <div class="form-cell">
          <p class="label">项目状态:</p>
          <p class="j-input">演讲PPT</p>
        </div>
      </div>
    </div>
    <tabs v-model="clickTab">
      <tab title="总经费决算" name="0">
        <JTable :data="tableList">
          <JTableColums label="项目" prop="index"/>
          <JTableColums label="预算数" prop="name"/>
          <JTableColums label="实际数" prop="price"/>
          <JTableColums label="结余数" prop="index"/>
          <JTableColums label="备注" prop="price"/>
        </JTable>
      </tab>
      <tab title="项目经费决算" name="1">
        <JTable :data="tableList">
          <JTableColums label="项目" prop="index"/>
          <JTableColums label="预算数" prop="name"/>
          <JTableColums label="实际数" prop="price"/>
          <JTableColums label="结余数" prop="index"/>
          <JTableColums label="备注" prop="price"/>
        </JTable>
      </tab>
      <tab title="匹配经费决算" name="2">
        <JTable :data="tableList">
          <JTableColums label="项目" prop="index"/>
          <JTableColums label="预算数" prop="name"/>
          <JTableColums label="实际数" prop="price"/>
          <JTableColums label="结余数" prop="index"/>
          <JTableColums label="备注" prop="price"/>
        </JTable>
      </tab>
      <tab title="其他经费决算" name="3">
        <JTable :data="tableList">
          <JTableColums label="项目" prop="index"/>
          <JTableColums label="预算数" prop="name"/>
          <JTableColums label="实际数" prop="price"/>
          <JTableColums label="结余数" prop="index"/>
          <JTableColums label="备注" prop="money"/>
        </JTable>
      </tab>
    </tabs>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
import CTitle from '@/components/title/title'
import Tab from '@/components/tab/tab'
import Tabs from '@/components/tab/tabs'
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
export default {
  name: 'FundsFinalAccountsDetail',
  data () {
    return {
      clickTab: 0,
      tableList: [
        {
          index: 1,
          name: '场地租金',
          price: '300/天',
          num: 1,
          money: 300,
          remarks: '其他'
        },
        {
          index: 2,
          name: '场地租金',
          price: '300/天',
          num: 1,
          money: 300,
          remarks: '其他'
        },
        {
          index: 3,
          name: '场地租金',
          price: '300/天',
          num: 1,
          money: 300,
          remarks: '其他'
        }
      ]
    }
  },
  components: {
    JInput,
    CTitle,
    Tab,
    Tabs,
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
  .tabs
    margin-top 10px
  .j-table
    margin-top 10px
.FundsFinalAccountsDetail >>> .tabs
  .tab-pane
    width 23.5%
</style>
