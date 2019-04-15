<template>
  <div class="SubjectServiceAbility">
    <div v-show="page === 1">
      <CTitle>
        总体水平
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          整体实力 - 常规技术
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">进修内容:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          整体实力 - 特色技术
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">进修内容:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          整体实力 - 特色技术
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">进修内容:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          整体实力
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">平均年出院(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">平均年门诊(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">平均住院(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">住院患者疑难病例比例(%):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 2">
      <CTitle>
        亚学科建设
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          亚专科设置
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">病种:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">专门技术:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">治疗(例):</p>
          <JInput/>
        </div>
      </div>
      <CTitle>
        技术特色
      </CTitle>
      <div class="wrapper">
        <div class="title">
          技术特色和先进性
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">实施(例):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">评价:</p>
          <JInput type="select"/>
        </div>
        <div class="form-Cell">
          <p class="form-label">技术适用性:</p>
          <upload/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3">
      <CTitle>
        诊治能力
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          独立诊治专科主要病种-专科病种
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          危重症诊治能力-危重病症
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">综合好转率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">死亡率(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">并发症率(%):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">诊疗方案:</p>
          <upload/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 4">
      <CTitle>
        创新能力
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          创新项目
        </div>
        <div class="formCell">
          <p class="form-label">创新项目数量(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          创新水平-先进性和临床应用能力
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">临床转化项目数量(项):</p>
          <JInput/>
        </div>
        <div class="form-Cell border-1px">
          <p class="form-label">上传文档:</p>
          <upload/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">临床转化项目数量(项):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">上传文档:</p>
          <upload/>
        </div>
      </div>
    </div>
    <div v-show="page === 5">
      <CTitle>
        辐射能力
        <span slot="float" style="color: #555555;">{{page}}/5</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          进修人员
        </div>
        <div class="formCell">
          <p class="form-label">三级医院进修人员比例(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          对口支援
        </div>
        <div class="formCell border-1px">
          <p class="form-label">帮扶医院数量(家/年):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">上传文档:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          技术推广
        </div>
        <div class="formCell border-1px">
          <p class="form-label">技术推广项目(家/年):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">上传文档:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          培训基地
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">数量:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">培训基地名称:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">培训基地类别:</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          培训基地
        </div>
        <div class="formCell border-1px">
          <p class="form-label">参加国际会议次数(次):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">大会发言(次):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">壁报(次):</p>
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
import Upload from '@/components/upload/upload'
export default {
  name: 'SubjectServiceAbility',
  data () {
    return {
      page: 1,
      test: '0'
    }
  },
  components: {
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
.SubjectServiceAbility
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
