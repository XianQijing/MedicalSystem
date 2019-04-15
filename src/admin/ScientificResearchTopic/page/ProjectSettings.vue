// 项目设置
<template>
  <div class="ProjectSettings">
    <CTitle>类别列表</CTitle>
    <div class="wrapper"
      v-for="item in list"
      :key="item.name">
      <div class="wrapper-header">
        <span>{{item.name}}</span>
        <p class="bule">
          <span @click="open('修改')">修改</span><span @click="open('删除')">删除</span>
        </p>
      </div>
      <div class="content">
        <div class="img" @click="addType('添加大类')">
          <div class="img-wrapper">
            <img src="../../../common/image/daLei.png" alt="">
          </div>
          <p class="border-1pxLeft">添加大类</p>
        </div><div class="img" @click="addType('添加小类')">
          <div class="img-wrapper">
            <img src="../../../common/image/xiaoLei.png" alt="">
          </div>
          <p class="border-1pxLeft">添加小类</p>
        </div><div class="img">
          <div class="img-wrapper" @click="plan = true">
            <img src="../../../common/image/plan.png" alt="">
          </div>
          <p class="border-1pxLeft">添加计划</p>
        </div>
      </div>
    </div>

    <Popup v-model="show" position="bottom">
      <van-picker
        :item-height=30
        :columns="columns"
        show-toolbar
        @cancel="show = false"
        @confirm="onConfirm"/>
    </Popup>
    <Popup v-model="add" position="center" :title="title">
      <div class="formCell" v-if="title === '添加小类'">
        <p class="form-label">选择小类</p>
        <JInput type="select"></JInput>
      </div>
      <div class="formCell" v-if="title === '添加小类'">
        <p class="form-label">添加小类</p>
        <JInput></JInput>
      </div>
      <div class="formCell" v-if="title === '添加大类'">
        <p class="form-label">添加大类</p>
        <JInput></JInput>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">确认</button>
      </div>
    </Popup>

    <van-popup position="center" v-model="plan">
      <div class="popup-content">
        <p class="title border-1px">添加计划<span class="iconfont" @click="plan = false">&#xe6d6;</span></p>
        <div class="plan-wrapper">
          <div class="formCell">
            <p class="form-label">类别名称</p>
            <p class="topic">单位级课题</p>
          </div>
          <div class="formCell">
            <p class="form-label">大类名称</p>
            <JInput></JInput>
          </div>
          <div class="formCell">
            <p class="form-label">小类名称</p>
            <JInput></JInput>
          </div>
          <div class="formCell time">
            <p class="form-label">时间选择</p>
            <JInput></JInput>
          </div>
          <collaspe name="内容选择">
            <button
              v-for="item in content"
              :key="item.name"
              class="content"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
             {{item.name}}
            </button>
          </collaspe>
          <collaspe name="流程选择">
            <div class="liucheng">
              <JInput type="select"/>→<JInput type="select"/>→<JInput type="select"/>
            </div>
          </collaspe>
          <collaspe name="直接经费">
            <button
              v-for="item in direct"
              :key="item.name"
              class="content direct"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
              {{item.name}}
            </button>
          </collaspe>
          <collaspe name="间接经费">
            <button
              v-for="item in indirect"
              :key="item.name"
              class="content indirect"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
              {{item.name}}
            </button>
          </collaspe>
          <collaspe name="学历选择">
            <button
              v-for="item in education"
              :key="item.name"
              class="content"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
              {{item.name}}
            </button>
          </collaspe>
          <collaspe name="学位选择">
            <button
              v-for="item in degree"
              :key="item.name"
              class="content degree"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
              {{item.name}}
            </button>
          </collaspe>
          <collaspe name="职称选择">
            <button
              v-for="item in Title"
              :key="item.name"
              class="content degree"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
              {{item.name}}
            </button>
          </collaspe>
          <collaspe name="年龄选择">
            <button
              v-for="item in age"
              :key="item.name"
              class="content age"
              :class="{'active': item.checked === true}"
              @click="contentSelect(item)">
              {{item.name}}
            </button>
          </collaspe>
        </div>
        <div class="button-cell">
          <button class="reset">取消</button>
          <button class="complete">保存</button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
import collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'ProjectSettings',
  data () {
    return {
      show: false,
      add: false,
      plan: false,
      title: '添加小类',
      columns: [],
      list: [
        {
          name: '单位级课题'
        },
        {
          name: '大学级课题'
        },
        {
          name: '区县级课题'
        },
        {
          name: '市局级课题'
        },
        {
          name: '省部级课题'
        },
        {
          name: '国家级课题'
        }
      ],
      content: this.$store.state.ProjectSettings.content.map(item => {
        return {name: item, checked: false}
      }),
      direct: this.$store.state.ProjectSettings.direct.map(item => {
        return {name: item, checked: false}
      }),
      indirect: this.$store.state.ProjectSettings.indirect.map(item => {
        return {name: item, checked: false}
      }),
      education: this.$store.state.ProjectSettings.Education.map(item => {
        return {name: item, checked: false}
      }),
      degree: this.$store.state.ProjectSettings.degree.map(item => {
        return {name: item, checked: false}
      }),
      Title: this.$store.state.ProjectSettings.Title.map(item => {
        return {name: item, checked: false}
      }),
      age: this.$store.state.ProjectSettings.age.map(item => {
        return {name: item, checked: false}
      })
    }
  },
  components: {
    Popup,
    collaspe
  },
  methods: {
    onConfirm (value) {
      this.show = false
    },
    open (msg) {
      const arr = ['类别', '计划']
      this.columns = arr.map(item => {
        return `${msg}${item}`
      })
      this.show = true
    },
    addType (msg) {
      this.title = msg
      this.add = true
    },
    contentSelect (item) {
      item.checked = !item.checked
    }
  }
}
</script>

<style lang="stylus">
@import '../../../common/style/mixin.styl'
.ProjectSettings >>> .van-picker__columns
  height 170px
.ProjectSettings
  margin 0 6px
  .comTitle
    margin 0
  .wrapper
    background white
    margin-bottom .10rem
    padding 0 .10rem
    .wrapper-header
      padding .10rem 0
      font-size .12rem;
      color #555555
      .bule
        float right
        color #2873FF
        span
          margin-left .10rem
    .content
      display flex
      justify-content space-between
      .img
        border:1px solid rgba(40,115,255,1);
        border-radius .04rem
        color #333333
        flex 1
        // width 30.85%
        height .48rem
        display flex
        // line-height 48px
        align-items center
        margin-bottom .10rem
        font-size 0
        margin-right .06rem
        &:last-child
          margin-right 0
        .img-wrapper, p
          text-align center
          display inline-block
          font-size .12rem;
        .img-wrapper
          flex 1 0 .45rem
          img
            width .23rem
        p
          flex 2 1 .66rem
          border-1pxLeft(#D3D3D3)
          height .28rem
          line-height .28rem
  .formCell
    padding 0 15px
    // height 35px
    font-size:14px;
    align-items center
    margin-top 10px
    .J-input
      width 66.67%
      border:1px solid rgba(40,115,255,1);
      border-radius:4px;
      height 26px
  .popup
    .button-cell
      margin-top 76px
  .popup-content
    width 3rem
    max-width 300px
    .title
      padding 10px 0
      margin 0 10px
      text-align center
      border-1px(#d3d3d3)
      .iconfont
        float right
        color #2873FF
    .plan-wrapper
      padding 10px 10px 0 10px
      height 391px
      overflow auto
      .formCell
        padding-left 10px
        padding-right 10px
      .time
        margin-bottom 5px
      .topic
        width 66.67%
        font-size:12px;
        color:rgba(153,153,153,1);
      .collaspe-content
        text-align center
      .content
        width 28.67%
        font-size:12px;
        color:rgba(40,115,255,1);
        border:1px solid rgba(40,115,255,1)
        background white
        height:30px;
        border-radius:4px;
        margin-left 5px
        margin-bottom 5px
        text-nowrap()
        &:nth-of-type(3n+1)
          margin-left 0
      .active
        color white
        background-color rgba(40,115,255,1)
      .liucheng
        .J-input
          width 26.67%
          display inline-block
          height:30px;
          border:1px solid rgba(40,115,255,1);
          border-radius:4px;
      .direct
        &:last-child, &:nth-of-type(10)
          width 44%
      .indirect
        width 44%
      .degree
        width 16.33%
        &:nth-of-type(3n+1)
          margin-left 5px
      .age
        width 21%
        &:nth-of-type(3n+1)
          margin-left 5px
</style>
