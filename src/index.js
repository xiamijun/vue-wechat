/** @format */
import Vue from 'vue';
import App from './App';
import '@/utils/rem';
// import './assets/iconfont/iconfont.css';

// 导入插件
import plugin from '@/plugins';
import router from '@/router';
import store from '@/store';

//fastclick 解决移动端click事件300ms延迟
const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(plugin);

import { ToastPlugin } from 'vux';

Vue.use(ToastPlugin);

import { TransferDom } from 'vux';
Vue.directive('transfer-dom', TransferDom);

Vue.prototype.$toast = function(text, type) {
  this.$vux.toast.show({
    text: type ? `${text}` : `<i class="icon-toast"></i>${text}`,
    type: type ? type : 'text',
    position: 'middle',
    width: 'auto'
  });
};

import { getRSAword } from './utils/funcs';
Vue.prototype.$RSA = getRSAword;

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
