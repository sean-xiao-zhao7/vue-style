<script>
import { mapGetters } from "vuex";

export default {
    props: ["id"],
    data() {
        return {
            coach: null,
        };
    },
    created() {
        this.coach = this.getSingleCoach(this.id);
    },
    computed: {
        contactLink() {
            return "/coach/list/" + this.id + "/contact";
        },
        ...mapGetters({ getSingleCoach: "coach/getSingleCoach" }),
    },
};
</script>
<template>
    <div>
        <section id="coachDetails">
            <div>
                <h3>{{ coach.name }}</h3>
                <p>{{ coach.email }}</p>
                <p>{{ coach.phone }}</p>
                <p>{{ coach.summary }}</p>
                <p>${{ coach.rate }} / hour</p>
            </div>
            <section id="links">
                <router-link :to="contactLink">Contact</router-link>
                <router-link :to="contactLink">Go Back</router-link>
            </section>
        </section>
        <router-view></router-view>
    </div>
</template>
<style scoped>
#coachDetails {
    background-color: white;
}
#links {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
}
</style>
