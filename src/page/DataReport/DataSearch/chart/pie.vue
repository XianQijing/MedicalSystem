<template>
  <div class="Pie" ref="myChart"></div>
</template>

<script>
import echarts from '@/common/js/echarts.js'
export default {
  name: 'Pie',
  methods: {
    draw () {
      const myChart = echarts.init(this.$refs.myChart)
      window.onresize = () => {
        myChart.resize()
      }

      myChart.setOption({
        grid: {
          left: '0%',
          right: '0%',
          top: 0
        },
        legend: {
          orient: 'horizontal',
          bottom: 20,
          itemWidth: 6,
          itemHeight: 12,
          data: ['国家级课题', '省部级课题', '市局级课题', '区县级课题', '大学级课题', '本单位级课题', '其他级课题'],
          textStyle: {
            fontSize: 10
          }
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            legendHoverLink: false,
            hoverAnimation: false,
            data: [
              {value: 335, name: '国家级课题'},
              {value: 310, name: '省部级课题'},
              {value: 234, name: '市局级课题'},
              {value: 135, name: '区县级课题'},
              {value: 1548, name: '大学级课题'},
              {value: 135, name: '本单位级课题'},
              {value: 1548, name: '其他级课题'}
            ],
            label: {
              formatter: '{d}%'
            },
            labelLine: {
              length: 12,
              length2: 12
            },
            center: ['50.5%', '34%']
          }
        ],
        color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d4']
      })
    }
  },
  mounted () {
    this.draw()
    this.$refs.myChart.style.width = window.innerWidth
  }
}
</script>

<style lang="stylus" scoped>
.Pie
  width 100%
  margin 0 auto
  height 339px
</style>
