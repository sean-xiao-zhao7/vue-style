import { Coach } from "../../models/Coach";

export default {
    namespaced: true,
    state() {
        return {
            coachList: [
                new Coach(
                    "John Doe",
                    "123-123-1231",
                    "asdf@asdfad.com",
                    [],
                    "This is the first coach",
                    20
                ),
            ],
        };
    },
    mutations: {
        addCoachMutation(state, payload) {
            state.coachList.push(payload);
        },
    },
    getters: {
        coachList(state) {
            return state.coachList;
        },
        getSingleCoach: (state) => (id) => {
            return state.coachList.find((coach) => coach.id === id);
        },
    },
    actions: {
        addCoachAction(context, coach) {
            context.commit("addCoachMutation", coach);
        },
    },
};
