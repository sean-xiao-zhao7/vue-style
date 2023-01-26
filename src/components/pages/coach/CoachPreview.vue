<script>
export default {
    props: ["name", "summary", "rate"],
};
</script>
<template>
    <div>
        <h3>{{ name }}</h3>
        <p>{{ summary }}</p>
        <p>${{ rate }} / hour</p>
    </div>
</template>

<style scoped>
div {
    border-top: solid 1px white;
}
</style>
