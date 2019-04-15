<template>
  <div class="Bar" ref="myChart"></div>
</template>

<script>
import echarts from '@/common/js/echarts.js'
export default {
  name: 'Bar',
  methods: {
    draw () {
      const myChart = echarts.init(this.$refs.myChart)
      myChart.clear()
      myChart.setOption({
        grid: {
          left: '-20%',
          right: '18%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        yAxis: {
          // nameRotate: 0.1,
          type: 'category',
          data: ['国家级课题', '省部级课题', '市局级课题', '区县级课题', '大学级课题'].reverse(),
          axisLabel: {
            interval: 0,
            margin: 90,
            textStyle: {
              align: 'left',
              fontSize: '14'
              // baseline: 'middle'
            }
          },
          axisTick: {
            show: false
          }
        },
        xAxis: {
          type: 'value',
          position: 'top',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            barWidth: '16px',
            itemStyle: {
              color: '#ff6565'
            }
          },
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            barWidth: '16px',
            itemStyle: {
              color: '#E44747'
            }
          },
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            barWidth: '16px',
            itemStyle: {
              color: '#C02020'
            }
          },
          {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            barWidth: '16px',
            itemStyle: {
              color: '#971717'
            }
          }
        ]
      })

      window.onresize = () => {
        myChart.resize()
      }
    }
  },
  mounted () {
    this.draw()
  }
}
</script>

<style lang="stylus" scoped>
.Bar
  width 100%
  max-height 517px
  height 5.17rem
</style>
