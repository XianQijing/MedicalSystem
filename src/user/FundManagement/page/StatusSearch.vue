// 审核状态查询--查看
<template>
  <div class="StatusSearch">
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

    <div class="content">
      <span>本次审核信息</span>
      <p class="black">摘要占位</p>
      <p>用途占位</p>
      <div class="formCell">
        <p>报销金额：900.00</p>
        <p>项目金额：900.00</p>
      </div>
      <div class="formCell">
        <p>匹配金额：900.00</p>
        <p>其他金额：900.00</p>
      </div>
      <div class="formCell border-1px">
        <button>发票预览</button>
        <button>凭证预览</button>
      </div>
      <span class="last">详细说明：报销详细说明</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusSearch',
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
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.StatusSearch
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
  .content
    background white
    padding 15px 10px
    margin-top 10px
    p
      font-size: 14px;
      color: #333333;
      margin-top 15px
      &.black
        font-size 16px
    span
      font-size: 12px;
      color: #555555;
      &.last
        display block
        margin-top 15px
        font-size: 12px;
        color: #999999;
    .border-1px
      border-1px(#D3D3D3)
      padding 15px 0
      button
        border none
        background none
        font-size: 14px;
        color: #2873FF;
</style>
