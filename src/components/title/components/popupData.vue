<template>
  <div class="PopupData">
      <p class="title">基本信息</p>
      <div class="form-cell">
        <p class="label">开始时间</p>
        <j-input placeholder="开始时间" @click="openTime('stime')" v-model="form.stime" type="select"></j-input>
      </div>

      <div class="form-cell">
        <p class="label">结束时间</p>
        <j-input placeholder="结束时间" @click="openTime('etime')" v-model="form.etime" type="select"></j-input>
      </div>

      <div class="form-cell" v-show="item.label !== '时间范围'" v-for="item in list" :key="item.label">
        <p class="label">{{item.label}}</p>
        <j-input
          :placeholder="`请选择${item.label}`"
          @click="open(item.columns, item)"
          v-model="item.model.name"
          type="select"
        />
      </div>
      <!--  -->
      <p class="title">搜索项目</p>
      <div class="form-cell">
        <p class="label">查询字段</p>
        <j-input placeholder="查询字段" @click="open('search')" v-model="form.search" type="select"></j-input>
      </div>
      <div class="form-cell">
        <p class="label">模糊查询</p>
        <j-input placeholder="按查询字段模糊查询"></j-input>
      </div>
      <div class="btn">
        <button class="reset" @click="reset">重置</button>
        <button class="complete" @click="complete">完成</button>
      </div>

      <popup position="bottom" v-model="bottomShow">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="open"
          :item-height=30
          value-key="name"
          @confirm="onConfirm"
        />
      </popup>

      <popup position="bottom" v-model="time">
        <van-datetime-picker
          v-model="form[msg]"
          type="date"
          :item-height="30"
          @change="change"
        />
      </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
import JInput from '@/components/input/j-input'
import keyWord from './json.js'

export default {
  name: 'PopupData',
  data () {
    return {
      bottomShow: false,
      columns: [],
      select: {},
      time: false,
      msg: '',
      form: {
        stime: '',
        etime: ''
      }
    }
  },
  props: {
    selectList: {},
    textList: {
      type: Array
    },
    keyName: {
      type: String
    }
  },
  computed: {
    list () {
      let selectData = {}
      this.textList.forEach(item => {
        if (!selectData[item]) {
          selectData[item] = {
            label: keyWord[item] ? keyWord[item] : item,
            model: {},
            columns: this.$store.state.app.selectData[item]
          }
        }
      })
      return selectData
    },
    uploadData () {
      let data = {}
      for (let i in this.list) {
        data[i] = this.list[i].model.id
      }
      data.stime = this.form.stime
      data.etime = this.form.etime
      return data
    }
  },
  components: {
    Popup,
    JInput
  },
  methods: {
    onConfirm (value, index) {
      this.bottomShow = false
      this.select.model = value
    },
    open (value, ref) {
      this.openType()
      this.columns = value
      this.select = ref
    },
    openType () {
      this.bottomShow = !this.bottomShow
    },
    reset () {
      for (let i in this.list) {
        this.list[i].model = {}
        this.form = {}
      }
    },
    complete () {
      this.$emit('click', this.uploadData)
    },
    openTime (msg) {
      this.time = true
      this.msg = msg
    },
    change (picker) {
    }
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
      width 70%
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
