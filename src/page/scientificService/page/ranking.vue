// 期刊SCI排名
<template>
  <div class="ranking">
    <div class="wrapper">
      <CTitle>科室选择</CTitle>
      <div v-for="(item, key) in list" :key="key" :class="key">
        <button v-for="i in item" :key="i">{{i}}</button>
      </div>
    </div>
    <div class="button-cell">
      <button class="reset">重置</button>
      <button class="complete" @click="jump">查询</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  data () {
    return {
      list: {
        first: ['过敏', '护理', '护理', '外科', '药学', '移植'],
        second: ['病理学', '病毒学', '骨科学', '核医学', '麻醉学', '肾脏病',
          '免疫学', '男科学', '心理学', '小儿科', '血液学', '眼科学', '遗传学', '营养学', '肿瘤学'],
        third: ['妇产科学', '传染病学', '风湿病学', '公共卫生', '呼吸系统', '急救医学', '精神病学',
          '康复医学', '老年医学', '肾脏病学', '内分泌学', '皮肤病学', '全科医学', '神经成像', '神经科学',
          '危重病学', '行为科学', '口腔医学', '药物滥用', '实验技术', '医学信息', '运动科学', '整形外科'],
        fouth: ['耳鼻喉科学', '临床神经学', '生殖生物学', '外周血管学', '胃肠肝病学', '心血管系统']
      }
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'JournalRanking', query: {title: 'International'}})
    }
  }
}
</script>

<style lang="stylus" scoped>
.ranking
  height 100%
  .wrapper
    min-height 100%
    padding-bottom 30px
    box-sizing border-box
    .second, .third, .fouth
      font-size:12px;
      margin 0px 6px 10px 6px
      button
        width 0.87rem
        height 30px
        border:1px solid rgba(40,115,255,1);
        border-radius:4px;
        background none
        color #2873FF
        margin-left 0.04rem
        margin-bottom 4px
        &:nth-child(4n+1)
          margin-left 0
        &:nth-child(1)
          margin-left 0
    .first
      margin 0px 6px 10px 6px
      font-size:12px;
      button
        width 0.69rem
        height 30px
        border:1px solid rgba(40,115,255,1);
        border-radius:4px;
        background none
        color #2873FF
        margin-left 0.04rem
        margin-bottom 4px
        &:nth-child(1)
          margin-left 0
        &:nth-child(6)
          margin-left 0
  .button-cell
    position relative
    bottom 0
    margin-top -30px
@media screen and (min-width: 768px)
  .wrapper
    div
      button
        margin-left 0.0376rem!important

@media screen and (min-width: 1024px)
  .wrapper
    div
      button
        margin-left: 0.02rem !important
</style>
