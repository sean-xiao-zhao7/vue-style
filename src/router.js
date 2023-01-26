import { createRouter, createWebHistory } from "vue-router";
import FormComp from "./components/pages/FormComp.vue";
import MonsterComp from "./components/pages/MonsterComp.vue";
import PeopleComp from "./components/pages/PeopleComp.vue";
import ResourcesComp from "./components/pages/ResourcesComp.vue";
import AnimationComp from "./components/pages/AnimationComp.vue";
import VuexComp from "./components/pages/VuexComp.vue";
import CoachPage from "./components/pages/CoachPage.vue";
import CoachList from "./components/pages/coach/CoachList.vue";
import CoachDetails from "./components/pages/coach/CoachDetails.vue";
import AddCoach from "./components/pages/coach/AddCoach.vue";
import AddRequest from "./components/pages/coach/AddRequest.vue";
import RequestList from "./components/pages/coach/RequestList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/coach",
        },
        {
            path: "/coach",
            component: CoachPage,
            children: [
                { path: "list", component: CoachList },
                {
                    path: "list/:id",
                    component: CoachDetails,
                    children: [{ path: "contact", component: AddRequest }],
                },
                { path: "register", component: AddCoach },
                { path: "requests", component: RequestList },
            ],
        },
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
        { path: "/:notFound(.*)", redirect: "/" },
    ],
});

export default router;
