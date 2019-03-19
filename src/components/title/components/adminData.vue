<template>
  <div class="PopupData">
      <p class="title">基本信息</p>
      <div class="form-cell">
        <p class="label">人员属性</p>
        <j-input placeholder="奖励类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">奖励等级</p>
        <j-input placeholder="奖励等级" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">著作属性</p>
        <j-input placeholder="著作属性" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">著作类型</p>
        <j-input placeholder="著作类型" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <!--  -->
      <p class="title">搜索项目</p>
      <div class="search">
        <div class="form-cell">
          <p class="label">申报数量</p>
          <j-input placeholder="申报数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">项目数量</p>
          <j-input placeholder="项目数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">经费数量</p>
          <j-input placeholder="经费数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">论文数量</p>
          <j-input placeholder="论文数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">会议数量</p>
          <j-input placeholder="会议数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">专利数量</p>
          <j-input placeholder="专利数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">成果数量</p>
          <j-input placeholder="成果数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">奖励数量</p>
          <j-input placeholder="奖励数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">著作数量</p>
          <j-input placeholder="著作数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">任职数量</p>
          <j-input placeholder="任职数" v-model="form.levels"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">活动数量</p>
          <j-input placeholder="活动数" v-model="form.levels"></j-input>
        </div>
      </div>
      <div class="btn">
        <button class="reset" @click="reset">重置</button>
        <button class="complete" @click="complete">完成</button>
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
        time: '',
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
    selectList: {},
    textList: {
      type: Array
    }
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
      // this.cellData = value
      // this.columns = this.selectList[value]
    },
    openType () {
      this.bottomShow = !this.bottomShow
    },
    reset () {
      this.form = {}
    },
    complete () {
      this.$emit('click', this.form)
    }
    // filter (val) {
    //   if (this.textList.indexOf(val) > -1) {
    //     return true
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
.PopupData >>> .J-input
  height 26px
  input
    font-size 12px
    color black
    font-weight 700
.PopupData
  width 100%
  height 100%
  box-sizing border-box
  margin-bottom 220px
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
      // width 53.3%
      max-width 200px
      width 75%
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
  .search
    margin-left: 20px;
    margin-right: 10px;
    .form-cell, .J-input, p
      display inline-block
    .form-cell
      width 49%
      margin-right 0
      margin-left 0
    .J-input
      width 46%
      margin-left 6%
</style>
