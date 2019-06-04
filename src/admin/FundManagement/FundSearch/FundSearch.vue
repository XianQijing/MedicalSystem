<template>
  <div class="FundSearch">
    <Collaspe green name="检索条件">
      <div class="formCell">
        <p class="form-label">时间范围</p>
        <p class="form-desc">{{time}}</p>
      </div>
      <div class="formCell">
        <p class="form-label">科研课题</p>
        <p class="form-desc">{{aClass}}</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目类别</p>
        <p class="form-desc">{{type}}</p>
      </div>
      <div class="formCell">
        <p class="form-label">项目计划</p>
        <p class="form-desc">{{plan}}</p>
      </div>
      <p class="set">导出字段设置：</p>

      <draggable v-model="list" group="people" @start="drag=true" @end="drag=false">
        <button
          class="primary"
          v-for="btn in list"
          :key="btn.label"
          :class="{'is-select': btn.selected === true}"
          @click="btn.selected = !btn.selected"
        >
          {{btn.label}}
        </button>
      </draggable>

      <div class="btn">
        <JButton type="primary" round>查询</JButton>
      </div>
    </Collaspe>

    <CTitle>检索结果</CTitle>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :status="item.type"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">负责人</span>
      <p class="black border-1pxTop">
        经费类别、经费属性
      </p>
      <span>摘要：摘要占位</span>
      <span>报销额度：200.00</span>
    </card>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
import Popup from '@/components/popup/popup2'
import draggable from 'vuedraggable'
export default {
  name: 'FundSearch',
  data () {
    return {
      time: '2017.09.01 - 2018.09.01',
      aClass: '科研课题',
      type: '项目类别',
      plan: '项目计划',
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ],
      list: ['负责人', '所属科室', '项目名称', '项目计划', '项目年份', '应收总额', '项目总额', '匹配总额', '其它总额', '未收款项', '未收项目', '未收匹配',
        '未收其它', '实收款项', '实收项目', '实收匹配', '实收其它', '支出款项', '项目支出', '匹配支出', '其它支出'
      ]
    }
  },
  components: {
    Collaspe,
    Popup,
    draggable
  },
  mounted () {
    this.list = this.list.map(item => {
      return { label: item, selected: false }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.FundSearch
  margin 0 .06rem
  .formCell
    height .3rem
    background white!important
    margin-bottom 2px
    padding 0 .1rem
    line-height .3rem
    font-size .14rem
  .set
    // padding 0 .1rem
    line-height .18rem
    font-size .14rem
    padding .1rem 0.1rem .06rem 0.1rem
  .primary
    width calc(100%/4 - .12rem/4)
    height .3rem
    font-size .12rem
    color $green
    border 1px solid $green
    background none
    border-radius .04rem
    margin-right .04rem
    margin-top .04rem
    box-sizing border-box
    &:nth-of-type(4n)
      margin-right 0
    &.is-select
      background $green
      color white
</style>
