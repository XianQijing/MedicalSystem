<template>
  <div class="AssessmentExpert">
    <CTitle>评审专家库</CTitle>
    <div class="wrapper">
      <div class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="jump">
        <p class="name">{{item.name}}</p>
        <p class="num">{{item.num}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssessmentExpert',
  data () {
    return {
      list: [
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        },
        {
          name: '产科',
          num: '2'
        }
      ]
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'ExpertInformation'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.AssessmentExpert
  .wrapper
    .item
      width calc(100% / 4 - 3px)
      margin-right 4px
      margin-bottom 5px
      display inline-block
      height .6rem
      background: #ffffff;
      border-radius: .04rem
      text-align center
      box-shadow: 0px 1px  2px rgba(0,0,0,0.5);
      &:nth-of-type(4n)
        margin-right 0
      .name
        font-size .12rem
        color: #2873ff;
        padding .1rem 0 .04rem 0
        line-height: .15rem
      .num
        font-size: .2rem
        font-weight: 400;
        line-height: .25rem
</style>
