<script>
import { Player } from "../models/Player";

export default {
    emits: ["toggle-selected"],
    props: {
        player: {
            type: Player,
            required: true,
        },
    },
    data() {
        return { showDetails: false };
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        },
        toggleSelected() {
            this.$emit("toggle-selected", this.player.id);
        },
    },
};
</script>

<template>
    <section>
        <h2>{{ player.name }}</h2>
        <h2>{{ player.phone }}</h2>
        <button class="delete">X</button>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    align-items: center;
    justify-items: center;
}
button.delete {
    background-color: red;
    width: 50%;
    height: 50%;
}
</style>
