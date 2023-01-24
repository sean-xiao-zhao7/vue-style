<script>
import { Resource } from "../../models/Resource";

export default {
    emits: ["delete-resource"],
    props: {
        resource: {
            type: Resource,
            required: true,
        },
    },

    methods: {
        deleteResource() {
            this.$emit("delete-resource", this.resource.id);
        },
    },
};
</script>

<template>
    <section>
        <h2>{{ resource.title }}</h2>
        <p>{{ resource.details }}</p>
        <h3><a v-bind:href="resource.url">Link</a></h3>
        <button class="delete" @click="deleteResource">X</button>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.5rem;
    align-items: center;
    justify-items: center;
    border-bottom: solid 1px #ccc;
}
</style>
