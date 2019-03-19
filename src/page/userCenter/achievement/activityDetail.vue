// 我的活动--查看
<template>
  <div class="activityDetail">
    <div class="base-message">
      <div class="base-left">
        <p class="plane">项目名称</p>
        <p class="black">
          单位级课研究20170511
        </p>
        <p class="plane">主办学科</p>
        <p class="black">内分泌科</p>

        <p class="plane">举办时间</p>
        <p class="black">
          2018.09.08－2018.10.11
        </p>
        <p class="plane">举办地点</p>
        <p class="black">上海市闸北区西藏北路22号</p>
      </div>

      <div class="base-right">
        <div class="form-cell">
          <p class="label">项目负责人:</p>
          <p class="j-input">项目负责人</p>
        </div>
        <div class="form-cell">
          <p class="label">参加对象:</p>
          <p class="j-input">参加对象</p>
        </div>
        <div class="form-cell">
          <p class="label">项目级别:</p>
          <p class="j-input">项目级别</p>
        </div>
        <div class="form-cell">
          <p class="label">是否收费:</p>
          <p class="j-input">是否收费</p>
        </div>
        <div class="form-cell">
          <p class="label">收费标准:</p>
          <p class="j-input">收费标准</p>
        </div>
        <div class="form-cell">
          <p class="label">专家人数:</p>
          <p class="j-input">专家人数</p>
        </div>
        <div class="form-cell">
          <p class="label">理论收费总额:</p>
          <p class="j-input">理论收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">实际收费总额:</p>
          <p class="j-input">实际收费总额</p>
        </div>
        <div class="form-cell">
          <p class="label">参加人数:</p>
          <p class="j-input">参加人数</p>
        </div>
        <div class="form-cell">
          <p class="label">外省人数:</p>
          <p class="j-input">外省人数</p>
        </div>
        <div class="form-cell">
          <p class="label">外院人数:</p>
          <p class="j-input">外院人数</p>
        </div>
        <div class="form-cell">
          <p class="label">演讲PPT:</p>
          <p class="j-input">演讲PPT</p>
        </div>
        <div class="form-cell">
          <p class="label">活动签到:</p>
          <p class="j-input">活动签到</p>
        </div>
        <div class="form-cell">
          <p class="label">活动照片:</p>
          <p class="j-input">活动照片</p>
        </div>
      </div>
    </div>

    <div class="review">
      <div class="">
        <p>上传通知书</p>
        <button>预览</button>
      </div>
      <div class="">
        <p>上传议程</p>
        <button>预览</button>
      </div>
      <div class="">
        <p>专家名单</p>
        <button>预览</button>
      </div>
    </div>
    <CTitle>主办会议预算</CTitle>
    <Collaspe name="会场费用" right="分项合计：882.34">
      <JTable :data="tableList">
        <table-colums label="序号" prop="index"/>
        <table-colums label="科目名称" prop="name"/>
        <table-colums label="单价" prop="price"/>
        <table-colums label="数量" prop="num"/>
        <table-colums label="价格" prop="money"/>
        <table-colums label="备注" prop="remarks"/>
      </JTable>
    </Collaspe>
    <Collaspe name="住宿费用" right="分项合计：882.34"></Collaspe>
    <Collaspe name="专家费用" right="分项合计：882.34"></Collaspe>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
import CTitle from '@/components/title/title'
import Collaspe from '@/components/collaspe/collaspe'
import JTable from '@/components/table/table'
import TableColums from '@/components/table/table-colums'
export default {
  name: 'ActivityDetail',
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
    Collaspe,
    TableColums,
    JTable
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.activityDetail >>> .j-table
  tr
    td
      border-bottom 1px solid rgba(0,0,0,0.50)
.activityDetail
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
  .review
    display flex
    justify-content space-between
    div
      flex 1
      margin-right 2px
      height 70px
      background white
      text-align center
      &:last-child
        margin 0
      p
        font-size: 14px;
        color: #333333;
        font-weight 400
        margin 10px 0
      button
        max-width 100px
        width 84.5%
        height 30px
        font-size: 14px;
        color: #FFFFFF;
        background: #2873FF;
        border-radius: 6px;
</style>
