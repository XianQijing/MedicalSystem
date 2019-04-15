<template>
  <div class="completeAndPerson">
    <div class="complete-unit" v-if="name==='完成单位'">
      <p class="plane">NO：0001</p>
      <p class="black">单位名称占位</p>
      <p>区卫生计生委</p>
      <p>单位地址占位</p>
      <div class="content">
        <div class="content-left">
          <p class="plane">联系人</p>
          <p style="margin:0">陈阿斌</p>
        </div>
        <div class="content-right border-1pxLeft">
          <p class="plane">联系电话</p>
          <p style="margin:0">15221135677</p>
        </div>
      </div>
      <div class="btn">
        <button class="complete" @click="close('完成单位')">查看</button>
      </div>
    </div>

    <div class="complete-unit" v-if="name==='人员信息'">
      <p class="plane">NO：0001</p>
      <p class="black">陈阿斌</p>
      <p>1987.09、硕士、男</p>
      <div class="content">
        <div class="content-left">
          <p class="plane">电子邮箱</p>
          <p style="margin:0">陈阿斌</p>
        </div>
        <div class="content-right border-1pxLeft">
          <p class="plane">联系电话</p>
          <p style="margin:0">15221135677</p>
        </div>
      </div>
      <div class="btn">
        <button class="complete" @click="close('人员信息')">查看</button>
      </div>
    </div>

    <div class="complete-unit" v-if="name==='上传标书'">
      <p class="plane">2017.04.11 12:34</p>
      <p class="black">文件名称占位</p>
      <p>原始版本</p>
      <div class="content">
        <div class="content-left">
          <p class="plane">文件类型</p>
          <p style="margin:0">Word</p>
        </div>
        <div class="content-right border-1pxLeft">
          <p class="plane">文件大小</p>
          <p style="margin:0">3.02M</p>
        </div>
      </div>
      <div class="btn">
        <button class="complete" @click="jump('标书预览')">查看</button>
      </div>
    </div>

    <div class="complete-unit" v-if="name==='上传附件'">
      <p class="plane">2017.04.11 12:34</p>
      <p class="black">文件名称占位</p>
      <p>原始版本</p>
      <div class="content">
        <div class="content-left">
          <p class="plane">文件类型</p>
          <p style="margin:0">Word</p>
        </div>
        <div class="content-right border-1pxLeft">
          <p class="plane">文件大小</p>
          <p style="margin:0">3.02M</p>
        </div>
      </div>
      <div class="btn">
        <button class="complete" @click="jump('上传附件')">查看</button>
      </div>
    </div>

    <popup position="center" :toShow="open" @close="close">
      <p slot="title">{{name}}</p>
      <div v-if="name === '完成单位'" class="complete-unit-popup">
        <div class="form-cell">
          <p class="label">单位名称</p>
          <j-input placeholder="单位名称"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">单位类型</p>
          <j-input placeholder="单位类型"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">单位地址</p>
          <j-input placeholder="单位地址"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">邮政编码</p>
          <j-input placeholder="邮政编码"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">机构代码</p>
          <j-input placeholder="机构代码"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">联系人</p>
          <j-input placeholder="联系人"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">联系电话</p>
          <j-input placeholder="联系电话"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱</p>
          <j-input placeholder="电子邮箱"></j-input>
        </div>
      </div>

      <div v-if="name === '人员信息'" class="complete-unit-popup">
        <div class="form-cell">
          <p class="label">姓名</p>
          <j-input placeholder="姓名"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">性别</p>
          <j-input placeholder="性别"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">出生年月</p>
          <j-input placeholder="出生年月"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">学历</p>
          <j-input placeholder="学历"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">证件号码</p>
          <j-input placeholder="证件号码"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">联系电话</p>
          <j-input placeholder="联系电话"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">手机号码</p>
          <j-input placeholder="手机号码"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">电子邮箱</p>
          <j-input placeholder="电子邮箱"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">职称</p>
          <j-input placeholder="职称"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">所在单位</p>
          <j-input placeholder="所在单位"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">科室</p>
          <j-input placeholder="科室"></j-input>
        </div>
        <div class="form-cell">
          <p class="label">职务</p>
          <j-input placeholder="职务"></j-input>
        </div>
      </div>
      <div class="button-cell" style="margin-top: 10px">
        <button class="reset">取消</button>
        <button class="complete">保存</button>
      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup'
export default {
  name: 'CompleteAndPerson',
  data () {
    return {
      open: false
    }
  },
  props: {
    name: {
      type: String,
      default: '完成单位'
    }
  },
  components: {
    Popup
  },
  methods: {
    close (msg) {
      this.which = msg
      this.open = !this.open
    },
    jump (from) {
      this.$router.push({name: 'Preview', params: {from: from}})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.completeAndPerson
  .complete-unit
    padding 15px 10px
    background white
    margin-top 5px
    p
      font-size 14px
      margin-bottom 15px
    .plane
      font-size 12px
    .black
      font-weight 700
      font-size 16px
      line-height 20px
    .content
      display flex
      div
        flex 1
        text-align center
      .content-right
        border-1pxLeft(#D3D3D3)
    .btn
      text-align center
      margin 10px 0 0 0
      button
        width 100px
        border-radius 6px
        height 30px
        background #2873ff
        color white
  .complete-unit-popup
    .form-cell
      form-cell-left(14px)
      margin 10px 5px 0 5px
    .J-input
      border 1px solid #2873ff
      font-size 14px
      font-weight 700
      border-radius 4px
      width 70%
      text-align right
      height 26px
</style>
