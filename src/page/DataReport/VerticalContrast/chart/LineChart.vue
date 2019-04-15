<template>
  <div class="LineChart" ref="myChart"></div>
</template>

<script>
import echarts from '@/common/js/echarts.js'
export default {
  name: 'LineChart',
  methods: {
    draw () {
      const myChart = echarts.init(this.$refs.myChart)
      window.onresize = () => {
        myChart.resize()
      }
      myChart.setOption({
        grid: {
          left: '3%',
          right: '16%',
          bottom: '6%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          position: 'top',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['时间段1', '时间段2', '时间段3', '时间段4'].reverse(),
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            margin: 20,
            textStyle: {
              fontSize: '14'
              // baseline: 'middle'
            }
          }
        },
        series: [
          {
            name: '时间段1',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '时间段2',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '时间段3',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '时间段4',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ],
        color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#ff69b4', '#ba55d4']
      })
    }
  },
  mounted () {
    this.draw()
    // this.$refs.myChart.style.width = window.innerWidth
  }
}
</script>

<style lang="stylus" scoped>
.LineChart
  margin 0 auto
  width 100%
  height 5rem
  max-height 500px
</style>
