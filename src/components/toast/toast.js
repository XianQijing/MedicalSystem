import ToastComponent from './toast.vue'

const Dialog = {}
// 注册Toast
Dialog.install = (Vue) => {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const ToastConstructor = Vue.extend(ToastComponent)
  // 生成一个该子类的实例
  const instance = new ToastConstructor()

  // 将这个实例挂载在我创造的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$Dialog = (res) => {
    instance.message = res.message
    instance.visible = true
    instance.title = res.title
    instance.type = res.type || 'warning'
    setTimeout(() => {
      instance.visible = false
    }, 1500)
  }
}

export default Dialog
