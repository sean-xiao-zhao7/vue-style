const app = Vue.createApp({
    data() {
        return { goals: [] };
    },
    methods: {
        addGoal(goal) {
            this.goals.push(goal);
        },
    },
});

app.mount("#styling");
