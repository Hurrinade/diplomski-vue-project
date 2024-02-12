import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import {
  DataPaneWebComponent,
  ChartButtonsWebComponent,
  RadarsPaneWebComponent,
  ForecastPaneWebComponent,
  EnsiPaneWebComponent,
} from "web-components";

customElements.define("data-pane", DataPaneWebComponent);
customElements.define("chart-buttons", ChartButtonsWebComponent);
customElements.define("radars-pane", RadarsPaneWebComponent);
customElements.define("forecast-pane", ForecastPaneWebComponent);
customElements.define("ensi-pane", EnsiPaneWebComponent);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
