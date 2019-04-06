<template>
  <div class="SubjectMedicalQuality" :class="msg">
    <div v-show="page === 1">
      <CTitle>
        学术论文
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          学术期刊等级-SCI
        </div>
        <div class="formCell border-1px">
          <p class="form-label">SCI收录(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一作者(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二作者(篇):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三作者(篇):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          学术期刊等级-中华医学会系列杂志
        </div>
        <div class="formCell border-1px">
          <p class="form-label">中华医学会系列杂志(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一作者(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二作者(篇):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三作者(篇):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          学术期刊等级-统计源核心期刊
        </div>
        <div class="formCell border-1px">
          <p class="form-label">统计源核心期刊杂志(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一作者(篇):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二作者(篇):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三作者(篇):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 2">
      <CTitle>
        科研奖励
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          国家级科研奖励
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级奖项等级:</p>
          <JInput type="select"/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一完成人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二完成人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第三完成人(项):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">国家级科技奖励项目统计:</p>
          <div class="review">
            <img src="../../../common/image/eyes.png" alt="">
            <span>预览</span>
          </div>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          省部级项目
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">国家级奖项等级:</p>
          <JInput type="select"/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一完成人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二完成人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第三完成人(项):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">省部级科技奖励项目统计:</p>
          <div class="review">
            <img src="../../../common/image/eyes.png" alt="">
            <span>预览</span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3">
      <CTitle>
        科研项目
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">国家重点科技项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">国家自然基金项目(项):</p>
          <JInput type="select"/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">省部级科技项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">地市级科技项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">区县级科技项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">院校级科技项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">本单位科技项目(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二负责人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三负责人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">
          科研项目等级
        </p>
        <div class="formCell border-1px">
          <p class="form-label">资助经费总额(万元):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">国家级科技奖励项目统计:</p>
          <div class="review">
            <img src="../../../common/image/eyes.png" alt="">
            <span>预览</span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 4">
      <CTitle>
        知识产权
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          知识产权总类
        </div>
        <div class="formCell border-1px">
          <p class="form-label">发明专利(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一权利人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二权利人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三权利人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          知识产权总类
        </div>
        <div class="formCell border-1px">
          <p class="form-label">实用新型(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一权利人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二权利人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三权利人(项):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          知识产权总类
        </div>
        <div class="formCell border-1px">
          <p class="form-label">外观设计(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第一权利人(项):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">第二权利人(项):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">第三权利人(项):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 5">
      <CTitle>
        学术专著
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          教育部普通高等院校教材
        </div>
        <div class="formCell border-1px">
          <p class="form-label">主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">副主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">参编(部):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          卫生部普通高等院校教材
        </div>
        <div class="formCell border-1px">
          <p class="form-label">主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">副主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">参编(部):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          国家级科技类出版社专著
        </div>
        <div class="formCell border-1px">
          <p class="form-label">主编(部):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
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
    <div v-show="page === 6">
      <CTitle>
        成果转化
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          社会效益 - 第一完成人
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">成果推广单位:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">成果推广证明：:</p>
          <upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          经济效益 - 第一完成人
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">转让项目:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">成果转让收入(万元):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 7">
      <CTitle>
        专业建设
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          重点学科
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">级别:</p>
          <JInput type="select"/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">负责人:</p>
          <JInput type="select"/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          重点学科
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">级别:</p>
          <JInput type="select"/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">名称:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">负责人:</p>
          <JInput type="select"/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 8">
      <CTitle>
        人才培养
        <span slot="float" style="color: #555555;">{{page}}/8</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          人才培养等级
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">级别:</p>
          <JInput type="select"/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">人才项目名称:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">经费(万元):</p>
          <JInput/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          总经费
        </div>
        <div class="formCell">
          <p class="form-label">总经费(万元):</p>
          <JInput/>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="btn">
      <button class="blue" v-if="page > 1" @click="change('les')">上一项</button>
      <button class="butto" v-if="page < 8" @click="change('add')">下一项</button>
    </div>

    <p class="desc" v-if="page === 8">
      提交：当申报书所有信息上传无误后，可以提交申报书，申报书
      提交后不可修改。如需修改必须联系单位或相关科教主管部门退
      回修改。
    </p>
    <div class="button-cell" v-if="page === 8">
      <button class="reset">重置</button>
      <button class="complete">确认</button>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/upload/upload'
export default {
  name: 'SubjectMedicalQuality',
  data () {
    return {
      page: 1,
      test: '0'
    }
  },
  props: {
    msg: {
      type: String
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
      padding 0 0 0 .1rem
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
      .review
        padding-bottom .12rem
        padding-top .1rem
        text-align center
        color: #2873ff;
        font-size .14rem
        img
          width .24rem
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
.Detail
  margin 0 6px
  .wrapper
    .float
      display none
    .formCell, .form-Cell
      .form-label
        font-size .16rem
        color: black;
      .J-input
        border none
        border-radius: none
        height .3rem
        width 1rem
        font-size .14rem
</style>
