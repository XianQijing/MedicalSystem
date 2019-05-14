// 影响因子
<template>
  <div class="influence">
    <CTitle>
      检索条件
      <span slot="float"><img @click="open =!open" :src="open ? icon.close : icon.open" alt=""></span>
    </CTitle>
    <div v-show="open" class="name">
      <div class="formCell">
        <p form-label>按期刊名称：</p>
        <j-input placeholder="df"></j-input>
      </div>
      <div class="formCell">
        <p form-label>按影响因子：</p>
        <j-input placeholder="df"></j-input>
      </div>
      <button @click="jump">查询</button>
    </div>
    <div class="list" :class="{'open': open === true}" ref="wrapper">
      <div>
        <div class="area"
          v-for="(item, key) in list"
          :ref="key"
          :key="key">
          <div class="title">{{key}}</div>
          <ul class="item-list">
            <li class="item" v-for="(i, index) in item" :key="index">
              <p class="big">{{i.english}}</p>
              <div>
                <p>影响因子：2.938</p>
                <p>{{i.chinese}}</p>
              </div>
              <div>
                <p>影响因子：2.938</p>
                <p>{{i.chinese}}</p>
              </div>
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
  name: 'Influence',
  data () {
    return {
      title: '',
      letter: '',
      open: false,
      icon: {
        close: require('../../../common/image/close.png'),
        open: require('../../../common/image/open.png')
      },
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
          }
        ],
        C: [
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
        ],
        B: [
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
        ],
        D: [
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
    this.$store.commit('changeTitle', this.$route.query.title)
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleChange (letter) {
      this.letter = letter
    },
    jump () {
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
.influence
  .comTitle
    img
      width 18px
  .ss
    color black
    font-size:13px;
    span
      color #2873FF
  .list
    position absolute
    overflow hidden
    top 30px
    left 0
    right 0
    bottom 0
    &.open
      top 140px
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
        div
          p
            display inline-block
            min-width 143px
            vertical-align top
            font-weight 200
  .name
    z-index 3
    position relative
    text-align center
    button
      width:100px;
      height:30px;
      background:rgba(40,115,255,1);
      border-radius:6px;
      color white
      margin-top 10px
    .formCell
      font-size 14px;
      background white
      margin 0 6px 2px 6px
      height 30px
      padding 0 0px 0 10px
      p
        line-height 30px
.influence >>> .J-input
      input
        text-align right
</style>
