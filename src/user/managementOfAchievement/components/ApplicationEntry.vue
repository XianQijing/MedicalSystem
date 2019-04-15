// 申请入口
<template>
  <div class="ApplicationEntry">
    <CTitle>专利发明申请</CTitle>
    <div class="wrapper">
      <p class="title">申请信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">专利名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">专利分类：</p>
        <JInput type="select" placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">发明人：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">备注</p>
        <textarea></textarea>
      </div>
    </div>

    <div class="wrapper">
      <div class="title">
        完成人
        <div>
          <span>新增</span>
          <span>删除</span>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">完成人姓名：</p>
        <JInput placeholder="下拉选择"/>
      </div>
    </div>

    <div class="wrapper">
      <p class="title">文件上传</p>
      <div class="item-wrapper border-1px">
        <p class="item-title a">发明专利请求书：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">摘要：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">说明书：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">权利要求书：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
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
  namw: 'ApplicationEntry',
  data () {
    return {
      icon: require('../../../common/image/upload.png')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationEntry
  padding-bottom 20px
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 10px
    position relative
    .title
      font-size 14px;
      color: #333333;
      div
        float right
        font-size: 14px;
        color: #2873FF;
        span
          margin-left 10px
    .item-wrapper
      border-1px(#D3D3D3)
      padding 15px 10px
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: 16px;
        color: #FD4D4D;
        vertical-align top
      .a
        width 8em
      .JRadioGrounp
        display inline-block
        float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        width 1rem
        min-width 100px
        height 30px
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top 10px
        padding 10px
        box-sizing border-box
        height 80px
    .upload
      border none
      display inline-block
      width 50%
      height 60px
      position relative
      input
        border none
        position absolute
        bottom 0
        margin 0
        padding 0
        height 14px
        width 75px
        opacity 0
      .text
        position absolute
        font-size 14px
        color: #2873FF;
        bottom 0
        vertical-align bottom
        img
          width 19px
          height 19px
          vertical-align bottom
          margin-right 10px
.button-cell
  position fixed
  bottom 0
  left 0
</style>
