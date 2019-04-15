<template>
  <div class="ConversionDeclaration">
    <CTitle>转化申报
      <span slot="float">{{page}}/4</span>
    </CTitle>

    <div class="one" v-show="page === 1">
      <div class="wrapper">
        <p class="title">项目来源</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目来源：</p>
          <JRadioGrounp v-model="radio">
            <JRadio name="0">系统项目</JRadio>
            <JRadio name="1">其他项目</JRadio>
          </JRadioGrounp>
        </div>
      </div>

      <div class="wrapper">
        <div class="title">
          项目信息
          <div>
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目类别：</p>
          <JInput type="select" placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">项目名称：</p>
          <JInput type="select" placeholder="下拉选择"/>
        </div>
      </div>
      <!--  -->
      <div class="wrapper">
        <p class="title">知识产权</p>
        <div class="select-item">
          <button>发明专利</button>
          <button>实用专利</button>
          <button>外观专利</button>
          <button>软件著作</button>
          <button>学术论文</button>
          <button>科技成果</button>
        </div>
        <input type="text">
      </div>

      <div class="wrapper">
        <p class="title">所属专业</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">选择二级学科：</p>
          <JInput type="select" placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">选择三级学科：</p>
          <JInput type="select" placeholder="下拉选择"/>
        </div>
      </div>
    </div>

    <div class="one" v-show="page === 2">
      <div class="wrapper">
        <p class="title">获奖情况-多选</p>
        <div class="select-item">
          <button>国家级</button>
          <button>省部级</button>
          <button>区县级</button>
          <button class="bigger">中国医学会</button>
          <button class="bigger">未获奖</button>
        </div>
        <input type="text" placeholder="其他输入">
      </div>

      <div class="wrapper">
        <p class="title">技术水平-多选</p>
        <div class="select-item">
          <button>省（市）内先进</button>
          <button>省（市）内领先</button>
          <button>国内先进</button>
          <button>国内领先</button>
          <button>国际先进</button>
          <button>国际领先</button>
        </div>
        <input type="text" placeholder="其他输入">
      </div>

      <div class="wrapper">
        <div class="title">
          单位信息-多选
          <div>
            <span>新增</span>
            <span>删除</span>
          </div>
        </div>
        <input type="text" style="margin: 10px 0 0 0" placeholder="输入合作单位名称">
        <div class="select-item">
          <button>国有企业</button>
          <button>民营企业</button>
          <button>合资企业</button>
          <button class="bigger">科研究所</button>
          <button class="bigger">高等院校</button>
        </div>
        <input type="text" placeholder="其他输入">
      </div>
    </div>

    <div class="one" v-show="page === 3">
      <div class="wrapper">
        <p class="title">合作方式-多选</p>
        <div class="select-item">
          <button>合作开发</button>
          <button>技术转让</button>
          <button>技术入股</button>
          <button class="bigger">技术服务</button>
          <button class="bigger">技术支持</button>
        </div>
        <input type="text" placeholder="其他输入">
      </div>

      <div class="wrapper">
        <p class="title">转化结果-多选</p>
        <div class="select-item">
          <button>新技术</button>
          <button>新工艺</button>
          <button>新产品</button>
          <button>新材料</button>
          <button>新装备</button>
          <button>农业、生物新品种</button>
        </div>
        <input type="text" placeholder="其他输入">
      </div>

      <div class="wrapper">
        <p class="title">转化时间</p>
        <div class="item-wrapper border-1px">
          <p class="item-title">开始时间：</p>
          <JInput type="select" placeholder="下拉选择"/>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title">结束时间：</p>
          <JInput type="select" placeholder="下拉选择"/>
        </div>
      </div>
    </div>
    <div class="one" v-show="page === 4">
      <div class="wrapper">
        <p class="title">文件上传</p>
        <div class="item-wrapper border-1px">
          <p class="item-title a">转化申请表：</p>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img :src="icon" alt="">上传文件</div>
          </div>
        </div>
        <div class="item-wrapper border-1px">
          <p class="item-title a">转化合同：</p>
          <div class="upload">
            <input type="file" class="tem">
            <div class="text"><img :src="icon" alt="">上传文件</div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn">
      <button class="next" @click="next" v-if="page<4">下一项</button>
      <button class="up" @click="up" v-if="page>1">上一项</button>
    </div>
  </div>
</template>

<script>
import JRadio from '@/components/radio/JRadio'
import JRadioGrounp from '@/components/radio/JRadioGrounp'
export default {
  name: 'ConversionDeclaration',
  data () {
    return {
      page: 4,
      radio: '0',
      icon: require('../../../common/image/upload.png')
    }
  },
  components: {
    JRadio,
    JRadioGrounp
  },
  methods: {
    next () {
      if (this.page < 4) {
        this.page++
      }
    },
    up () {
      if (this.page > 0) {
        this.page--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.ConversionDeclaration >>> .comTitle
  .float
    font-size: 13px;
    color: #555555;
.ConversionDeclaration
  .wrapper
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    padding 10px 10px 0 10px
    margin-bottom 10px
    position relative
    .title
      font-size: 14px;
      color: #333333;
      div
        float right
        font-size: 14px;
        color: #2873FF;
        span
          margin-left 10px
    .a
      width 6em
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
    .select-item
      padding 10px 0
      display flex
      justify-content space-between
      flex-wrap wrap
      button
        border: 1px solid #2873FF;
        border-radius: 4px;
        background white
        height 30px
        width 1.10rem
        font-size: 12px;
        color: #2873FF
        &:nth-of-type(n+4)
          margin-top 5px
      .bigger
        width 1.68rem
    input
      border: 1px solid #333333;
      border-radius: 6px;
      font-size 12px
      width 100%
      margin-bottom 10px
      height 30px
      padding 0 10px
      box-sizing border-box
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
  .btn
    text-align center
    padding-bottom 10px
    button
      width 100px
      height 30px
      border-radius: 6px;
    .next
      background: #2873FF;
      color white
    .up
      background: #C6DAFF;
      color #2873FF
</style>
