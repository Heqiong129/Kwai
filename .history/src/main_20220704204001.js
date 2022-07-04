import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import elementIcon from "./plugins/icons";
import proportion from "vue-proportion-directive";

import "lib-flexible";
import "lib-flexible/flexible";
import "amfe-flexible";

createApp(App)
  .use(store)
  .use(elementIcon)
  .use(proportion)
  .use(router)
  .mount("#app");
