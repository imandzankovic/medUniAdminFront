import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import routes from './routes';
import VueNativeNotification from 'vue-native-notification'
import VeeValidate from "vee-validate";

import './assets/js/jquery.min.js'
import './assets/js/clean-blog.js'
import './assets/bootstrap/js/bootstrap.min.js'



Vue.use(VeeValidate);
Vue.use(VueNativeNotification, {
  requestOnNotify: true
})

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history', routes });

import VueProgressBar from 'vue-progressbar'

 
 
const options = {
  color: '#1E90FF',
  failedColor: '#874b4b',
  thickness: '50px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'bottom',
  inverse: false
}
Vue.use(VueProgressBar, options)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');