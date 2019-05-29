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
    <Domestice v-show="active === 0"/>

    <InvoiceAmount v-show="active === 1"/>

    <div class="wrapper" v-show="active === 2">
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

    <div class="wrapper" v-show="active === 3">
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
  </div>
</template>

<script>
import Upload from '@/components/upload/upload'
import Form from '@/components/form/Form'
import FormItem from '@/components/form/FormItem'
import Popup from '@/components/popup/popup2'
// import Tab from '@/components/tab/tab'
// import Tabs from '@/components/tab/tabs'
import Domestice from './components/domestic'
import InvoiceAmount from './components/InvoiceAmount'
export default {
  name: 'ApplicationPort',
  data () {
    return {
      active: 0,
      // clickTab: 0,
      // openPop: false,
      // now: '',
      // openDomestic: false,
      // notTavel: {
      //   project: '',
      //   fapiaoList: []
      // },
      // Domestic: {
      //   test: null
      // },
      iconList: [
        {
          name: '摘要用途',
          icon: {
            active: require('../image/zhaiyaoActive.png'),
            normal: require('../image/zhaiyaoNormal.png')
          }
        },
        {
          name: '金额发票',
          icon: {
            active: require('../image/priceActive.png'),
            normal: require('../image/priceNormal.png')
          }
        },
        {
          name: '审计附件',
          icon: {
            active: require('../image/shenjiActive.png'),
            normal: require('../image/shenjiNormal.png')
          }
        },
        {
          name: '支付信息',
          icon: {
            active: require('../image/payActive.png'),
            normal: require('../image/payNormal.png')
          }
        }
      ]
    }
  },
  components: {
    // Tab,
    Popup,
    // Tabs,
    Form,
    InvoiceAmount,
    FormItem,
    Upload,
    Domestice
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ApplicationPort
  padding .1rem 0
  margin 0 .06rem
  .blue
    padding .15rem .10rem
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
        padding .15rem 0 .15rem 0
        span
          font-size: .14rem
          &:last-child
            font-size .20rem
            margin-left .20rem
      .detail-price
        display flex
        justify-content space-between
        margin-top .15rem
        div
          flex 1
          p
            font-size: .14rem
          .num
            font-size .20rem
            margin-top .16rem
          img
            width .345rem
            vertical-align bottom
        .icon
          p
            margin-top .10rem
            vertical-align bottom
            font-size: .14rem;
            color: #FFFFFF;
          div
            height .345rem
  .wrapper
    margin-top .10rem
    padding .15rem .10rem 0 .10rem
    background white
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    .title
      font-size: .14rem;
      color: #333333
    .item-wrapper
      border-1px(#D3D3D3)
      padding .15rem .10rem
      position relative
      &:last-child
        border-none()
      .item-title
        display inline-block
        font-size: .16rem;
        color: #FD4D4D;
        vertical-align top
      .a
        width 8em
        margin-bottom .1rem
      .JRadioGrounp
        display inline-block
        float right
      .J-input
        border: 1px solid #FD4D4D;
        border-radius: .06rem;
        width 1rem
        min-width 100px
        height .30rem
        position absolute
        right 0
        top 8px
      textarea
        border: 1px solid #FD4D4D;
        border-radius: 6px;
        display block
        width 100%
        margin-top .10rem
        padding .10rem
        box-sizing border-box
        height .80rem
    .upload
      border none
      // display inline-block
      width 100%
      text-align center
      height .37rem
      position relative
      input
        border none
        position absolute
        bottom 0
        margin 0
        padding 0
        height .14rem
        width .75rem
        opacity 0
        left 50%
        margin-left -37.5px
        z-index 20
      .text
        position absolute
        font-size .14rem
        color: #2873FF;
        bottom 0
        vertical-align bottom
        width 100%
        text-align center
        img
          width .19rem
          height .19rem
          vertical-align bottom
          margin-right .10rem
  .file
    margin-top .10rem
    .file-item
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
      border-radius: .04rem
      width .76rem
      height .56rem
      display inline-block
      font-size: .12rem;
      color: #2873FF;
      text-align center
      margin-left .10rem
      &:first-child
        margin 0
      img
        width .191rem
        margin-top .085rem
        margin-bottom .085rem
  .tabs
    margin-top .1rem
  .fileList
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5)
    border-radius: .04rem
    font-size 0
    text-align: left
    margin-bottom .04rem
    overflow hidden
    // padding .14rem 0
    .svg-icon
      font-size .1914rem
      padding .14rem .1rem
    .border-1pxLeft
      border-1pxLeft(black)
      display inline-block
      height 100%
      font-size .14rem
      height .285rem
      // line-height .285rem
      margin .095rem 0
      vertical-align top
      padding-left .1rem
      .file-name
        font-size .14rem
        line-height .285rem
      .file-path
        font-size .12rem
        line-height .16rem
    .border-1pxRight
      font-size .2124rem
      color white
      background $blue
      float right
  .content
    height 1.48rem
  .border-1px
    border-1px(#d3d3d3)
  .chailv
    padding .1rem 0
    margin 0 .1rem
    .dom-header
      padding 0 .1rem
      font-size .15rem
      line-height .19rem
    .canClick
      color $blue
    .gray
      text-align right
      color #555555
  .baoxiao
    font-size .13rem
    color #555555
    padding .15rem .2rem 0 .2rem
  .buttonq
    text-align:center
    padding .2rem 0
.ApplicationPort >>> .Form
  .FormItem
    font-size .13rem
.ApplicationPort >>> .tabs
  .tab-pane
      width calc((100% - .12rem) / 3)
      font-size .12rem
</style>
