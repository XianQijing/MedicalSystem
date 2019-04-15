<template>
  <div class="SubjectBasicInformation">
    <div v-show="page === 2" class="cover">
      <CTitle>
        科学研究
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <p class="title">学术论文</p>
        <div class="formCell border-1px">
          <p class="form-label">发表学术论文(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中文核心期刊(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">出版专著(篇):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">科研项目</p>
        <div class="formCell border-1px">
          <p class="form-label">课题立项(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">省部级(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">获得经费(万元):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">科研成果</p>
        <div class="formCell border-1px">
          <p class="form-label">科研成果(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">成果鉴定(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">成果奖励(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">获得专利(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3" class="cover">
      <CTitle>
        教学人才培养
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <p class="title">教学项目</p>
        <div class="formCell border-1px">
          <p class="form-label">教学课题(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">教学成果(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">教学奖励(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">出版材料(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">招收研究生(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">硕士学位(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">招收博士生(人):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">博士学位(人):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 4" class="cover">
      <CTitle>
        学术交流
        <span slot="float" style="color: #555555;">{{page}}/4</span>
      </CTitle>
      <div class="wrapper">
        <p class="title">推荐交流</p>
        <div class="formCell border-1px">
          <p class="form-label">引进新技术(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">举办学术会议或开展培训班(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">举办继续医学教育项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">接受进修生(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="btn">
      <button class="blue" v-if="page > 1" @click="change('les')">上一项</button>
      <button class="butto" v-if="page < 4" @click="change('add')">下一项</button>
    </div>

    <p class="desc" v-if="page === 4">
      提交：当申报书所有信息上传无误后，可以提交申报书，申报书
      提交后不可修改。如需修改必须联系单位或相关科教主管部门退
      回修改。
    </p>
    <div class="button-cell" v-if="page === 4">
      <button class="reset">重置</button>
      <button class="complete">确认</button>
    </div>
  </div>
</template>

<script>
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  name: 'SubjectBasicInformation',
  data () {
    return {
      page: 2,
      test: '0'
    }
  },
  components: {
    JRadio,
    JRadioGrounp
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
.SubjectBasicInformation
  margin 0 6px
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
</style>
