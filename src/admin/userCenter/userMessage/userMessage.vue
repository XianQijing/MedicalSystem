<template>
  <div class="UserMessage">
    <c-title
      :screen="true"
      :textList="textList"
      screenText="筛选">
      信息列表
    </c-title>

    <div class="card-wapper">
      <checkall v-model="test">
        <card
          v-for="(item, index) in messageList"
          :key="index"
          :status="item.type"
          type="selection"
          :data="item"
          :time="item.time"
          >
          <p class="no border-1pxLeft">NO：{{item.name}}</p>
          <span class="black">陈升息－眼科、副主任医师、医生</span>
          <span>15221135677、硕士研究生</span>
          <span>登录次数：362</span>
          <span class="resTime">注册时间：2018.09.23 13:51</span>
          <div style="text-align: center">
            <JButton type="primary" round @click="jump">修改</JButton>
          </div>
        </card>
        <button slot="button" class="start" @click="stop('启用')">启用</button>
        <button slot="button" class="stop" @click="stop('停用')">停用</button>
        <button slot="button" class="delete" @click="stop('删除')">删除</button>
      </checkall>
    </div>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
export default {
  name: 'UserMessage',
  data () {
    return {
      test: [],
      keshi: 'sf',
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '正常'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '停用'
        }
      ],
      textList: ['时间范围', '所属科室', '学历选择', '学位选择', '职称选择', '职称级别']
    }
  },
  methods: {
    // 路由跳转
    jump () {
      this.$router.push({name: 'EditPersonalMessage'})
    },
    stop (type) {
      if (this.test.length > 0) {
        // this.open()
        // this.toDo = type
        this.$MessageBox(`确认${type}所选任职`, '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }).then(() => {

        }).catch(() => {

        })
      }
    }
  },
  components: {
    Checkall
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.UserMessage
  padding-bottom 30px
  margin 0 6px
  .delete, .start, .stop
    width 58px
    color white
    height 30px
    background: #FD4D4D
    font-size 14px
  .start
    background: #45C186;
  .stop
    background: #F9712C;
  .delete
    background: #FD4D4D
</style>
