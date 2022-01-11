import Vue from 'vue'
import app from './app.vue'
import store from './store/store'
import "../scss/styles.scss";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import Particles from "particles.vue";

Vue.use(ElementUI);
Vue.use(Particles);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount('#app')
