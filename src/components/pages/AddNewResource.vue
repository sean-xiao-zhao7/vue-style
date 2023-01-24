<script>
export default {
    data() {
        return {
            title: "",
            details: "",
            url: "",
        };
    },
    methods: {
        addHandler(e) {
            e.preventDefault();
            this.$emit("add-new-resource", this.title, this.details, this.url);
        },
    },
    emits: ["add-new-resource"],
};
</script>

<template>
    <form id="colForm" @submit="addHandler">
        <input type="text" name="title" placeholder="title" v-model="title" />
        <input
            type="text"
            name="details"
            placeholder="details"
            v-model="details"
        />
        <input type="text" name="url" placeholder="url" v-model="url" />
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped>
#colForm {
    display: grid;
    grid-row-gap: 0.5rem;
}
</style>
