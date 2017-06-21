import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {Button, Select, Option, Notification} from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import enLocale from 'element-ui/lib/locale/lang/en'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(Button)
Vue.use(Option)
Vue.use(Select)

Vue.use(VueI18n)

Vue.prototype.$notify = Notification

const messages = {
  en: enLocale
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

ElementLocale.i18n(key => i18n.t(key))

new Vue({
  el: '#app',
  render: h => h(App)
})
