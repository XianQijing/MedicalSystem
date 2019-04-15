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

      myChart.setOption({
        grid: {
          left: '-25%',
          right: '18%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        yAxis: {
          // nameRotate: 0.1,
          type: 'category',
          data: ['国家级课题', '省部级课题', '市局级课题', '区县级课题', '大学级课题', '本单位级课题', '其他级课题'].reverse(),
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
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: '16px',
          itemStyle: {
            color: '#ff6565'
          }
        }]
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
  height 339px
</style>
