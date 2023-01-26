import { createStore } from "vuex";
import coachModule from "./coach/index";

const store = createStore({
    modules: { coach: coachModule },
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

export default store;
