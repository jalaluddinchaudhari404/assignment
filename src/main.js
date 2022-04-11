import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import router from "./router";
import VueSax from "vuesax"
import 'vuesax/dist/vuesax.css'

Vue.use(VueSax);


Vue.use(vueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");