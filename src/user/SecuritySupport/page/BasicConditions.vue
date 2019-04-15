<template>
  <div class="BasicConditions">
    <div v-show="page === 2" class="cover">
      <CTitle>
        支撑条件
        <span slot="float" style="color: #555555;">{{page}}/3</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          专科发展相关科室实力
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">学科名称:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">重点学科:</p>
          <JInput type="select"/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          专科设备
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
          <p class="form-label">数量:</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">价格:</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">重点学科:</p>
          <JInput type="select"/>
        </div>
      </div>
      <div class="wrapper top">
        <p class="title">专科经费投入</p>
        <div class="formCell">
          <p class="form-label">近三年经费投入(万元):</p>
          <JInput type="select"/>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-show="page === 3" class="cover">
      <CTitle>
        科室管理
        <span slot="float" style="color: #555555;">{{page}}/3</span>
      </CTitle>
      <div class="wrapper">
        <div class="title">
          开展临床路径管理
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">单病种:</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">上传临床路径方案:</p>
          <Upload/>
        </div>
      </div>
      <div class="wrapper top">
        <div class="title">
          开展优质护理服务
          <div class="float">
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">实际床位与护士比例(%):</p>
          <JInput/>
        </div>
        <div class="formCell border-1px">
          <p class="form-label">每名责任护士平均负责患者(名):</p>
          <JInput/>
        </div>
        <div class="form-Cell">
          <p class="form-label">上传文档:</p>
          <Upload/>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="btn">
      <button class="blue" v-if="page > 1" @click="change('les')">上一项</button>
      <button class="butto" v-if="page < 3" @click="change('add')">下一项</button>
    </div>

    <p class="desc" v-if="page === 3">
      提交：当申报书所有信息上传无误后，可以提交申报书，申报书
      提交后不可修改。如需修改必须联系单位或相关科教主管部门退
      回修改。
    </p>
    <div class="button-cell" v-if="page === 3">
      <button class="reset">重置</button>
      <button class="complete">确认</button>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/upload/upload'
export default {
  name: 'BasicConditions',
  data () {
    return {
      page: 2,
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
.BasicConditions
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
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
