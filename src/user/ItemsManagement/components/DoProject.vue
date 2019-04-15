// 差旅费申请
<template>
  <div class="DoProject">
    <div class="wrapper one">
      <div class="item-wrapper border-1px">
        <p class="item-title">活动名称:</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
    </div>
    <CTitle>主办活动信息</CTitle>
    <div class="wrapper">
      <div class="title">
        活动信息
        <div>项目负责人：陈阿斌</div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">专家人数（人）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">参加人数（人）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">外省人数（人）：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">外院人数（人）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">应收总额（元）：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">实际收费总额（元）：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">专家名单：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <div>
          <p class="item-title a">会议总结：</p>
          <div class="float">
            <span>模版</span>
            <span>实例</span>
          </div>
        </div>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <div>
          <p class="item-title a">演讲ppt：</p>
          <div class="float">
            <span>删除</span>
          </div>
        </div>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <div>
          <p class="item-title">活动签到：</p>
          <div class="float">
            <span>删除</span>
          </div>
        </div>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <div>
          <p class="item-title">活动照片：</p>
          <div class="float">
            <span>删除</span>
          </div>
        </div>
        <div class="file">
          <div class="file-wrapper">
            <img src="../../../common/image/file.png" alt="">
            <p>文件名1</p>
          </div>
        </div>
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
  namw: 'DoProject',
  data () {
    return {
      select: '0',
      icon: require('../../../common/image/upload.png')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.DoProject
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 30px
    position relative
    &.one
      margin-top 10px
      margin-bottom 0
      padding-top 0
      .item-wrapper
        .J-input
          width 1.65rem
    .title
      font-size 14px;
      color: #333333;
      div
        float right
        font-size: 14px;
        // color: #2873FF;
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
      .float
        float right
        font-size:13px;
        color #2873FF
      .a
        display block
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
      // display inline-block
      width 100%
      text-align center
      height 37px
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
        left 50%
        margin-left -37.5px
      .text
        position absolute
        font-size 14px
        color: #2873FF;
        bottom 0
        vertical-align bottom
        width 100%
        text-align center
        img
          width 19px
          height 19px
          vertical-align bottom
          margin-right 10px
.button-cell
  position fixed
  width 100%
  bottom 0
  left 0
.file
  width 100%
  display flex
  // justify-content space-between
  flex-direction: row
  flex-wrap wrap
  margin-top 10px
  .file-wrapper
    margin-right .05rem
    margin-top .05rem
    width .745rem
    height .56rem
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    text-align center
    box-sizing border-box
    &:nth-of-type(4n)
      margin-right 0
    img
      width .2rem
      margin-top .08rem
      margin-bottom .05rem
    p
      color: #2873ff;
      font-size: .12rem;
</style>
