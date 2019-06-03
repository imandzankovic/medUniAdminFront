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
import 'vue-select/dist/vue-select.css';


Vue.use(VeeValidate);
Vue.use(VueNativeNotification, {
  requestOnNotify: true
})

Vue.config.productionTip = false;

Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history', routes });


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');