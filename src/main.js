import { createApp } from "vue";
import App from "./App.vue";

import Layout from "./components/layout/Layout.vue";
import MonsterComp from "./components/MonsterComp.vue";
import PeopleComp from "./components/PeopleComp.vue";
import ResourcesComp from "./components/ResourcesComp.vue";

const app = createApp(App);
app.component("custom-layout", Layout);
app.component("monster-comp", MonsterComp);
app.component("people-comp", PeopleComp);
app.component("resources-comp", ResourcesComp);

app.mount("#app");
