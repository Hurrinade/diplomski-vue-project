import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { DataPaneWebComponent } from "web-components";

customElements.define("data-pane", DataPaneWebComponent);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
