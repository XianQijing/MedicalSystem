<template>
  <div class="myFundsDetail">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">计划名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">发布单位</p>
        <p class="black">闸北中心医院</p>
      </div>
      <div class="base-right">
        <div class="form-cell">
          <p class="label">联系人</p>
          <p class="J-input" >联系人</p>
        </div>
        <div class="form-cell">
          <p class="label">联系办公室</p>
          <p class="J-input" >联系办公室</p>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱</p>
          <p class="J-input" >电子邮箱</p>
        </div>
        <div class="form-cell">
          <p class="label">联系电话</p>
          <p class="J-input" >联系电话</p>
        </div>
        <div class="form-cell">
          <p class="label">开始时间</p>
          <p class="J-input" >开始时间</p>
        </div>
        <div class="form-cell">
          <p class="label">截止时间</p>
          <p class="J-input" >截止时间</p>
        </div>
      </div>
    </div>
    <Collaspe name="第一期经费额度">
    <j-table :data="tableList">
      <table-colums label="项目经费" prop="a"/>
      <table-colums label="匹配经费" prop="b"/>
      <table-colums label="其他经费" prop="d"/>
    </j-table>
    <div class="form-cell">
      <p class="label">到款经费时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    <div class="form-cell">
      <p class="label">到款入账时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    </Collaspe>
    <Collaspe name="第二期经费额度">
      <j-table :data="tableList">
      <table-colums label="项目经费" prop="a"/>
      <table-colums label="匹配经费" prop="b"/>
      <table-colums label="其他经费" prop="d"/>
    </j-table>
    <div class="form-cell">
      <p class="label">到款经费时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    <div class="form-cell">
      <p class="label">到款入账时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    </Collaspe>
    <Collaspe name="第三期经费额度">
      <j-table :data="tableList">
      <table-colums label="项目经费" prop="a"/>
      <table-colums label="匹配经费" prop="b"/>
      <table-colums label="其他经费" prop="d"/>
    </j-table>
    <div class="form-cell">
      <p class="label">到款经费时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    <div class="form-cell">
      <p class="label">到款入账时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    </Collaspe>
    <Collaspe name="第四期经费额度">
      <j-table :data="tableList">
      <table-colums label="项目经费" prop="a"/>
      <table-colums label="匹配经费" prop="b"/>
      <table-colums label="其他经费" prop="d"/>
    </j-table>
    <div class="form-cell">
      <p class="label">到款经费时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    <div class="form-cell">
      <p class="label">到款入账时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    </Collaspe>
    <Collaspe name="第五期经费额度">
      <j-table :data="tableList">
      <table-colums label="项目经费" prop="a"/>
      <table-colums label="匹配经费" prop="b"/>
      <table-colums label="其他经费" prop="d"/>
    </j-table>
    <div class="form-cell">
      <p class="label">到款经费时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    <div class="form-cell">
      <p class="label">到款入账时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    </Collaspe>
    <Collaspe name="第六期经费额度">
      <j-table :data="tableList">
      <table-colums label="项目经费" prop="a"/>
      <table-colums label="匹配经费" prop="b"/>
      <table-colums label="其他经费" prop="d"/>
    </j-table>
    <div class="form-cell">
      <p class="label">到款经费时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    <div class="form-cell">
      <p class="label">到款入账时间:</p>
      <p class="J-input" >2018.09.23 12:53</p>
    </div>
    </Collaspe>

    <div class="bottom">
      <span>项目到款总额</span>
      <span>44454.45</span>
    </div>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'MyFundsDetail',
  data () {
    return {
      tableList: [
        {
          a: 222,
          b: 333,
          d: 444
        }
      ]
    }
  },
  components: {
    Collaspe,
    JTable,
    TableColums
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.myFundsDetail
  padding 10px 6px
  width 100%
  box-sizing border-box
  .base-message
    width 100%
    display flex
    margin-bottom 10px
    div
      height 166px
    .base-left
      background white
      padding 10px
      box-sizing border-box
      margin-right 2px
      flex 1 1 121px
      p
        margin-bottom 10px
        text-align center
      .plane
        font-size 12px
      .black
        font-weight 700
        font-size 16px
        line-height 20px
    .base-right
      flex 1 1 240px
      .form-cell
        form-cell-left(12px)
        margin-bottom 2px
        .J-input
          font-size: 12px;
          color: #999999;
  .bottom
    height 30px
    color white
    // width 100%
    line-height 30px
    font-size 14px;
    background: #003BAA;
    box-sizing border-box
    padding 0 6px
    position fixed
    bottom 0
    left 6px
    right 6px
    span:last-child
      float right
.j-table
  margin-bottom 2px
.form-cell
  form-cell-left(12px)
  margin-bottom 2px
  .J-input
    font-size: 12px;
    color: #999999;
</style>
