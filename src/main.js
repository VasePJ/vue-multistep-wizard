import Vue from 'vue'
import App from './App.vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueFormWizard)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

  new Vue({
  render: h => h(App),
}).$mount('#app')
