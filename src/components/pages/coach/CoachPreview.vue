<script>
export default {
    props: ["id", "name", "summary", "rate"],
    methods: {
        seeDetails(id) {
            this.$router.push({ path: `/coach/list/${id}` });
        },
    },
};
</script>
<template>
    <div @click="seeDetails(id)">
        <h3>{{ name }}</h3>
        <p>{{ summary }}</p>
        <p>${{ rate }} / hour</p>
    </div>
</template>

<style scoped>
div {
    border-top: solid 1px white;
    transition: background-color 0.1s;
}
div:hover {
    cursor: pointer;
    background-color: #398a66;
}
</style>
