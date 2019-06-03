<template>
  <div class="SCI">
    <CTitle>中文医学核心期刊</CTitle>
    <ul>
      <li @click="jump(item.path, item.name)" v-for="item in chinese" :key="item.name"><span>•</span>{{item.name}}</li>
    </ul>
    <CTitle>SCI 医学期刊</CTitle>
    <ul>
      <li @click="jump(item.path, item.name)" v-for="item in SCI" :key="item.name"><span>•</span>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SCI',
  data () {
    return {
      chinese: [
        {
          name: '各省高级晋升期刊目录',
          path: 'Catalog'
        },
        {
          name: '北京大学图书馆版目录',
          path: 'Library'
        },
        {
          name: '中国科学院国图版目录',
          path: 'Library'
        },
        {
          name: '中国科技期刊统计目录',
          path: 'Catalog'
        }
      ],
      SCI: [
        {
          name: '国际权威医学期刊目录',
          path: 'International'
        },
        {
          name: '临床各科SCI 期刊排名',
          path: 'Ranking'
        },
        {
          name: '临床各科SCI 期刊网站',
          path: 'Catalog'
        },
        {
          name: 'SCI 期刊影响因子查询',
          path: 'Influence'
        }
      ]
    }
  },
  methods: {
    jump (path, name) {
      this.$router.push({name: path, query: {title: name}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.SCI
  width 100%
  margin 0 .06rem
  ul
    li
      padding 0 .10rem
      background white
      height .30rem
      margin-bottom 2px
      line-height .30rem
      font-size: .14rem;
      color: #333333;
      span
        font-size .16rem
        margin-right .05rem
</style>
