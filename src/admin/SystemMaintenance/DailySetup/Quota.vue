<template>
  <div class="Quota">
    <div class="white">
      <p class="no">NO：00210</p>
      <p class="black">专家评分表名称</p>
      <p class="desc">评分表类别</p>
      <p class="desc">评分表类型</p>
      <div class="icon">
        <div>
          <p class="iconfont" :class="{'active': active==='一级指标'}">&#xe612;</p>
          <p class="icon-desc">一级指标</p>
        </div>
        <div>
        <p class="iconfont" :class="{'active': active==='二级指标'}">&#xe613;</p>
          <p class="icon-desc">二级指标</p>
        </div>
        <div>
        <p class="iconfont" :class="{'active': active==='三级指标'}">&#xe615;</p>
          <p class="icon-desc">三级指标</p>
        </div>
        <div>
        <p class="iconfont" :class="{'active': active==='四级指标'}">&#xe614;</p>
          <p class="icon-desc">四级指标</p>
        </div>
      </div>
    </div>
    <div class="white item">
      <div class="no">NO：00210
        <div class="right">
          <span>修改</span><span>删除</span>
        </div>
      </div>
      <p class="black">专家评分表名称</p>
    </div>
    <div class="btn">
      <button class="butto" @click="addType('添加指标')">新增指标</button>
    </div>
    <Popup v-model="add" position="center" :title="title">
      <div class="formCell">
        <p class="form-label">评审指标</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">指标排序</p>
        <JInput/>
      </div>
      <div class="button-cell">
        <button class="reset">重置</button>
        <button class="complete">完成</button>
      </div>
    </Popup>
    <Popup v-model="add1" position="center" :title="title">
      <div class="formCell">
        <p class="form-label">评审指标</p>
        <JInput/>
      </div>
      <div class="formCell">
        <p class="form-label">指标排序</p>
        <JInput/>
      </div>
      <div class="form-Cell border-1px">
        <p class="form-label">指标含义及说明</p>
        <textarea/>
      </div>
      <CTitle>
        指标详细信息
        <div slot="float" class="right">
          <span>新增</span><span>删除</span>
        </div>
      </CTitle>
      <div class="formCell">
        <p class="form-label">指标标准分</p>
        <JInput/>
      </div>
      <div class="form-Cell">
        <p class="form-label">评分标准</p>
        <textarea/>
      </div>
      <div class="formCell">
        <p class="form-label">评分范围</p>
        <JInput class="small"/>-<JInput class="small"/>
      </div>
      <div class="button-cell">
        <button class="reset">重置</button>
        <button class="complete">完成</button>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '@/components/popup/popup2'
export default {
  name: 'Quota',
  data () {
    return {
      active: '',
      add: false,
      add1: false,
      title: '添加指标'
    }
  },
  created () {
    this.active = this.$route.query.msg
  },
  methods: {
    addType (msg) {
      this.title = msg
      if (this.active === '一级指标' || this.active === '二级指标') {
        this.add = true
      } else {
        this.add1 = true
      }
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.Quota
  margin 0 6px
  padding 10px 0
  .item
    padding-bottom .1rem
  .comTitle
    margin 0 9px
  .white
    box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
    background white
    margin-bottom 10px
    .no, .black, .desc
      margin 0 .1rem
      padding-top .1rem
    .no
      color: #555555
      font-size .12rem
      line-height .15rem
    .black
      font-size .16rem
      line-height .2rem
      color #333
    .desc
      font-size .14rem
      line-height .18rem
    .icon
      display flex
      justify-content space-around
      margin-top .1rem
      div
        text-align center
      .icon-desc
        font-size .12rem
        margin-top .08rem
        line-height .15rem
        margin-bottom .15rem
      .iconfont
        color #2873FF
        font-size .3445rem
        font-weight 600
        border-radius 50%
        width: 0.3445rem;
        line-height: 0.33rem;
        text-align center
        margin 0 auto
        &.active
          background #2873FF
          color white
  .right
    float right
    font-size .14rem
    color: #2873ff;
    span
      margin-left .1rem
  .popup
    .button-cell
      margin-top 34px
  .formCell, .form-Cell
    margin 0 9px
    padding 0 6px
    // height 35px
    font-size:14px;
    align-items center
    margin-top 10px
    .J-input
      width 66.67%
      border:1px solid #2873FF;
      border-radius:4px;
      max-height 26px
      height .26rem
      &.small
        width .9rem
        max-width 90px
    textarea
      border-radius:4px;
      border:1px solid #2873FF
      height 86px
      width 100%
      margin-top 6px
    &.border-1px
      margin-bottom 10px
      border-1px(#d3d3d3)
</style>
