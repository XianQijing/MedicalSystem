// 我的著作
<template>
  <div class="myWrite">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      著作列表
    </c-title>

    <card
      v-for="(item, index) in messageList"
      :key="index"
      :time="item.time"
      >
      <p class="no border-1pxLeft">NO：{{item.name}}</p>
      <span class="black">陈升息－眼科、副主任医师、医生</span>
      <span>完成人姓名-完成人属性、完成人单位、排名</span>
      <p class="black border-1pxTop">著作名称</p>
      <span>ISBN号、主要合作单位</span>
      <span>印数／字数／定价：34/34876/¥28.00</span>
      <span>出版年月／著作类型：2016.09/人民出版社</span>
      <span class="reset">审核日期：2018.04.22</span>
      <div style="text-align:center">
        <JButton type="primary" round @click="jump">查看</JButton>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: 'MyWrite',
  data () {
    return {
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '审核中'
        }
      ],
      textList: ['时间范围', '著作属性', '著作类型']
    }
  },
  methods: {
    jump () {
      this.$router.push({name: 'WritingsDetail'})
    }
  }
}
</script>
