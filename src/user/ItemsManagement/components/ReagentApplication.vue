// 试剂耗材--申请事项
<template>
  <div class="ReagentApplication">
    <div class="header">
      <JInput placeholder="下拉选择" type="select"/>
      <JInput placeholder="下拉选择" type="select"/>
    </div>
    <CTitle>试剂耗材申请 <span slot="float" style="color: #555555;">{{page}}/2</span></CTitle>
    <div v-show="page === 1">
      <div class="wrapper">
        <p class="title">申请信息</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">产品名称：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">生产厂商：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">销售商：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">品牌：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">规格：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">数量：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">协商单价：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">采购量：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">采购总价：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">财务编号：</p>
          <JInput placeholder="下拉选择"/>
        </div>
      </div>
    </div>

    <div v-show="page === 2">
      <div class="wrapper">
        <div class="item-wrapper">
          <p class="item-title">申购原因：</p>
          <textarea></textarea>
        </div>
      </div>
      <div class="wrapper margin">
        <div class="item-wrapper">
          <p class="item-title">产品用途：</p>
          <textarea></textarea>
        </div>
      </div>
    </div>

    <div class="btn">
      <button class="butto" v-show="page === 1" @click="pageChange('next')">下一项</button>
      <button class="butto up" v-show="page === 2" @click="pageChange('up')">上一项</button>
    </div>
    <div class="button-cell" v-show="page === 2">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  namw: 'ReagentApplication',
  data () {
    return {
      page: 1,
      show: false
    }
  },
  methods: {
    pageChange (msg) {
      if (msg === 'next') {
        this.page++
      } else {
        this.page--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ReagentApplication
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 0 10px 0 10px
    position relative
    .title
      font-size 14px;
      color: #333333;
      padding-top 10px
    .item-wrapper
      border-1px(#D3D3D3)
      padding 15px 10px
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
      .a
        display block
      .JRadioGrounp
        display inline-block
        float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top 10px
        padding 10px
        box-sizing border-box
        height 80px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
.margin
  margin-top 10px
.up
  background: #C6DAFF;
  color: #2873FF;
.header
  display flex
  justify-content space-between
  background white
  padding 10px 12px
  margin-top 10px
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50)
  .J-input
    border: 1px solid #FD4D4D;
    border-radius: 6px;
    width 49%
    min-width 100px
    height 30px
</style>
