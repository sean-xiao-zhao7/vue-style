import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import FormComp from "./components/pages/FormComp.vue";
import MonsterComp from "./components/pages/MonsterComp.vue";
import PeopleComp from "./components/pages/PeopleComp.vue";
import ResourcesComp from "./components/pages/ResourcesComp.vue";
import AnimationComp from "./components/pages/AnimationComp.vue";
import VuexComp from "./components/pages/VuexComp.vue";
import CoachPage from "./components/pages/CoachPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/coach",
        },
        { path: "/coach", component: CoachPage },
        {
            path: "/vuex",
            component: VuexComp,
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

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
    },
    getters: {
        finalCounter(state, _) {
            return state.counter * 2;
        },
    },
    actions: {
        incrementAction(context) {
            context.commit("increment");
        },
    },
});

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
