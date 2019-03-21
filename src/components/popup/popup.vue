<template>
  <transition name="fade">
    <div class="popup" :class="{overlay: overlay}" v-show="toShow" @touchmove.prevent @click="show($event)" :close-on-click-overlay="clickOverlay">
      <transition name="slide-fade">
        <div v-show="toShow" class="rightPop" v-if="position==='right'" @click="cancel($event)">
          <slot></slot>
        </div>
      </transition>
      <transition name="up">
        <div v-show="toShow" class="bottomPop" v-if="position==='bottom'" @click="cancel($event)">
          <slot></slot>
        </div>
      </transition>
      <!-- <transition>
        <div v-show="toShow" class="centerPop" v-if="position==='center'" @click="cancel($event)">
          <slot></slot>
        </div>
      </transition> -->
      <transition>
        <div v-show="toShow" class="centerPop warning" v-if="position==='center'" @click="cancel($event)">
          <div class="wraning">
            <p class="waring-title border-1px">
              <slot name="title"></slot>
            </p>
            <slot></slot>
          </div>
        </div>
      </transition>

      <transition>
        <div class="centerPop warning" v-if="position==='title'" @click="cancel($event)">
          <div class="wraning">
            <p class="waring-title border-1px">
              <slot name="title"></slot>
            </p>
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
    }
  },
  props: {
    position: {
      type: String,
      default: 'right'
    },
    clickOverlay: {
      type: Boolean,
      default: true
    },
    toShow: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show (e) {
      this.$emit('close', false)
      this.$emit('input', false)
    },
    cancel (e) {
      e.stopPropagation()
      e.cancelBubble = this.clickOverlay
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.overlay
  background rgba(51,51,51,0.20)
.popup
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  display flex
  align-items center
  z-index 50
  .rightPop
    width 90%
    max-width 300px
    height 100%
    background white
    position absolute
    right 0
    box-shadow: -1px 0 2px 0 rgba(0,0,0,0.50)
  .bottomPop
    width 100%
    height 220px
    background white
    box-shadow: 0 -1px 2px 0 rgba(0,0,0,0.50);
    position absolute
    bottom 0
    left 0
    z-index 300
  .centerPop
    width 100%
    z-index 290
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.up-enter-active
  height 200px
  animation up .2s
.up-leave-active
  height 0px
  animation down 1s
.up-enter, .up-leave-to
  opacity 1
@keyframes up {
  0% {
    height: 0px;
  }
  100% {
    height 220px
  }
}
@keyframes down {
  0% {
    height 220px
  }
  100% {
    height: 0px;
  }
}
</style>
