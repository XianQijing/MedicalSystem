<template>
  <div class="IIRegister">
    <c-title>基本信息</c-title>
    <div class="base-message">
      <div>
        <span>人员编号：38372</span>
      </div>
      <p class="black">姓名-所属科室</p>
      <p>所在单位占位、职称</p>
    </div>

    <div class="input">
      <div class="formCell border-1px">
        <span>学分属性:</span>
        <j-input type="select"></j-input>
      </div>
      <div class="formCell border-1px">
        <span>项目编号:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>项目名称:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>主板单位:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>举办形式:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>二级学科:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>三级学科:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>活动日期:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>授予学分:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>证件编号:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px up">
        <span>上传证书:</span>
        <div>
          <input type="file" @change="uploadPic" accept="image/jpeg, image/png">
          <p class="upload">
            <img src="../image/upload.png" alt="">
            <span>上传文件</span>
          </p>
          <img :src="pic" class="right" width="50" alt="">
        </div>
      </div>
    </div>
    <p class="font">
      注:若Ⅱ类学分举办形式为
      (1)科室交流的综述, 每2000字授1分,事先报计划，经科室批准每人每年不超过5学分;
      (2) 出国考察或国内调研报告, 每3000字1学分;
      (3)举办单位请填写所在单位名称。
    </p>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
// import dealImage from '@/common/js/compressPic.js'
export default {
  name: 'IIRegister',
  data () {
    return {
      pic: ''
    }
  },
  components: {
    JInput
  },
  methods: {
    uploadPic (e) {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (res) => {
        this.pic = res.currentTarget.result
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl'
.IIRegister
  padding-bottom 40px
  .comTitle
    margin 0
  .base-message
    background white
    padding 15px 10px
    div
      display flex
      justify-content space-between
      font-size: 12px;
      color: #555555;
    p
      margin-top 15px
  // 输入框
  .input
    background white
    padding 15px 10px
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    margin-top 10px
    .formCell
      font-size: 16px;
      color: #FD4D4D;
      padding 10px 10px
      border-1px(#D3D3D3)
      &:first-child
        padding-top 0
      &:last-child
        border-none()
      span
        line-height 30px
        font-size: 16px
      .J-input
        border 1px solid #FD4D4D
        border-radius: 6px;
        width 160px
        height 30px
        vertical-align middle
      div
        position relative
        max-width 200px
        width 70%
        height 82px
        input
          position absolute
          font-size: 14px;
          color: #2873FF;
          width 78px
          bottom 0
          z-index 30
          opacity 0
        .upload
          display inline-block
          position absolute
          bottom 0
          span
            font-size: 14px;
            color: #2873FF;
            margin-left 5px
          img
            width 16px
            vertical-align middle
        .right
          float right
  .button-cell
    position fixed
    bottom 0
    left 0
  .font
    font-size: 12px;
    color: #999999;
    padding 10px 6px
</style>
