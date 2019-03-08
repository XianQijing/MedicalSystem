<template>
  <div class="PopupData">
      <p class="title">基本信息</p>
      <div class="form-cell">
        <p class="label">时间范围</p>
        <j-input @click="open('time')" v-model="form.time" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">所属科室</p>
        <j-input @click="open('belong')" v-model="form.belong" type="select">
        </j-input>
      </div>
      <div class="form-cell">
        <p class="label">学历选择</p>
        <j-input @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">学位选择</p>
        <j-input @click="open('degree')" v-model="form.degree" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">职称选择</p>
        <j-input @click="open('titles')" v-model="form.titles" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">职称级别</p>
        <j-input @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <p class="title">搜索项目</p>
      <div class="form-cell">
        <p class="label">查询字段</p>
        <j-input @click="open('search')" v-model="form.search" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">模糊查询</p>
        <j-input></j-input>
      </div>
      <div class="btn">
        <button class="reset" @click="reset">重置</button>
        <button class="complete">完成</button>
      </div>
      <popup position="bottom" :overlay='overlay' :toShow="bottomShow" @close="openType">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="open"
          :item-height=30
          @confirm="onConfirm"
        />
      </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup'
import JInput from '@/components/input/j-input'
export default {
  name: 'PopupData',
  data () {
    return {
      overlay: false,
      bottomShow: false,
      cellData: null,
      columns: [],
      form: {
        time: '55',
        belong: '',
        education: '',
        degree: '',
        titles: '',
        levels: '',
        search: ''
      }
    }
  },
  props: {
    selectList: {}
  },
  components: {
    Popup,
    JInput
  },
  methods: {
    onConfirm (value, index) {
      this.bottomShow = false
      this.form[this.cellData] = value
    },
    open (value) {
      this.openType()
      this.cellData = value
      this.columns = this.selectList[value]
    },
    openType () {
      this.bottomShow = !this.bottomShow
    },
    reset () {
      this.form = {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.PopupData
  width 100%
  height 100%
  box-sizing border-box
  // padding 15px 10px
  .title
    font-size: 13px;
    color: #555555;
    margin-bottom 5px
    padding-top 15px
    margin-left 10px
    margin-right 10px
  .form-cell
    display flex
    justify-content space-between
    align-items center
    margin-top 10px
    margin-left 20px
    margin-right 10px
    .J-input
      width 53.3%
      max-width 200px
      border: 1px solid #2873FF;
      border-radius: 4px;
      color rgb(161, 161, 161)
    p
      font-size: 14px;
      color: #333333;
  .btn
    height 30px
    width 100%
    display flex
    position absolute
    bottom 0px
    .complete
      color white
      background: #2873FF;
      flex 1
    .reset
      background: #C6DAFF
      color #2873FF
      flex 1
</style>
