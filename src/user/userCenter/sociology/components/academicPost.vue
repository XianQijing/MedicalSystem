// 学术任职登记
<template>
  <div class="academicPost">
    <c-title>
      任职登记
    </c-title>

    <div class="form">
      <div class="name">
        <span>姓名：陈阿斌</span>
        <span>所属科室：眼科</span>
      </div>
      <div class="formCell border-1px">
        <span>任职类型:</span>
        <j-input type="select"></j-input>
      </div>
      <div class="formCell border-1px">
        <span>届期:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px">
        <span>职务:</span>
        <j-input type="select"></j-input>
      </div>
      <div class="formCell border-1px">
        <span>聘任时间:</span>
        <j-input type="select"></j-input>
      </div>
      <div class="formCell border-1px">
        <span>任期:</span>
        <j-input type="select"></j-input>
      </div>
      <div class="formCell border-1px">
        <span>聘任机构:</span>
        <j-input></j-input>
      </div>
      <div class="formCell border-1px up">
        <span>上传聘书扫描件:</span>
        <div>
          <input type="file" @change="uploadPic" accept="image/jpeg, image/png">
          <p class="upload">
            <img src="../../../../common/image/upload.png" alt="">
            <span>上传文件</span>
          </p>
          <img :src="pic" class="right" width="50" alt="">
        </div>
      </div>
    </div>

    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcademicPost',
  data () {
    return {
      pic: ''
    }
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
.academicPost
  .comTitle
    margin 0
  .form
    background white
    padding 15px 10px
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    .formCell
      font-size: 16px;
      color: #FD4D4D;
      padding 5px 10px
      border-1px(#D3D3D3)
      &:first-child
        padding-top 0
      &:last-child
        border-none()
      span
        line-height 30px
        font-size: 16px;
      .J-input
        border 1px solid #FD4D4D
        border-radius: 6px;
        width 160px
        height 30px
        vertical-align middle
      div
        position relative
        width 200px
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
    .name
      display flex
      justify-content space-between
      margin-bottom 5px
      font-size: 12px;
      color: #555555;
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
