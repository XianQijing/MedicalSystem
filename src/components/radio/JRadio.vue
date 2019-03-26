<template>
  <div class="JRadio" @click="getValue">
    <img :src="name===value ? icon.active : icon.normal" alt="">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JRadio',
  data () {
    return {
      value: null,
      icon: {
        active: require('@/common/image/active.png'),
        normal: require('@/common/image/normal.png')
      }
    }
  },
  props: {
    name: {
      type: [String, Number]
    }
  },
  methods: {
    getValue () {
      this.$parent.getRadioVal(this.name)
      this.$parent.grounp(this.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.JRadio
  vertical-align top
  display inline-block
  img
    width 14px
    line-height 14px
    vertical-align: middle;
  span
    vertical-align: middle;
    line-height 14px
</style>
