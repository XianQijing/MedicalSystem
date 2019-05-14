<template>
  <div class="VerticalContrast">
    <CTitle>检索条件</CTitle>
    <Collaspe name="条件选择">
      <div class="formCell">
        <p class="form-label">时间范围1:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">时间范围2:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">时间范围3:</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">时间范围4:</p>
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
      <div class="formCell">
        <p class="form-label">模糊搜索:</p>
        <JInput/>
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

    <div class="button-cell">
      <button class="reset" @click="open('柱状图')">柱状图</button>
      <button class="reset" @click="open('折线图')">折线图</button>
    </div>

    <Popup
      position="center"
      v-model="show"
      :title="title"
    >
      <Bar v-if="title === '科研项目柱状图'"/>
      <LineChart v-if="title === '科研项目折线图'"/>
    </Popup>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
import Popup from '@/components/popup/popup2'
import Bar from './chart/bar'
import LineChart from './chart/LineChart'
export default {
  name: 'VerticalContrast',
  data () {
    return {
      title: '',
      show: false,
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
    Collaspe,
    Popup,
    Bar,
    LineChart
  },
  methods: {
    open (msg) {
      this.title = `科研项目${msg}`
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.VerticalContrast >>> .J-input
  padding 0
  input
    text-align right
  .aSelect
    background none
    padding 0
.VerticalContrast
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
  .button-cell
    position fixed
    bottom 0
    left 0
    button
      &:last-child
        margin-left 2px
</style>
