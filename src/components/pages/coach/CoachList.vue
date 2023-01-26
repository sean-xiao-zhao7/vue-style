<script>
import CoachPreview from "./CoachPreview.vue";

export default {
    components: { "coach-preview": CoachPreview },
    computed: {
        coachList() {
            return this.$store.getters["coach/coachList"];
        },
    },
};
</script>

<template>
    <div>Filter coaches</div>
    <div>
        <div id="controls">
            <button>Refresh</button>
            <button>
                <router-link to="/coach/register"
                    >Sign up as a coach</router-link
                >
            </button>
        </div>
        <ul>
            <li v-for="coach in coachList" :key="coach.id">
                <coach-preview
                    :name="coach.name"
                    :summary="coach.summary"
                    :rate="coach.rate"
                ></coach-preview>
            </li>
        </ul>
    </div>
</template>

<style>
button > a {
    text-decoration: none;
}

button > a,
button > a:visited {
    color: white;
}

ul {
    padding: 0;
    margin: 0;
}
ul > li {
    list-style: none;
}
</style>
