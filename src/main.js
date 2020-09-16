import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import less from 'less'
import md5 from 'js-md5'


// 按需引入vant组件及其样式文件
import { Button, Popup, Dialog, Toast, Form, Field, Swipe, SwipeItem } from 'vant'
import 'vant/lib/button/style'
import 'vant/lib/popup/style'
import 'vant/lib/dialog/style'
import 'vant/lib/toast/style'
import 'vant/lib/form/style'
import 'vant/lib/field/style'

// 注册vant组件
Vue.use(Button)
Vue.use(Popup)
Vue.use(Form)
Vue.use(Field)
Vue.use(Swipe)
Vue.use(SwipeItem)


// 全局挂载
Vue.prototype.$message = Dialog
Vue.prototype.$toast = Toast

Vue.config.productionTip = false

Vue.use(less)

// 挂载 配置Axios
Axios.defaults.baseURL = 'https://autumnfish.cn'
// Axios.defaults.Access-Control-Allow-Origin = "*"
Axios.defaults.withCredentials = true
Vue.prototype.$http = Axios

// 全局挂载MD5
Vue.prototype.$md5 = md5

// 日期过滤
Vue.filter('dateFormat', function (originDate) {
  const dt = new Date(originDate)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
