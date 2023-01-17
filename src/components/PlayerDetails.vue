<script>
import { Player } from "../models/Player";

export default {
    emits: ["toggle-selected", "delete-player"],
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
        deletePlayer() {
            this.$emit("delete-player", this.player.id);
        },
    },
};
</script>

<template>
    <section>
        <h2>{{ player.name }}</h2>
        <h2>{{ player.phone }}</h2>
        <button class="delete" @click="deletePlayer">X</button>
    </section>
</template>

<style scoped>
section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    align-items: center;
    justify-items: center;
    border-bottom: solid 1px #ccc;
}
button.delete {
    background-color: red;
    width: 50%;
    height: 50%;
}

button:active,
button:hover {
    transform: translateX(1px) translateY(1px);
}
</style>
