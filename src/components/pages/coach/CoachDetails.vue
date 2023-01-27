<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, prevParams) => {
                this.id = toParams.id;
            }
        );
    },
    computed: {
        contactLink() {
            return "/coach/list/" + this.id + "/contact";
        },
    },
};
</script>
<template>
    <div>
        <section id="coachDetails">
            <section id="links">
                <router-link :to="contactLink">Contact</router-link>
                <router-link :to="contactLink">Go Back</router-link>
            </section>
        </section>
    </div>
    <router-view></router-view>
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
