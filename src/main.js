import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
// import AllRules from '@vee-validate/rules'
import * as AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ en }), // 載入英文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('en')

// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(VueAxios, axios)
app.use(router)
app.component('LoadingVue', Loading)
app.component('FormVue', Form)
app.component('FieldVue', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
