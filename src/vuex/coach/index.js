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
    mutations: {},
    getters: {
        coachList(state) {
            console.log('hi')
            return state.coachList;
        },
    },
    actions: {},
};
