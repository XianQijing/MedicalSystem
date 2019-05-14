<template>
  <div class="RecordedInAccount">
    <CTitle :screen="true" :textList="textList">管理经费</CTitle>
    <JTable :data="tableList">
      <JTableColums label="项目管理费" prop="name"/>
      <JTableColums label="匹配管理费" prop="price"/>
      <JTableColums label="其他管理费" prop="num"/>
      <JTableColums label="管理费总额" prop="index"/>
    </JTable>
    <div class="btn">
      <button class="butto" @click="show = true">添加管理费</button>
    </div>
    <div class="tab">
      <div class="tab-pane" @click="clickTab = 0" :class="{'active': clickTab === 0}">系统入账</div>
      <div class="tab-pane" @click="clickTab = 1" :class="{'active': clickTab === 1}">科教入账</div>
    </div>

    <div class="card-wrapper" v-show="clickTab === 0">
      <Card time="2018.04.12 14:56">
        <p class="no">NO：00210</p>
        <p class="black">申请人-所属科室</p>
        <p class="black border-1pxTop">项目名称</p>
        <span>项目类别</span>
        <span>项目计划</span>
        <div class="formCell">
          <span>管理金额：20.00</span>
          <span>经费类别：其他经费</span>
        </div>
      </Card>
    </div>

    <div class="card-wrapper" v-show="clickTab === 1">
      <Card time="2018.04.12 14:56">
        <p class="no1 no">NO：00210</p>
        <div class="formCell">
          <span>经费属性：科研课题</span>
          <span>经费类别：其他经费</span>
        </div>
        <div class="formCell">
          <span>管理金额：20.00</span>
          <span>经费类别：其他经费</span>
        </div>
      </Card>
    </div>

    <popup position="center" v-model="show" title="项目审核">
      <div class="popup-form">
        <p class="form-label">经费属性</p>
        <JInput v-model="form.pass" placeholder="下拉选择" type="select" @click="selected = true"></JInput>
      </div>
      <div class="popup-form">
        <p class="form-label">经费类别</p>
        <JInput v-model="form.pass" placeholder="下拉选择" type="select" @click="selected = true"></JInput>
      </div>
      <div class="popup-form">
        <p class="form-label">经费来源</p>
        <JInput v-model="form.pass" placeholder="经费来源"></JInput>
      </div>
      <div class="popup-form">
        <p class="form-label">添加金额</p>
        <JInput v-model="form.pass" placeholder="填写金额"></JInput>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </popup>

    <popup position="bottom" :overlay="false" v-model="selected">
      <van-picker
        :item-height="30"
        :columns="$store.state.columns"
        show-toolbar
        @cancel="selected = false"
        @confirm="onConfirm" />
    </popup>
  </div>
</template>

<script>
import JTable from '@/components/table/table'
import JTableColums from '@/components/table/table-colums'
import Popup from '@/components/popup/popup2'
export default {
  name: 'RecordedInAccount',
  data () {
    return {
      show: false,
      selected: false,
      clickTab: 0,
      textList: ['时间范围', '申报类别', '项目类别', '项目计划', '经费类别', '所属科室'],
      tableList: [
        {
          index: 123,
          name: 123,
          price: 123,
          num: 123
        }
      ],
      form: {
        pass: ''
      }
    }
  },
  components: {
    JTable,
    JTableColums,
    Popup
  },
  methods: {
    onConfirm (value) {
      this.form.pass = value
      this.selected = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.RecordedInAccount
  .tab
    display flex
    justify-content space-between
    margin-top 15px
    .tab-pane
      width 49.1%
      border: 1px solid #2873FF;
      color #2873FF
      height 30px
      line-height 30px
      text-align center
      box-sizing border-box
      &.active
        background #2873FF
        color white
  .card-wrapper
    margin-top 10px
    .no1
      margin-bottom .15rem
.popup-form
  padding 0 15px
  display flex
  justify-content space-between
  margin-top 10px
  .form-label
    font-size: 14px;
    color: #333333
    display inline-block
    line-height 30px
  .J-input
    border-radius: 4px;
    font-size: 14px
    border: 1px solid #2873FF;
    height 26px
    box-sizing border-box
    width 74%
.button-cell
  font-size: 14px
  margin-top 10px
</style>
