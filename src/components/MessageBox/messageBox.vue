<template>
  <div v-show="visible" class="centerPop">
    <div class="wraning">
      <p class="waring-title border-1px">
        {{title}}
        <span class="iconfont" @click="visible = false">&#xe6d6;</span>
      </p>
      <div class="dialog-content">
        <img src="./image/warning.png">
        <p>{{message}}</p>
      </div>
      <div class="button-cell">
        <button class="reset" @click="cancel">{{cancelButtonText}}</button>
        <button class="complete" @click="confirm">{{confirmButtonText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      title: '',
      resolve: '',
      reject: '',
      promise: '',
      confirmButtonText: '',
      cancelButtonText: ''
    }
  },
  methods: {
    cancel () {
      this.visible = false
      this.resolve('cancel')
    },
    confirm () {
      this.visible = false
      this.resolve('成功')
    },
    showBox () {
      this.visible = true
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
      return this.promise
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.centerPop
    width 100%
    z-index 290
    position fixed
    top 0
    left 0
    height 100%
    background rgba(51,51,51,0.20)
    display flex
    align-items center
  .wraning
    width 80%
    max-width 300px
    background white
    margin 0 auto
    .waring-title
      margin 0 10px
      padding 15px 0
      text-align center
      font-size: 16px;
      color: #333333;
      font-weight 700
      border-1px(#D3D3D3)
      .iconfont
        position absolute
        right 0
        color #2873FF
    .dialog-content
      text-align center
      img
        width 28.7px
        margin 40px 0 20px 0
      p
        font-size 16px
        font-weight 700
        margin-bottom 60px
</style>
