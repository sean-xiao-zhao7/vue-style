const app = Vue.createApp({
    data() {
        return { buttonChangeClasses: "" };
    },
    methods: {
        changeButtonStyle() {
            if (this.buttonChangeClasses === "") {
                this.buttonChangeClasses = "change1";
            } else if (this.buttonChangeClasses === "change1") {
                this.buttonChangeClasses = "change2";
            } else {
                this.buttonChangeClasses = "";
            }
            console.log(this.buttonChangeClasses);
        },
    },
});

app.mount("#styling");
