<template>
  <div class="ScientificResearchReport">
    <CTitle>检索条件</CTitle>
    <Collaspe name="条件选择">
      <div class="formCell">
        <p class="form-label">时间范围:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">项目选择:</p>
        <JInput type="select" value="项目选择"/>
      </div>
      <div class="formCell">
        <p class="form-label">类型选择:</p>
        <JInput type="select" value="类型选择"/>
      </div>
      <div class="btn">
        <button class="butto">查询</button>
      </div>
    </Collaspe>
    <CTitle>项目统计</CTitle>
    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no">NO：{{item.name}}</p>
      <span class="black">申报人－眼科</span>
      <p class="black border-1pxTop">
        专利名称
      </p>
      <span>专利分类</span>
      <span class="resTime">转化时间:</span>
    </card>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'ScientificResearchReport',
  data () {
    return {
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
          type: '通过'
        }
      ]
    }
  },
  components: {
    Collaspe
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ScientificResearchReport >>> .J-input
  padding 0
  input
    text-align right
  .aSelect
    background none
    padding 0
.ScientificResearchReport
  margin 0 .06rem
  padding-bottom .3rem
  .collaspe
    .formCell
      background white
      padding 0 10px
      margin-bottom 2px
      height 30px
      align-items center
      font-size: 14px
      font-weight: 400;
</style>
