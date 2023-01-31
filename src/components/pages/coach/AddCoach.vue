<script>
import { Coach } from "../../../models/Coach";

export default {
    data() {
        return {
            name: "",
            phone: "",
            email: "",
            summary: "",
            rate: null,
            areas: [],
        };
    },
    methods: {
        submit() {
            this.$store.dispatch(
                "coach/addCoachAction",
                new Coach(
                    this.name,
                    this.phone,
                    this.email,
                    this.areas,
                    this.summary,
                    this.rate
                )
            );
            this.$router.push("/coach/list");
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit">
        <div id="form-container">
            <input name="name" type="text" v-model="name" placeholder="Name" />
            <input
                name="phone"
                type="text"
                v-model="phone"
                placeholder="Phone"
            />
            <input
                name="email"
                type="text"
                v-model="email"
                placeholder="Email"
            />
            <textarea
                name="summary"
                type="text"
                v-model="summary"
                placeholder="Summary"
            ></textarea>
            <input
                name="rate"
                type="number"
                v-model="rate"
                placeholder="Rate per hour"
            />
            <div>
                Art
                <input
                    name="areas"
                    type="checkbox"
                    v-model="areas"
                    value="art"
                />
                Tech
                <input
                    name="areas"
                    type="checkbox"
                    v-model="areas"
                    value="tech"
                />
                Craft
                <input
                    name="areas"
                    type="checkbox"
                    v-model="areas"
                    value="craft"
                />
            </div>
            <button type="submit">Submit</button>
        </div>
    </form>
</template>

<style scoped>
#form-container {
    display: grid;
    grid-row-gap: 1rem;
}
textarea {
    font-family: "Jost", sans-serif;
    font-size: 1.4rem;
    text-align: center;
}
</style>
