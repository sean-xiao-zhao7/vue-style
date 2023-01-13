<script>
export default {
    props: ["player"],
    data() {
        return { showDetails: false };
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        },
    },
};
</script>

<template>
    <h1>{{ player.name }}</h1>
</template>
