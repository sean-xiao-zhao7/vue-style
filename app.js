const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
        };
    },
    methods: {
        changeBox(id) {
            switch (id) {
                case "boxA":
                    this.boxA = true;
                case "boxB":
                    this.boxB = true;
                case "boxC":
                    this.boxC = true;
            }
        },
    },
    computed: {
        boxAClasses() {
            return { currentBox: this.boxA };
        },
    },
});

app.mount("#styling");
