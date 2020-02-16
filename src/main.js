import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

import "./assets/styles/app.css";
import "./assets/icons/themify-icons.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
