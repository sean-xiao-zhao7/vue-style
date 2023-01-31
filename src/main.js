import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./vuex/store";

const app = createApp(App);

// lazy load
const FormComp = defineAsyncComponent(() =>
    import("./components/pages/FormComp.vue")
);
const PeopleComp = defineAsyncComponent(() =>
    import("./components/pages/PeopleComp.vue")
);
const MonsterComp = defineAsyncComponent(() =>
    import("./components/pages/MonsterComp.vue")
);
const ResourcesComp = defineAsyncComponent(() =>
    import("./components/pages/ResourcesComp.vue")
);
const AnimationComp = defineAsyncComponent(() =>
    import("./components/pages/AnimationComp.vue")
);
const VuexComp = defineAsyncComponent(() =>
    import("./components/pages/VuexComp.vue")
);
const CoachPage = defineAsyncComponent(() =>
    import("./components/pages/CoachPage.vue")
);

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
