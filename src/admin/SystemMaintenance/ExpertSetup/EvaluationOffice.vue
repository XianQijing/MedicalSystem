<template>
  <div class="EvaluationOffice">
    <Collaspe name="预置评审科室库">
      <div class="select">
        <button v-for="(item, index) in testList" :key="index">
          {{item}}
        </button>
      </div>
    </Collaspe>
    <CTitle>系统评审科室库</CTitle>
    <SystemSelect :list="test" v-model="multiple">
      <div slot="button" class="button">
        <button class="shanchu">删除</button>
      </div>
    </SystemSelect>
  </div>
</template>

<script>
import Collaspe from '@/components/collaspe/collaspe'
import SystemSelect from '@/components/SystemSelect/SystemSelect'
export default {
  name: 'EvaluationOffice',
  data () {
    return {
      multiple: [],
      test: [
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        },
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        },
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        },
        {
          name: '儿外科',
          children: [
            {
              name: '小儿普通外科'
            },
            {
              name: '小儿泌尿外科'
            },
            {
              name: '小儿心胸外科'
            },
            {
              name: '小儿神经外科'
            }
          ]
        }
      ],
      testList: [
        '全选', '产科', '骨科', '眼科', '妇科', '病案室', '营养科', '传染科', '针灸科',
        '推拿科', '康复科', '麻醉科', '放射科', '护理部', '超声科'
      ]
    }
  },
  components: {
    Collaspe,
    SystemSelect
  }
}
</script>

<style lang="stylus" scoped>
.EvaluationOffice
  .comTitle
    margin 0
  .select
    button
      width calc(100% / 5 - 4px)
      border: 1px solid #2873ff
      height .3rem
      margin-right 4px
      color #2873ff
      font-size .12rem
      background none
      margin-bottom 4px
      border-radius: .04rem
      &:nth-child(-n+5)
        margin-bottom 10px
      &:nth-of-type(5)
        margin-right 0
      &:nth-of-type(n + 6)
        width calc(100% / 4 - 4px)
  .button
    font-size 0
    .shanchu
      height .3rem
      width .78rem
      font-size .14rem
      color white
      background: #fd4d4d;
</style>
