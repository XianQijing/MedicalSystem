<template>
  <div class="Pay">
    <div class="wrapper">
      <p class="title">支付信息</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">收款单位：</p>
          <JInput placeholder="填写内容"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">纳税人号：</p>
          <JInput placeholder="填写内容"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">开户银行：</p>
          <JInput placeholder="填写内容"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">银行账号：</p>
          <JInput placeholder="填写内容"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">上传凭证：</p>
          <!-- <div class="fileList" v-for="(item, index) in n" :key="index">
            <File :name="item.name" @deleted="deleted(item)"/>
          </div> -->
          <div class="upload" @click="openPop = true">
            <!-- <input type="file" multiple class="tem" @change="openFile($event)"> -->
            <div class="text"><img src="../../../../common/image/upload.png" alt=""></div>
          </div>
        </div>
    </div>

    <popup v-model="openPop" position="center" title="上传文件">
      <div class="content">
        <Form fixed>
          <FormItem color="blue" :height="0.26" :width="1.54" label="文件名称">
            <JInput placeholder="输入名称"/>
          </FormItem>
          <div class="list" v-for="item in list" :key="item.name">
            <File :name="item.name" @deleted="deleted(item)"/>
          </div>
        </Form>
        <Upload :icon="false" :multiple="true" @change="upload" label="选择文件"/>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">上传</button>
      </div>
    </popup>
  </div>
</template>

<script>
import Upload from '@/components/upload/upload'
import Form from '@/components/form/Form'
import FormItem from '@/components/form/FormItem'
import Popup from '@/components/popup/popup2'
import File from './file'
export default {
  name: 'Pay',
  data () {
    return {
      openPop: false,
      uploadImg: false,
      list: []
    }
  },
  components: {
    Upload,
    File,
    Form,
    FormItem,
    Popup
  },
  methods: {
    upload (file) {
      this.list = file
    },
    deleted (data) {
      this.list.filter(item => item !== data)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../common/style/mixin.styl';
.Pay
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
    .desc
      font-size .12rem
      line-height .17rem
      margin-top .1rem
      padding 0 .05rem
      color: #040404
    .red
      margin 0 .1rem
      font-size .16rem
      line-height .22rem
      color $red
      margin-bottom .2rem
    .svg-icon
      font-size .18rem
      color $blue
      margin 0 auto
      display block
  .content
    min-height 1.48rem
  .buttonq
    margin .1rem 0
    text-align center
</style>
