<template>
  <div class="audit">
    <div class="wrapper">
      <p class="title">审计附件</p>
      <p class="desc">上传说明附件若为多张图片，请先将多张图合成1张再行上传。</p>
      <div class="buttonq">
        <JButton type="primary" round @click="uploadImg = true">合成图片</JButton>
      </div>
      <p class="red">上传附件</p>
      <div class="upload" @click="openPop = true">
        <!-- <input type="file" multiple class="tem" @change="openFile($event)"> -->
        <iconSvg iconClass="icon-shangchuanwenjianicon"/>
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

    <popup v-model="uploadImg" position="center" title="合并图片">
      <div class="uploadImg">
        <div class="content">
          <p>仅支持图片jpeg, jpg, gif, png图片格式。</p>
          <div class="list" v-for="item in list" :key="item.name">
            <File :name="item.name" @deleted="deleted(item)"/>
          </div>
        </div>
        <div class="buttonq">
          <JButton type="primary" round>开始上传</JButton>
          <JButton type="primary" round>下载图片</JButton>
        </div>
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
  name: 'audit',
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
.wrapper
  margin-top .10rem
  padding .15rem .10rem 1rem .10rem
  background white
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
  .title
    font-size: .14rem;
    color: #333333
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
.uploadImg
  .content
    min-height .94rem
  p
    text-align center
    font-size .12rem
    line-height .17rem
    margin-top .05rem
</style>
