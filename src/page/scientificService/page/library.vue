// 北京大学图书馆版目录、中国科学院国图版目录
<template>
  <div class="library">
    <CTitle>
      {{title}}
    </CTitle>
    <div class="list" ref="wrapper">
      <div>
        <div class="area"
          v-for="(item, key) in list"
          :ref="key"
          :key="key">
          <div class="title">{{key}}</div>
          <ul class="item-list">
            <li class="item" v-for="(i, index) in item" :key="index">
              <p class="big">{{i.english}}</p>
              <p>{{i.chinese}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Alphabet :list="list" @change="handleChange"/>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Alphabet from './Alphabet'
export default {
  name: 'Library',
  data () {
    return {
      title: '',
      letter: '',
      show: false,
      list: {
        A: [
          {
            english: 'AIBIAN',
            chinese: '期刊分类： R3基础医学'
          },
          {
            english: 'AIBIAN',
            chinese: '期刊分类： R3基础医学'
          },
          {
            english: 'AIBIAN',
            chinese: '期刊分类： R3基础医学'
          },
          {
            english: 'AIBIAN',
            chinese: '期刊分类： R3基础医学'
          }
        ]
      }
    }
  },
  components: {
    Alphabet
  },
  mounted () {
    this.title = this.$route.query.title
    document.title = this.$route.query.title
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleChange (letter) {
      this.letter = letter
    }
  },
  watch: {
    letter (val) {
      if (this.letter) {
        const element = this.$refs[val][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.library
  .ss
    color black
    font-size:13px;
    span
      color #2873FF
  .list
    position absolute
    overflow hidden
    top 35px
    left 0
    right 0
    bottom 0
    .area
      margin 0 6px
      padding-bottom 10px
    .title
      vertical-align middle
      font-size:16px;
      font-weight 500
      padding-left 10px
    .item-list
      .item
        padding 10px 10px
        background white
        margin-top 2px
        font-size:14px;
        .big
          margin-bottom 10px
          font-size:16px;
</style>
