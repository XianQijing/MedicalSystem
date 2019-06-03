// 管理员权限
<template>
  <div class="AdminRole">
    <checkall v-model="multiple">
      <card
        v-for="(item, index) in messageList"
        :key="index"
        :status="item.type"
        :time="item.time"
        type="selection"
        :data="item"
        >
        <p class="no border-1pxLeft">NO：{{item.name}}</p>
        <span class="black">申请人-所属单位</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <span>项目类别</span>
        <div style="text-align:center">
          <JButton type="primary" round @click="setting">权限设置</JButton>
          <JButton type="primary" round plain @click="jump">修改账户</JButton>
          <!-- <button slot="button" class="abtn" @click="jump">修改账户</button> -->
        </div>
      </card>
      <button slot="button" class="delete">删除</button>
    </checkall>

    <p class="addNewOne" @click="account('添加账户')"></p>
    <popup position="center" v-model="settingShow" title="权限设置">
      <div class="button-wrapper">
        <button v-for="item in $store.state.SystemMaintenance.AdminRole" :key="item">
          {{item}}
        </button>
      </div>
      <div class="button-cell ss">
        <button class="reset">取消</button>
        <button class="complete">保存</button>
      </div>
    </popup>
    <popup position="center" v-model="accountShow" :title="accountTitle">
      <div class="button-wrapper">
        <div class="formCell">
          <p class="form-label">姓名</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">账号</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">密码</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">金额</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">职称</p>
          <JInput type="select"/>
        </div>
        <div class="formCell">
          <p class="form-label">职务</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">邮箱</p>
          <JInput/>
        </div>
        <div class="formCell">
          <p class="form-label">状态</p>
          <JInput type="select"/>
        </div>
      </div>
      <div class="button-cell">
        <button class="reset">取消</button>
        <button class="complete">保存</button>
      </div>
    </popup>
  </div>
</template>

<script>
import Checkall from '@/components/checkbox/checkall'
import Popup from '@/components/popup/popup2'
export default {
  name: 'AdminRole',
  data () {
    return {
      settingShow: false,
      accountShow: false,
      // accountTitle: '修改账户',
      textList: ['时间范围', '计划状态', '项目类别', '项目计划'],
      messageList: [
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '未打印'
        },
        {
          time: '2018.04.12 14:56',
          no: '00210',
          name: '用户名占位',
          type: '通过',
          dayin: '已打印'
        }
      ],
      multiple: []
    }
  },
  components: {
    Checkall,
    Popup
  },
  computed: {
    accountTitle () {
      if (this.multiple.length > 0) {
        return '修改账户'
      } else {
        return '添加账户'
      }
    }
  },
  methods: {
    setting () {
      this.settingShow = true
    },
    account () {
      // this.accountTitle = msg
      this.accountShow = true
    },
    jump () {
      this.$router.push({name: 'AdminMessage'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl'
.AdminRole
  padding-bottom 20px
  .delete
    width 58px
    color white
    height 30px
    background: $red
    font-size 14px
  .addNewOne
    background-image url('../../../common/image/newDetail.png')
    height 40px
    width 40px
    background-size 40px
    display inline-block
    position fixed
    right 24px
    bottom 39px
  .button-wrapper
    margin 10px 14px 0 14px
    button
      width calc(100% / 3 - 12px/3)
      margin-right 6px
      height: .3rem
      border: 1px solid #2873ff;
      border-radius: 4px
      background none
      color #2873ff
      margin-bottom 6px
      font-size 12px
      max-height 30px
      &:nth-of-type(3n)
        margin-right 0
    .formCell
      align-items center
      width 100%
      margin-bottom 10px
      .J-input
        width 73.53%
        border: 1px solid #2873ff;
        border-radius: 4px;
        height 26px
  .ss
    margin-top 40px
</style>
