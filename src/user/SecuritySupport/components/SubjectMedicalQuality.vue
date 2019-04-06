<template>
  <div class="SubjectMedicalQuality">
    <div v-show="page === 1">
      <CTitle>
        质量概况
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          合理用血
        </div>
        <div class="formCell border-1px">
          <p class="form-label">患者人均输血量(CC):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">患者输血比例(%):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">成分输血率(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          合理用药
        </div>
        <div class="formCell border-1px">
          <p class="form-label">基本药物占处方用药率(%):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">门诊、住院患者使用抗菌药物的率(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          患者满意度
        </div>
        <div class="formCell">
          <p class="form-label">满意度评分:</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          医疗事故情况
        </div>
        <div class="formCell border-1px">
          <p class="form-label">完全责任医疗事故(次):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">主要责任医疗事故(次):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 2">
      <CTitle>
        单病种质量及费用
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          单病种质量
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">病种名称:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">平均住院(天):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">平均费用(元):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">死亡率(%):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">并发症发生率(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          单病种费用
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">病种名称:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">平均费用(元):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3">
      <CTitle>
        病区质量
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          病区其他医疗质量
        </div>
        <div class="formCell border-1px">
          <p class="form-label">临床诊断符合率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">病理诊断符合率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">甲级病案率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">出院患者随访率(%):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">随访制度:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          手术患者住院日
        </div>
        <div class="formCell border-1px">
          <p class="form-label">年出院人次(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">疑难危重症率(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          诊疗效果
        </div>
        <div class="formCell border-1px">
          <p class="form-label">综合好转率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">死亡率(%):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">并发症发生率(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          基础护理质量标准
        </div>
        <div class="formCell border-1px">
          <p class="form-label">基础护理合格率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">危重患者护理合格率(%):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <div class="form-label">
            基础质量护理标准(%):
            <div class="float">
              <span>新增</span>
              <span>删除</span>
            </div>
          </div>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          专科护理质量标准
        </div>
        <upload/>
      </div>
      <div class="wrapper top">
        <div class="title">
          医院感染相关制度
        </div>
        <upload/>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 4">
      <CTitle>
        门诊数量(平均)
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          专家出诊
        </div>
        <div class="formCell borer-1px">
          <p class="form-label">高级职称人员出诊(人/天):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">专家出诊(人/周):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          专病门诊
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">专病门诊名称:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">专病门诊人数(人):</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          预约门诊
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">预约门诊名称:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">预约门诊人数(人):</p>
          <upload/>
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
