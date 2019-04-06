<template>
  <div class="SubjectMedicalQuality">
    <div v-show="page === 1">
      <CTitle>
        学术影响
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          学术委员会任职
        </div>
        <div class="formCell border-1px">
          <p class="form-label">全国主委(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">副主委(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">常委(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">委员(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">省级主委(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">副主委(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">常委(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">委员(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          学术刊物任职
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI杂志主编(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI杂志副主编(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI杂志编委(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中华医学会系列主编(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中华医学会系列副主编(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">中华医学会系列编委(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          主办学术会议
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国际性学术会议(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">全国性学术会议(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">省级学术会议(人):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 2">
      <CTitle>
        专科方向
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          专科临床研究方向
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <upload/>
      </div>
      <CTitle>科研项目</CTitle>
      <div class="wrapper">
        <div class="title">国家级项目</div>
        <div class="formCell border-1px">
          <p class="form-label">&gt;200万元(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">250-200万元(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">&lt;50万元(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">省部级项目</div>
        <div class="formCell border-1px">
          <p class="form-label">&gt;200万元(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">250-200万元(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">&lt;50万元(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3">
      <CTitle>
        科研成果
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          国家级、省部级科技奖励
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级一等奖(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级二等奖(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级三等奖(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">省部级一等奖(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">省部级二等奖(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">省部级三等奖(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          论文发表
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI收录(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中华医学会系统杂志(篇):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">统计源期刊杂志(篇):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          专利
        </div>
        <div class="formCell border-1px">
          <p class="form-label">发明专利(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">新型实用专利(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">外观设计专利(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          行业标准
        </div>
        <div class="formCell border-1px">
          <p class="form-label">主持制定行业标准(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">国家级指南(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 4">
      <CTitle>
        学生教育
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          研究生培养
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">毕业博士生(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">毕业硕士生(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          继续教育
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">省级项目-甲类(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">市级项目-乙类(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">基层继续教育学习班(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 5">
      <CTitle>
        编写教材
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          教育部普通高等院校教材
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">副主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">参编(部):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          卫生部普通高等院校教材
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">副主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">参编(部):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          国家级科技类出版社专著
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">副主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">参编(部):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="btn">
      <button class="blue" v-if="page > 1" @click="change('les')">上一项</button>
      <button class="butto" v-if="page < 5" @click="change('add')">下一项</button>
    </div>

    <p class="desc" v-if="page === 5">
      提交：当申报书所有信息上传无误后，可以提交申报书，申报书
      提交后不可修改。如需修改必须联系单位或相关科教主管部门退
      回修改。
    </p>
    <div class="button-cell" v-if="page === 5">
      <button class="reset">重置</button>
      <button class="complete">确认</button>
    </div>
  </div>
</template>

<script>
import CTitle from '@/components/title/title'
import Upload from '@/components/upload/upload'
import JInput from '@/components/input/j-input'
export default {
  name: 'SubjectMedicalQuality',
  data () {
    return {
      page: 1,
      test: '0'
    }
  },
  components: {
    CTitle,
    JInput,
    Upload
  },
  methods: {
    change (msg) {
      if (msg === 'les' && this.page > 2) {
        this.page--
      } else if (msg === 'add') {
        this.page++
      } else if (msg === 'les' && this.page === 2) {
        history.back()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectMedicalQuality
  // margin 0 6px
  padding-bottom 10px
  .comTitle
    margin 0
  .wrapper
    background: #ffffff;
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    padding .15rem .1rem 0 .1rem
    &.top
      margin-top .1rem
    .title
      margin-bottom .02rem
      font-size: .14rem
    .float
      float right
      span
        color: #2873ff;
    .formCell
      height .42rem
    .form-Cell
      .form-label
        line-height .42rem
    .formCell, .form-Cell
      padding 0 .1rem
      align-items center
      .form-label
        font-size .16rem
        color: #fd4d4d
      .J-input
        border: 1px solid #fd4d4d;
        border-radius: .06rem
        height .3rem
        width 1rem
        font-size .14rem
    .upload
      padding-bottom .12rem
      padding-top .12rem
      font-size .14rem
    .border-1px
      border-1px(#d3d3d3)
  .btn
    button
      width 1rem
      height .3rem
      border-radius .06rem
      margin-top: 15px;
      font-size .14rem
      margin-left .1rem
      &.blue
        color: #2873ff;
        background: #c6daff;
      &:first-child
        margin-left 0
  .desc
    margin-top .1rem
    color: #999999;
    font-size: .12rem
    line-height .15rem
    padding-bottom 30px
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
