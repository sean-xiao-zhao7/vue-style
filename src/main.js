import { createApp } from "vue";
import App from "./App.vue";

import Layout from "./components/layout/Layout.vue";

const app = createApp(App);
app.component("custom-layout", Layout);

app.mount("#app");
