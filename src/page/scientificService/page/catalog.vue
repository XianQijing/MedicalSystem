// 期刊目录、期刊统计目录、临床各科SCI 期刊网站
<template>
  <div class="catalog">
    <CTitle>
      {{title}}
      <p v-if="title === '各省高级晋升期刊目录'" class="ss" slot="float">切换省份:<span @click="show=true">{{address}}</span></p>
    </CTitle>
    <div class="list" ref="wrapper">
      <div>
        <div class="area"
          v-for="(item, key) in list"
          :ref="key"
          :key="key">
          <div class="title">{{key}}</div>
          <ul class="item-list">
            <li class="item" v-for="i in item" :key="i">{{i}}</li>
          </ul>
        </div>
      </div>
    </div>
    <Alphabet :list="list" @change="handleChange"/>
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="onCancel"
        :item-height=30
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Alphabet from './Alphabet'
export default {
  name: 'Catalog',
  data () {
    return {
      title: '',
      address: '上海',
      letter: '',
      show: false,
      list: {
        A: ['癌变、突变', '癌症', '安徽科技大学学报', '安徽中医学院学报', '氨基酸和生物资源'],
        B: [
          '蚌埠医学院学报',
          '北京大学学报医学版',
          '北京口腔医院',
          '北京生物医学工程',
          '北京医学',
          '北京中医药大学学报',
          '标记免疫分析与临床',
          '病毒学报'
        ],
        C: [
          '肠外与肠内营养',
          '成都中医药大学学报'
        ],
        D: [
          '蚌埠医学院学报',
          '北京大学学报医学版',
          '北京口腔医院',
          '北京生物医学工程',
          '北京医学',
          '北京中医药大学学报',
          '标记免疫分析与临床',
          '病毒学报'
        ],
        E: [
          '蚌埠医学院学报',
          '北京大学学报医学版',
          '北京口腔医院',
          '北京生物医学工程',
          '北京医学',
          '北京中医药大学学报',
          '标记免疫分析与临床',
          '病毒学报'
        ],
        F: [
          '蚌埠医学院学报',
          '北京大学学报医学版',
          '北京口腔医院',
          '北京生物医学工程',
          '北京医学',
          '北京中医药大学学报',
          '标记免疫分析与临床',
          '病毒学报'
        ]
      },
      columns: [
        '安徽', '北京', '福建', '湖南'
      ]
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
    },
    onCancel () {
      this.show = false
    },
    onConfirm (value, index) {
      this.address = value
      this.show = false
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
.catalog >>> .van-picker
  .van-picker__columns
    z-index 0
    position relative
    top -18px
.catalog
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
</style>
