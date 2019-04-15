<template>
  <div class="HorizontalContrast">
    <div class="tabs">
      <button @click="jump(item)" v-for="(item, index) in tabList" :class="{'active': index === 2}" :key="index">
        {{item.name}}
      </button>
    </div>
    <CTitle>科室选择</CTitle>
    <Collaspe name="科室选择">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <CTitle>数据类别</CTitle>
    <Collaspe name="学科建设">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="人才培养">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="科技奖励">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="学术论文">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="学术会议">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="专利申请">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="社会任职">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="学术活动">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <Collaspe name="著作出版">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete" @click="search">查询</button>
    </div>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
export default {
  name: 'HorizontalContrast',
  data () {
    return {
      tabList: [
        {
          name: '数据查询',
          path: 'DataSearch'
        },
        {
          name: '纵向对比',
          path: 'VerticalContrast'
        },
        {
          name: '科室数据'
        },
        {
          name: '科研报表',
          path: 'ScientificResearchReport'
        }
      ],
      testList: [
        '全选', '产科', '骨科', '眼科', '妇科', '病案室', '营养科', '传染科', '针灸科',
        '推拿科', '康复科', '麻醉科', '放射科', '护理部', '超声科'
      ]
    }
  },
  methods: {
    jump (msg) {
      if (msg.path) {
        this.$router.push({name: msg.path})
      }
    },
    search () {
      this.$router.push({name: 'HorizontalDetail'})
    }
  },
  components: {
    Collaspe
  }
}
</script>

<style lang="stylus" scoped>
.HorizontalContrast
  padding 10px 0 20px 0
  margin 0 6px
  .comTitle
    margin 0
  .tabs
    button
      width calc(100% / 4 - 3px)
      border: 1px solid #2873ff
      height .3rem
      margin-right 4px
      color #2873ff
      font-size .12rem
      background none
      &:last-child
        margin 0
    .active
      color white
      background #2873ff
  .select
    button
      width calc(100% / 5 - 4px)
      border: 1px solid #2873ff
      height .3rem
      margin-right 4px
      color #2873ff
      font-size .12rem
      background none
      margin-bottom 4px
      border-radius: .04rem
      &:nth-child(-n+5)
        margin-bottom 10px
      &:nth-of-type(5)
        margin-right 0
      &:nth-of-type(n + 6)
        width calc(100% / 4 - 4px)
  .button-cell
    position fixed
    bottom 0
    left 0
</style>
