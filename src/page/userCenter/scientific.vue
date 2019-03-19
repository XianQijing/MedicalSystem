<template>
  <div class="scientific">
    <div class="blue">
      <img src="./closeEyes.png" alt="">
      <p class="dui">科研对标</p>
      <p class="nei">
        科研对标内容占位
        科研对标内容
      </p>
    </div>

    <div class="white">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Scientific'
}
</script>

<style lang="stylus" scoped>
.scientific
  padding-top 20px
  .blue
    background: #174BAF;
    color white
    text-align center
    margin 0 6px
    height 2rem
    box-sizing border-box
    img
      width 0.4rem
      height 0.4rem
      border 1px solid black
      margin-top 0.305rem
    .dui
      margin-top 0.1rem
      font-size 0.14rem
    .nei
      font-size: 0.14rem
      margin 0 auto
      margin-top 0.20rem
      width 1.2rem
      line-height 0.2rem
  .white
    margin 10px 6px
    background white
    height 3.5rem
</style>
