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
    <h1>{{ player.name }}</h1>
    <h2>{{ player.phone }}</h2>
</template>
