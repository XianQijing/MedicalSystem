<template>
  <div class="policyDetail">
    <CTitle>政策详情</CTitle>
    <div class="img">
      <img src="../../../../static/d.png" alt="">
    </div>
    <div class="content">
      <p class="title">通知文件标题</p>
      <p class="time">2018.09.01 12:00:00</p>
      <p class="desc">
        习近平在讲话中指出，短短10年光景，金砖合作从一个经济概念成长为具有重要影响力的国际合作机制，展现出勃勃生机和光明前景。未来10年，是金砖国家发展处于关键阶段、面临重大机遇和挑战的10年。金砖国家应该紧紧围绕和平与发展的时代主题，牢牢抓住新一轮科技革命和产业变革的机遇，顺应世界多极化、经济全球化潮流，努力开创金砖合作第二个“金色十年”。一要秉持金砖精神，深化金砖战略伙伴关系，加强沟通和协调，在国际上发挥金砖作用，推动构建开放型世界经济，维护共同利益和发展空间。二要坚持“三轮驱动”，丰富金砖务实合作内涵，继续朝着贸易投资大市场、货币金融大流通、基础设施大联通、人文大交流的方向，打造更多合作亮点，加强协调和指导，确保金砖国家新工业革命伙伴关系取得实实在在成果。三要拓展“金砖+”合作，构建广泛伙伴关系，让其他新兴市场国家和发展中国家都参与到金砖合作中来，形成维护共同利益、促进共同发展的强大力量。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyDetail'
}
</script>

<style lang="stylus" scoped>
.img
  margin 0 6px
  height: 1.6rem;
  background:rgba(0,0,0,0);
  box-shadow:0px 3px 6px rgba(0,0,0,0.16)
  overflow hidden
  position relative
  z-index 0
  img
    height 100%
.content
  margin 0 6px
  background white
  padding 10px
  p
    margin-bottom 0.15rem
  .title
    font-size 0.16rem
    color #333333
  .time
    font-size 0.12rem
    color #999999
  .desc
    font-size 0.12rem
    color:#555555
    line-height 0.18rem
    text-indent 2em
</style>
