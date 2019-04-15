// 学科医疗质量
<template>
  <div class="SubjectMedicalQuality">
    <!--  -->
    <CTitle>质量概况</CTitle>
    <Collaspe name="合理用血">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>患者人均输血量 </p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>患者输血比例</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>成分输血率</p>
            <p class="num">6</p>
          </div>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="合理用药">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>基本药物占<br/>处方用药百分率</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>门诊、住院患者使用<br/>抗菌药物的百分率</p>
            <p class="num">6</p>
          </div>
        </div>
        <div class="title">
          <span>患者满意度</span>
          <span class="float">满意度评分：9分</span>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="患者满意度">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>完全责任医疗事故 </p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>主要责任医疗事故</p>
            <p class="num">6</p>
          </div>
        </div>
      </div>
    </Collaspe>
    <!--  -->
    <CTitle>单病种质量及费用</CTitle>
    <Collaspe name="单病种质量">
      <div class="formCell">
        <p class="form-label">单病种名称:</p>
        <p class="form-msg">技术名称占位</p>
      </div>
      <div class="formCell">
        <p class="form-label">平均住院(天):</p>
        <p class="form-msg">技术名称占位</p>
      </div>
      <div class="formCell">
        <p class="form-label">死亡率:</p>
        <p class="form-msg">技术名称占位</p>
      </div>
      <div class="formCell">
        <p class="form-label">并发症发生率:</p>
        <p class="form-msg">技术名称占位</p>
      </div>
    </Collaspe>
    <Collaspe name="单病种费用">
      <div class="formCell">
        <p class="form-label">单病种名称:</p>
        <p class="form-msg">测试课题1</p>
      </div>
      <div class="formCell">
        <p class="form-label">平均费用(元):</p>
        <p class="form-msg">测试课题1</p>
      </div>
    </Collaspe>
    <!--  -->
    <CTitle>病区质量</CTitle>
    <Collaspe name="病区其他医疗质量">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>临床诊断<br/>符合率 </p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>病理诊断<br/>符合率</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p class="one">甲级病案率</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>出院患者<br/>随访比率</p>
            <p class="num">6</p>
          </div>
        </div>
        <div class="title">
          <span>随访制度</span>
          <span class="float blue">下载/预览</span>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="手术患者住院日">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p class="one">年出院人次</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p class="one">疑难危重症比率</p>
            <p class="num">6</p>
          </div>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="诊疗效果">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p>综合好转率</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p>死亡率</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p class="one">并发症发生率</p>
            <p class="num">6</p>
          </div>
        </div>
      </div>
    </Collaspe>
    <Collaspe name="基础护理质量标准">
      <div class="wrapper">
        <div class="author-wrapper">
          <div class="author border-1pxLeft">
            <p class="one">基础护理合格率</p>
            <p class="num">6</p>
          </div>
          <div class="author border-1pxLeft">
            <p class="one">危重患者护理合格率</p>
            <p class="num">6</p>
          </div>
          <div class="title">
            <span>随访制度</span>
            <span class="float blue">下载/预览</span>
          </div>
        </div>
      </div>
    </Collaspe>
    <div class="formCell" style="margin-top: 2px">
      <p class="form-label">专科护理质量标准:</p>
      <p class="form-msg blue">预览</p>
    </div>
    <div class="formCell">
      <p class="form-label">医院感染:</p>
      <p class="form-msg blue">预览</p>
    </div>
    <!--  -->
    <CTitle>门诊数量(平均)</CTitle>
    <Collaspe name="专家出诊">
      <div class="formCell">
        <p class="form-label">高级职称人员出诊(人/天):</p>
        <p class="form-msg">技术名称占位</p>
      </div>
      <div class="formCell">
        <p class="form-label">专家出诊(人/周):</p>
        <p class="form-msg">技术名称占位</p>
      </div>
    </Collaspe>
    <Collaspe name="专病门诊">
      <div class="formCell">
        <p class="form-label">专病门诊名称:</p>
        <p class="form-msg">技术名称占位</p>
      </div>
      <div class="formCell">
        <p class="form-label">专病门诊人数:</p>
        <p class="form-msg">技术名称占位</p>
      </div>
    </Collaspe>
      <Collaspe name="预约门诊">
        <div class="formCell">
          <p class="form-label">预约门诊名称:</p>
          <p class="form-msg">技术名称占位</p>
        </div>
        <div class="formCell">
          <p class="form-label">专病门诊人数:</p>
          <p class="form-msg">技术名称占位</p>
        </div>
      </Collaspe>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'SubjectMedicalQuality',
  data () {
    return {
    }
  },
  components: {
    Collaspe
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.SubjectMedicalQuality
  .comTitle
    margin 0
  .formCell
    padding 0 10px
    min-height 30px
    background white
    margin-bottom 2px
    align-items center
    .form-label
      font-size: 14px;
      color: #333333;
      max-width 75%
      line-height 18px
    .form-msg
      font-size: 14px;
      color: #999999;
    .blue
      color #2873FF
.wrapper
  background white
  margin-top 2px
  &:first-child
    margin 0
  .title
    padding 0 10px
    font-size: 12px
    line-height: 26px
    height 26px
    .float
      float right
      font-size: 12px
  .author-wrapper
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5)
    padding 10px 0
    display flex
    .author
      flex 1
      text-align center
      font-size: 14px
      border-1pxLeft(#d3d3d3)
      &:first-child
        border-none()
      p
        // width 70px
        margin 0 auto
        &.one
          line-height 28px
      .num
        margin-top 15px
        font-size: 20px;
        color: #999999;
</style>
