import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import FormComp from "./components/FormComp.vue";
import MonsterComp from "./components/MonsterComp.vue";
import PeopleComp from "./components/PeopleComp.vue";
import ResourcesComp from "./components/ResourcesComp.vue";
import AnimationComp from "./components/AnimationComp.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/form",
        },
        {
            path: `/form`,
            component: FormComp,
        },
        {
            path: `/monster`,
            component: MonsterComp,
        },
        {
            path: `/people`,
            component: PeopleComp,
        },
        {
            path: `/resources`,
            component: ResourcesComp,
        },
        {
            path: `/animation`,
            component: AnimationComp,
        },
    ],
});
const app = createApp(App);
app.component("form-comp", FormComp);
app.component("monster-comp", MonsterComp);
app.component("people-comp", PeopleComp);
app.component("resources-comp", ResourcesComp);
app.component("animation-comp", AnimationComp);
app.use(router);
app.mount("#app");
