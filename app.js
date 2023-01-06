const app = Vue.createApp({
    data() {
        return { newGoal: "", goals: [] };
    },
    methods: {
        addGoal() {
            this.goals.push(this.newGoal);
            this.newGoal = "";
        },
    },
});

app.mount("#styling");
