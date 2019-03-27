// 申报端口
<template>
  <div class="ApplicationPort">
    <div class="blue">
        <span class="msg">2017年12月09日科研报销信息</span>
      <div class="desc">
        <div class="sum-price border-1px">
          <span>报销金额</span>
          <span class="num">9000.00</span>
        </div>
        <div class="detail-price">
          <div>
            <p>项目经费</p>
            <p class="num">3000.00</p>
          </div>
          <div>
            <p>匹配经费</p>
            <p class="num">2000.00</p>
          </div>
          <div>
            <p>其他经费</p>
            <p class="num">4000.00</p>
          </div>
        </div>
        <div class="detail-price">
          <div class="icon" @click="active = index" v-for="(item, index) in iconList" :key="index">
            <div>
              <img class="img" :src="index === active ? item.icon.active : item.icon.normal">
            </div>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div v-show="active === 0">
        <p class="title">摘要用途</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">一级科目：</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">二级科目：</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">三级科目：</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">四级科目：</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">用途：</p>
          <textarea></textarea>
        </div>
      </div>

      <div v-show="active === 1">
        <p class="title">金额发票</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目经费：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">匹配经费：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">其他经费：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">报销总额：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">支付方式</p>
          <JInput placeholder="下拉选择" type="select"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">上传发票：</p>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img src="../../../common/image/upload.png" alt="">上传文件</div>
          </div>
        </div>
      </div>

      <div v-show="active === 2">
        <p class="title">金额发票</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">收款单位：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">纳税人号：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">开户银行：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">银行账号：</p>
          <JInput placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">上传凭证：</p>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img src="../../../common/image/upload.png" alt="">上传文件</div>
          </div>
        </div>
      </div>

      <div v-show="active === 3">
        <p class="title">审计附件</p>
        <div class="item-wrapper border-1px">
          <p class="item-title a">上传附件：</p>
          <div class="file">
            <div class="file-item">
              <img src="../../../common/image/file.png" alt="">
              <p>文件名</p>
            </div>
            <div class="file-item">
              <img src="../../../common/image/file.png" alt="">
              <p>文件名</p>
            </div>
          </div>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img src="../../../common/image/upload.png" alt="">上传文件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JInput from '@/components/input/j-input'
export default {
  name: 'ApplicationPort',
  data () {
    return {
      active: 3,
      iconList: [
        {
          name: '摘要用途',
          icon: {
            active: require('../image/zhaiyaoActive.png'),
            normal: require('../image/zhaiyaoNormal.png')
          }
        },
        {
          name: '金额',
          icon: {
            active: require('../image/priceActive.png'),
            normal: require('../image/priceNormal.png')
          }
        },
        {
          name: '支付信息',
          icon: {
            active: require('../image/payActive.png'),
            normal: require('../image/payNormal.png')
          }
        },
        {
          name: '审计附件',
          icon: {
            active: require('../image/shenjiActive.png'),
            normal: require('../image/shenjiNormal.png')
          }
        }
      ]
    }
  },
  components: {
    JInput
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationPort
  padding 15px 0
  margin 0 6px
  .blue
    padding 15px 10px
    background: #003BAA;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    color white
    span
      font-weight 200
    .desc
      display inline-block
      text-align center
      vertical-align middle
      width 100%
      .sum-price
        // width 3.14rem
        border-1px(#D3D3D3)
        padding 15px 0 15px 0
        span
          font-size: 14px
          &:last-child
            font-size 20px
            margin-left 20px
      .detail-price
        display flex
        justify-content space-between
        margin-top 15px
        div
          flex 1
          p
            font-size: 14px
          .num
            font-size 20px
            margin-top 16px
          img
            width 34.5px
            vertical-align bottom
        .icon
          p
            margin-top 10px
            vertical-align bottom
            font-size: 14px;
            color: #FFFFFF;
          div
            height 34.5px
  .wrapper
    margin-top 10px
    padding 15px 10px 0 10px
    background white
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    .title
      font-size: 14px;
      color: #333333
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
        z-index 20
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
  .file
    margin-top 10px
    .file-item
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
      border-radius: 4px;
      width 76px
      height 56px
      display inline-block
      font-size: 12px;
      color: #2873FF;
      text-align center
      margin-left 10px
      &:first-child
        margin 0
      img
        width 19.1px
        margin-top 8.5px
        margin-bottom 8.5px
</style>
