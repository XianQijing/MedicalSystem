import MessageBoxComponent from './messageBox.vue'

const MessageBox = {}
// 注册MessageBox
MessageBox.install = (Vue) => {
  const MessageBoxConstructor = Vue.extend(MessageBoxComponent)

  const instance = new MessageBoxConstructor()

  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$MessageBox = (content, title, button) => {
    instance.message = content
    instance.title = title
    instance.confirmButtonText = button.confirmButtonText
    instance.cancelButtonText = button.cancelButtonText

    return instance.showBox()
  }
}

export default MessageBox
