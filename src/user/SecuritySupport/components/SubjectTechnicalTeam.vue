<template>
  <div class="SubjectTechnicalTeam">
    <div v-show="page === 1">
      <CTitle>
        技术团队
        <span slot="float" style="color: #555555;">1/6</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          技术掌握情况
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
          <p class="form-label">主任(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">副主任(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">主治(人):</p>
          <JInput/>
        </div>
      </div>
      <CTitle>
        学科带头人
      </CTitle>
      <div class="wrapper">
        <p class="title">学术地位</p>
        <div class="formCell border-1px">
          <p class="form-label">正高级职称(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">研究生导师(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">国家级学术委员会任职(人):</p>
          <JInput/>
        </div>
      </div>
    </div>

    <div v-show="page === 2" class="cover">
      <CTitle>
        临床能力
        <span slot="float" style="color: #555555;">{{page}}/6</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          专业先进技术
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell">
          <p class="form-label">技术名称:</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          疑难病种诊治
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell">
          <p class="form-label">疾病名称:</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">其他能力</p>
        <div class="formCell border-1px">
          <p class="form-label">开展新技术(项/年):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">专科查房(次/周):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">三级医院间疑难危重病例重大会诊(次/年):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">教学科研水平</p>
        <div class="formCell border-1px">
          <p class="form-label">指导毕业博士生(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级课题(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI论文(临床方向/篇):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">省级以上科研成果(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3" class="cover">
      <CTitle>
        学科骨干
        <span slot="float" style="color: #555555;">{{page}}/6</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          数量
        </div>
        <div class="formCell">
          <p class="form-label">学科骨干(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          学术地位
        </div>
        <div class="formCell border-1px">
          <p class="form-label">正高级职称(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">研究生导师(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级学术委员会任职(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">国家级期刊任职(人):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 4" class="cover">
      <CTitle>
        医师队伍
        <span slot="float" style="color: #555555;">{{page}}/6</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          年龄结构
        </div>
        <div class="formCell border-1px">
          <p class="form-label">&lt;35岁(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">36-45岁(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">&gt;45岁(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          学历结构
        </div>
        <div class="formCell">
          <p class="form-label">硕博人员比例(%):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          职称结构
        </div>
        <div class="formCell border-1px">
          <p class="form-label">初级职称比例(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中级职称比例(%):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">高级职称比例(%):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 5" class="cover">
      <CTitle>
        护士队伍
        <span slot="float" style="color: #555555;">{{page}}/6</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          人员数量
        </div>
        <div class="formCell">
          <p class="form-label">护士(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          年龄结构
        </div>
        <div class="formCell border-1px">
          <p class="form-label">&lt;35岁(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">36-45岁(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">&gt;45岁(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          学历结构
        </div>
        <div class="formCell border-1px">
          <p class="form-label">本科以下(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">本科(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">本科以上(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          职称结构
        </div>
        <div class="formCell border-1px">
          <p class="form-label">初级职称(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中级职称(人):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">高级职称(人):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          护士长能力
        </div>
        <Upload/>
      </div>
      <div class="wrapper top">
        <div class="title">
          护理专科业务培训及能力
        </div>
        <div class="formCell border-1px">
          <p class="form-label">每年开展业务培训次数(次):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          整体护理业务能力
        </div>
        <Upload/>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 6">
      <CTitle>
        人才培养
        <span slot="float" style="color: #555555;">{{page}}/6</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          人才培养情况
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">姓名:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">职称:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">培养方向:</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          进修学习情况
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国外专业进修:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">姓名:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">职称:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">大学:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">院系:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">实验室:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">开始时间:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">结束时间:</p>
          <JInput/>
        </div>
        <div class="form-Cell border-1px">
          <p class="form-label">进修内容:</p>
          <upload/>
        </div>
      </div>
    </div>

    <p class="desc" v-if="page === 6" >
      提交：当申报书所有信息上传无误后，可以提交申报书，申报书
      提交后不可修改。如需修改必须联系单位或相关科教主管部门退
      回修改。
    </p>
    <div class="button-cell" v-if="page === 6">
      <button class="reset">重置</button>
      <button class="complete">确认</button>
    </div>

    <div style="text-align: center; margin-top: .1rem" :class="{'padding': page === 6}">
      <JButton type="primary" plain round v-show="page !==1" @click="next('-')">上一项</JButton>
      <JButton type="primary" round  v-show="page !==6" @click="next('+')">下一项</JButton>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/upload/upload'
export default {
  name: 'SubjectTechnicalTeam',
  data () {
    return {
      test: '0',
      page: 1
    }
  },
  components: {
    Upload
  },
  methods: {
    change (msg) {
      this.$router.push({name: 'SubjectTechnicalTeam'})
    },
    next (msg) {
      msg === '+' ? this.page++ : this.page--
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectTechnicalTeam
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
      padding 0 .1rem
      height .42rem
      align-items center
      .form-label
        font-size .16rem
        color: #fd4d4d;
      .J-input
        border: 1px solid #fd4d4d;
        border-radius: .06rem
        height .3rem
        width 1rem
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
  .button-cell
    position fixed
    bottom 0
    left 0
  .upload
    padding-bottom .12rem
    padding-top .12rem
    font-size .14rem
  .padding
    padding-bottom .3rem
</style>
