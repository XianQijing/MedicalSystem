<template>
  <div class="J-input">
    <input type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      v-if="type==='text'">
    <input
      class="select"
      type="text"
      :value="value"
      readonly
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      v-if="type==='select'">
    <!-- <input type="text" :value="value"> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {}
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.J-input
  padding 0 10px
  height 100%
  display flex
  align-items center
  margin 0
  input
    width 100%
    font-size: 14px;
  .select
    padding 0 12px 0 0
    bg-image(arrow)
    background-size 12px
    background-position center right
</style>
