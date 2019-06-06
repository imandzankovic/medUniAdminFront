import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import routes from './routes';
import VueNativeNotification from 'vue-native-notification'
import VeeValidate from "vee-validate";
import VueProgressBar from 'vue-progressbar'

import './assets/js/jquery.min.js'
import './assets/js/clean-blog.js'
import './assets/bootstrap/js/bootstrap.min.js'

const progress_bar_options=require('../src/helper/options')

Vue.use(VeeValidate);
Vue.use(VueNativeNotification, {
  requestOnNotify: true
})

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history', routes });
const options=progress_bar_options.options


Vue.use(VueProgressBar, options)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


