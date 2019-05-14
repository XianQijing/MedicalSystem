// 预算变更申请
<template>
  <div class="BudgetChange">
    <div class="select-wrapper formCell">
      <JInput type="select" placeholder="类别下拉选择"/>
      <JInput type="select" placeholder="项目下拉选择"/>
    </div>

    <div class="blue">
      <p class="title">合计</p>
      <div class="blue-wrapper">
        <div class="border-1px">
          <p class="all">总计经费</p>
          <p class="num">9000</p>
        </div>
        <div class="formCell">
          <div>
            <p class="desc">项目经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">匹配经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">其他经费</p>
            <p class="num">2000.00</p>
          </div>
        </div>
      </div>
    </div>

    <div class="green">
      <p class="title">直接经费</p>
      <div class="blue-wrapper">
        <div class="formCell">
          <div>
            <p class="desc">项目经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">匹配经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">其他经费</p>
            <p class="num">2000.00</p>
          </div>
        </div>
      </div>
      <div class="arrow">
        <span class="iconfont" @click="jump('直接经费')">&#xe7eb;</span>
      </div>
    </div>

    <div class="green">
      <p class="title">间接经费</p>
      <div class="blue-wrapper">
        <div class="formCell">
          <div>
            <p class="desc">项目经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">匹配经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p class="desc">其他经费</p>
            <p class="num">2000.00</p>
          </div>
        </div>
      </div>
      <div class="arrow">
        <span class="iconfont" @click="jump('间接经费')">&#xe7eb;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetChange',
  methods: {
    jump (msg) {
      this.$router.push({name: 'Budget', query: {form: msg}})
      this.$store.commit('changeTitle', msg)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.BudgetChange
  .select-wrapper
    margin-top 10px
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px
    .J-input
      border: 1px solid #FD4D4D;
      border-radius: 6px
      width 49%
      height 30px
  // .blue
  .blue, .green
    background: #003BAA;
    padding 10px
    margin-top 10px
    color: #FFFFFF;
    .title
      font-size: 16px;
    .blue-wrapper
      padding 0 10px
      text-align center
      .border-1px
        border-1px(#D3D3D3)
        padding 15px 0 10px 0
        .all
          font-size: 14px;
          display inline-block
          vertical-align middle
        .num
          font-size: 20px;
          margin-left 20px
          display inline-block
          vertical-align middle
    .formCell
      margin-top 10px
      .desc
        font-size: 14px;
      .num
        font-size: 20px;
        margin-top 15px
  .green
    background: #45C186
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    text-align left
    padding-right 0
    .blue-wrapper
      width 84%
      display inline-block
      margin-top 10px
    .arrow
      display inline-block
      text-align right
      vertical-align middle
      width 8%
      .iconfont
        font-size 25px
</style>
