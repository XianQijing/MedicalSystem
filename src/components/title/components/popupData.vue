<template>
  <div class="PopupData">
      <p class="title">基本信息</p>
      <div class="form-cell" v-if="filter('时间范围')">
        <p class="label">时间范围</p>
        <j-input placeholder="1987.09 - 1992.09" @click="open('time')" v-model="form.time" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('时间选择')">
        <p class="label">时间选择</p>
        <j-input placeholder="选择时间" @click="open('time')" v-model="form.time" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('学分属性')">
        <p class="label">学分属性</p>
        <j-input placeholder="省市级" @click="open('belong')" v-model="form.belong" type="select">
        </j-input>
      </div>
      <div class="form-cell" v-if="filter('性别选择')">
        <p class="label">性别选择</p>
        <j-input placeholder="男女" @click="open('degree')" v-model="form.degree" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('民族选择')">
        <p class="label">民族选择</p>
        <j-input placeholder="民族选择" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('任职类别')">
        <p class="label">任职类别</p>
        <j-input placeholder="任职类别" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('所属科室')">
        <p class="label">所属科室</p>
        <j-input placeholder="所属科室" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('经费类别')">
        <p class="label">经费类别</p>
        <j-input placeholder="经费类别" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('科室选择')">
        <p class="label">科室选择</p>
        <j-input placeholder="科室选择" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('专业选择')">
        <p class="label">专业选择</p>
        <j-input placeholder="专业选择" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('学历选择')">
        <p class="label">学历选择</p>
        <j-input placeholder="学历选择" @click="open('eduation')" v-model="form.eduation" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('职称选择')">
        <p class="label">职称选择</p>
        <j-input placeholder="职称选择" @click="open('titles')" v-model="form.titles" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('任职类型')">
        <p class="label">任职类型</p>
        <j-input placeholder="任职类型" @click="open('titles')" v-model="form.titles" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('任职属性')">
        <p class="label">任职属性</p>
        <j-input placeholder="任职属性" @click="open('titles')" v-model="form.titles" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('科研课题')">
        <p class="label">科研课题</p>
        <j-input placeholder="科研课题" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('申报类别')">
        <p class="label">申报类别</p>
        <j-input placeholder="申报类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('类别选择')">
        <p class="label">类别选择</p>
        <j-input placeholder="类别选择" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('项目类别')">
        <p class="label">项目类别</p>
        <j-input placeholder="项目类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('项目计划')">
        <p class="label">项目计划</p>
        <j-input placeholder="项目计划" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('作者属性')">
        <p class="label">作者属性</p>
        <j-input placeholder="作者属性" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('论文属性')">
        <p class="label">论文属性</p>
        <j-input placeholder="论文属性" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('论文类别')">
        <p class="label">论文类别</p>
        <j-input placeholder="论文类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('经济来源')">
        <p class="label">经济来源</p>
        <j-input placeholder="经济来源" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('会议类型')">
        <p class="label">会议类型</p>
        <j-input placeholder="会议类型" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('经费来源')">
        <p class="label">经费来源</p>
        <j-input placeholder="经费来源" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('专利类别')">
        <p class="label">专利类别</p>
        <j-input placeholder="专利类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('成果类别')">
        <p class="label">成果类别</p>
        <j-input placeholder="成果类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('著作类别')">
        <p class="label">著作类别</p>
        <j-input placeholder="著作类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('著作属性')">
        <p class="label">著作属性</p>
        <j-input placeholder="著作属性" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('著作类型')">
        <p class="label">著作类型</p>
        <j-input placeholder="著作类型" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('所属学科')">
        <p class="label">所属学科</p>
        <j-input placeholder="所属学科" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('审核状态')">
        <p class="label">审核状态</p>
        <j-input placeholder="通过" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('打印状态')">
        <p class="label">打印状态</p>
        <j-input placeholder="打印状态" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('人员属性')">
        <p class="label">人员属性</p>
        <j-input placeholder="人员属性" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('人员属性')">
        <p class="label">人员属性</p>
        <j-input placeholder="奖励类别" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('奖励等级')">
        <p class="label">奖励等级</p>
        <j-input placeholder="奖励等级" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <!-- 政策 -->
      <div class="form-cell" v-if="filter('区域选择')">
        <p class="label">区域选择</p>
        <j-input placeholder="区域选择" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('省份选择')">
        <p class="label">省份选择</p>
        <j-input placeholder="省份选择" @click="open('levels')" v-model="form.levels" type="select"></j-input>
      </div>
      <div class="form-cell" v-if="filter('城市选择')">
        <p class="label">城市选择</p>
        <j-input placeholder="城市选择" @click="open('levels')" v-model="form.levels" type="select"></j-input>
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
    },
    filter (val) {
      if (this.textList.indexOf(val) > -1) {
        return true
      }
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
