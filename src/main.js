import { createApp } from "vue";
import App from "./App.vue";

import FormComp from "./components/pages/FormComp.vue";
import MonsterComp from "./components/pages/MonsterComp.vue";
import PeopleComp from "./components/pages/PeopleComp.vue";
import ResourcesComp from "./components/pages/ResourcesComp.vue";
import AnimationComp from "./components/pages/AnimationComp.vue";
import VuexComp from "./components/pages/VuexComp.vue";
import CoachPage from "./components/pages/CoachPage.vue";

import router from "./router";
import store from "./vuex/store";

const app = createApp(App);
app.component("form-comp", FormComp);
app.component("monster-comp", MonsterComp);
app.component("people-comp", PeopleComp);
app.component("resources-comp", ResourcesComp);
app.component("animation-comp", AnimationComp);
app.component("vuex-comp", VuexComp);
app.component("coach-page", CoachPage);

app.use(router);
app.use(store);
app.mount("#app");
