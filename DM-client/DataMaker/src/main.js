// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
// iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.prototype.$http= axios

// 全局引用
Vue.use(iView);

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
