<template>
  <button
    class="j-button"
    :disabled="disabled"
    :type="nativeType"
    @click="handleClick"
    :class="[
      type ? `j-button--${type}` : '',
      {
        'is-round': round,
        'is-plain': plain
      }
    ]"
  >
  <IconSvg :iconClass="icon" v-if="icon"></IconSvg>
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    icon: String,
    nativeType: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.j-button
  width 1rem
  height .3rem
  font-size .14rem
  white-space: nowrap
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin-left .1rem
  &:first-child
    margin-left 0
  &.j-button--primary
    background $blue
    color white
    &.is-plain
      background $light
      color $blue
  &.is-round
    border-radius .06rem

</style>
