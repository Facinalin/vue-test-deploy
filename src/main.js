import { createApp } from "vue";
import { createPinia } from "pinia";
//下載外部套件，以axios為例：
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
//通常會有vue搭配的use方法
app.use(VueAxios, axios);

app.mount("#app");
