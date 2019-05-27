<template>
  <div class="upload">
    <div class="img">
      <img v-if="icon" src="../../common/image/upload.png" alt=""><span>{{ label }}</span>
    </div>
    <input :accept="accept" @change="upload" type="file">
  </div>
</template>

<script>
export default {
  name: 'upload',
  props: {
    accept: {},
    label: {
      type: String,
      default: '上传文件'
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    upload (e) {
      this.$emit('change', e.target.files)
    }
  }
}
</script>

<style lang="stylus" scoped>
.upload
  text-align center
  position relative
  min-height 20px
  font-size 14px
  .img
    vertical-align middle
    img
      width 19px
      height 19px
      vertical-align middle
    span
      color: #2873ff;
      font-size 1em
      vertical-align middle
      margin-left 10px
  input
    width 86px
    position absolute
    left 50%
    margin-left -43px
    top 0
    height 100%
    opacity 0
    z-index 5
</style>
