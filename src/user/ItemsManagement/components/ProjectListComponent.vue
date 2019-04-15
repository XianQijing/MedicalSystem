<template>
  <div class="ProjectListComponent">
    <CTitle>主办会议预算</CTitle>
    <div class="wapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in list" :key="index" data-swiper-autoplay="3000">
          <div class="content">
            <div class="icon-wrapper" @click="clickTab(icon.name, index)" v-for="(icon, i) in item" :key="i">
              <img :src="tab === icon.name ? icon.icon.active :icon.icon.normal" alt="">
              <p>{{icon.name}}</p>
            </div>
          </div>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
    <CTitle>
      {{tab}}
      <span slot="float">新增</span>
    </CTitle>
    <div class="form"
     v-for="(item, index) in $store.state.iconList"
     :key="index"
     v-show="tab === item.name"
     >
      <div class="form-header">
        <span>NO</span>
        <span class="blue">删除</span>
      </div>
      <p class="price">价格（元）：0</p>
      <div class="formCell border-1px">
        <p class="form-label">科目名称：</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">单价（元/天）：</p>
        <JInput/>
      </div>
      <div class="formCell border-1px">
        <p class="form-label">数量：</p>
        <JInput/>
      </div>
      <div class="form-cell">
        <p class="form-label">备注：</p>
        <textarea placeholder="备注"></textarea>
      </div>
    </div>
      <div class="btn">
        <button class="butto" @click="next" v-if="index !== 2">下一页</button>
      </div>
      <div class="button-cell" v-if="index === 2">
        <button class="reset" @click="cancel">取消</button>
        <button class="complete">确认提交</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      tab: '会场费用',
      index: 0,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletElement: 'li',
          clickable: true,
          bulletActiveClass: 'my-bullet-active'
        },
        loop: false,
        autoplay: false
      }
    }
  },
  computed: {
    list () {
      const pages = []
      this.$store.state.iconList.forEach((item, index) => {
        const page = Math.floor(index / 3)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    clickTab (msg, i) {
      this.tab = msg
      this.index = i
    },
    next () {
      this.index++
      this.tab = this.list[this.index][0].name
      this.$refs.mySwiper.swiper.activeIndex = this.index
    },
    cancel () {
      this.index = 0
      this.$refs.mySwiper.swiper.activeIndex = this.index
      this.tab = '会场费用'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.ProjectListComponent >>> .my-bullet
  background: #C6DAFF;
  border-radius: 4px;
  width 20px
  height 4px
  display inline-block
  margin-right 10px
  outline:none
  &:last-child
    margin 0
.ProjectListComponent >>> .my-bullet-active
  background: #2873FF;
  outline:none
.ProjectListComponent
  padding-bottom 20px
  .wapper
    overflow hidden
    height 96px
    background white
    box-shadow:0px 1px 2px rgba(0,0,0,0.5);
    .content
      display flex
      // height 85px
      text-align center
      .icon-wrapper
        flex 1
        img
          width 35px
          margin 10px 0
        p
          color #2873FF
          font-size:14px;
          margin-bottom 18px
    .swiper-pagination
      position relative
  .form
    background white
    box-shadow:0px 1px 2px rgba(0,0,0,0.5);
    padding 10px
    p
      font-size 16px
    .form-header
      margin 2px 0
      span
        font-size:14px;
      .blue
        font-size 13px
        float right
        color #2873FF
    .price
      padding 5px 0
    .formCell
      height 45px
      align-items center
      border-1px(#D3D3D3)
      padding-left 10px
      color #FD4D4D
      .J-input
        border:1px solid rgba(253,77,77,1)
        height 30px
        width 30%
        border-radius:6px;
    .form-cell
      padding-left 10px
      .form-label
        color #FD4D4D
        line-height 40px
      textarea
        height:100px;
        border:1px solid rgba(253,77,77,1);
        border-radius:6px;
        width 100%
        padding 6px 10px
        box-sizing border-box
        font-size:14px;
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
