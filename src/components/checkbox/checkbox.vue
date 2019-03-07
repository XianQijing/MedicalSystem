<template>
  <div class="checkbox">
    <input type="checkbox" class="original" :checked="value" @change="onChange($event)">
    <div :class="show" class="check"></div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {}
  },
  computed: {
    show () {
      if (this.value === false) {
        return 'normal'
      } else if (this.value === true) {
        return 'active'
      }
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', e.target.checked)
      this.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.checkbox
  width 12px
  height 12px
  position relative
  display inline-block
  .original
    opacity 0
  .original, .check
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index 3
  .check
    z-index 0
    &.active
      bg-image(active)
      background-size 100%
    &.normal
      bg-image(normal)
      background-size 100%
</style>
