// 成果申报
<template>
  <div class="ApplyForAchievements">
    <CTitle>成果申报</CTitle>
    <div class="wrapper">
      <p class="title">申请信息</p>
      <div class="item-wrapper border-1px">
        <p class="item-title">成果名称：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">完成人姓名：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">完成人属性：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">完成人单位</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">完成单位排名：</p>
        <JInput placeholder="下拉选择"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title">成果类型：</p>
        <JInput placeholder="下拉选择" type="select"/>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">成果登记表：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">相关技术证明材料：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">成果鉴定表：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">成果鉴定书：</p>
        <div class="upload">
          <input type="file" class="tem">
          <div class="text"><img :src="icon" alt="">上传文件</div>
        </div>
      </div>
      <div class="item-wrapper border-1px">
        <p class="item-title a">备注：</p>
        <textarea></textarea>
      </div>
    </div>
    <p class="desc">成果类型（如：鉴定证书、验收报告、行业准入证明、新产品证书等）或者知识产权证明（如：专利证书、植物品种权证书、软件登记证书等）。</p>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete">确认提交</button>
    </div>
  </div>
</template>

<script>
export default {
  namw: 'ApplyForAchievements',
  data () {
    return {
      icon: require('../../../common/image/upload.png')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplyForAchievements
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
        width 9em
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
.desc
  margin 0 10px
  padding-bottom 30px
  font-size: 12px;
  color: #999999;
  line-height 16px
</style>
