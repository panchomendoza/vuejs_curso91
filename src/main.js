import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'*/

/* poder usar todos los iconos */
/*library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)*/

import { auth } from "@/firebase";

Vue.config.productionTip = false;

auth.onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUsuario', user)
    console.log('USER:: ',user.displayName);
  }
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
});
