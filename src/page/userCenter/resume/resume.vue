<template>
  <div class="resume">
    <CTitlt :screen="true" :textList="textList">简历列表</CTitlt>
    <div class="list" @click="jump">
      <div class="img-wapper">
        <img width="100%" src="../../../common/image/Bitmap@2x.png" alt="">
      </div>
      <div class="text-wapper">
        <p class="name">姓名占位-所属科室</p>
        <p class="xueKe">重点学科、重点实验室</p>
        <p>职称、职务、单位</p>
      </div>
    </div>
  </div>
</template>

<script>
import CTitlt from '@/components/title/title'
export default {
  name: 'Resume',
  data () {
    return {
      textList: ['性别选择', '民族选择', '科室选择', '专业选择', '学历选择']
    }
  },
  components: {
    CTitlt
  },
  methods: {
    jump () {
      this.$router.push({path: '/resumeDetail'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.resume
  width 100%
  .list
    margin 0 10px 10px 10px
    position relative
    .img-wapper
      background white
      border-left 1px solid #999999
      border-right 1px solid #999999
      width 1rem
      height 1rem
      display inline-block
      vertical-align top
      border-radius 50%
      box-sizing border-box
    .text-wapper
      background white
      z-index -1
      display inline-block
      vertical-align top
      height 1rem
      width 3.05rem
      position absolute
      left 0.5rem
      right 100px
      p
        font-size:0.12rem;
        color:rgba(153,153,153,1);
        margin-top 0.15rem
        margin-left 0.59rem
      .name
        font-size:0.14rem;
        color:rgba(51,51,51,1);
      .xueKe
        color:rgba(51,51,51,1)
</style>
