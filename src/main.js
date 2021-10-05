import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//support nprogress css
import "nprogress/nprogress.css";
createApp(App).use(store).use(router).mount("#app");
