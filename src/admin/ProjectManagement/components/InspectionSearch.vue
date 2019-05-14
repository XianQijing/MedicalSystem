// 状态查询
<template>
  <div class="InspectionSearch">
    <div>
      <CTitle :screen="true" :textList="textList">项目列表</CTitle>

      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <p class="black border-1pxTop">
          项目名称
        </p>
        <span>项目类别</span>
        <span>项目计划</span>
        <span class="resTime">批准日期：2018.09.01 12:00</span>
        <div style="text-align:center">
          <JButton round type="primary" v-if="item.type === '已分配'" class="abtn" @click="jump('InspectionSearch')">重新分配</JButton>
          <JButton round type="primary" v-if="item.type === '未分配'" class="abtn" @click="jump('InspectionEdit')">分配专家</JButton>
        </div>
      </card>
    </div>

    <Popup v-model="show" position="center" title="分配专家">
      <div class="formCell">
        <p class="form-label">所属科室</p>
        <JInput type="select" placeholder="选择"/>
      </div>
      <div class="wrapper">
        <p>专家列表</p>

        <div class="list">
          <button
            @click="item.checked = !item.checked"
            v-for="(item, index) in testList"
            :class="{'active': item.checked === true}"
            :key="index">
            {{item.name}}
            </button>
        </div>
      </div>
        <div class="button-cell">
          <button class="reset">取消</button>
          <button class="complete">确认</button>
        </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'InspectionSearch',
  data () {
    return {
      testList: [],
      list: ['专家1', '专家1', '专家1', '专家1', '专家1', '专家1', '专家1'],
      show: false,
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '分配状态'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '已分配',
          dayin: '已分配'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '未分配',
          dayin: '未分配'
        }
      ]
    }
  },
  components: {
    Popup
  },
  methods: {
    jump (name) {
      this.show = true
    }
  },
  created () {
    this.testList = this.list.map(item => {
      return {name: item, checked: false}
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.InspectionSearch
  .formCell
    height 40px
    align-items center
    padding 0 15px
    font-size: 14px;
    .J-input
      width: 74.077%;
      height: 26px;
      border: 1px solid #2873ff;
      border-radius: 4px;
  .wrapper
    padding 0 15px
    p
      font-size: 14px;
    .list
      margin-top 5px
      button
        width: 86px;
        height: 30px;
        border: 1px solid #2873ff;
        border-radius: 4px;
        background none
        color #2873ff
        margin-top 5px
        margin-left 6px
        &:nth-of-type(3n+1)
          margin-left 0
        &.active
          background: #2873ff;
          color white
.button-cell
  margin-top 37px
</style>
