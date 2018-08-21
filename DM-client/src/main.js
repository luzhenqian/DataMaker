// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
// tide
import Tide from './tide'
import './assets/css/tide-ui.css'
// axios
import Axios from 'axios'
// iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.prototype.$http= Axios

// 全局引用
Vue.use(iView);
Vue.use(Tide);

//全局配置
Vue.use(iView, {
    transfer: true,
    size: 'large'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
