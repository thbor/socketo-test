import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client'
Vue.config.productionTip = false

Vue.use(new VueSocketio({
  debug: true,
  // 服务器端地址
  connection: socketio('http://localhost:3000'),
  
}))
// Vue.use(VueSocketio, socketio('http://localhost:3000'), store);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
