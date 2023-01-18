<script>
import { Player } from "../models/Player.js";
import PlayerDetails from "./PlayerDetails.vue";
import AddNewPlayer from "./AddNewPlayer.vue";

export default {
    components: {
        PlayerDetails,
        AddNewPlayer,
    },
    data() {
        return {
            players: [
                new Player(1, "Player 1", "test1@test.com", "123-123-1411"),
                new Player(2, "Player 2", "test2@test.com", "123-123-1412"),
                new Player(3, "Player 3", "test3@test.com", "123-123-1413"),
                new Player(4, "Player 4", "test4@test.com", "123-123-1414"),
            ],
            showAddPlayer: false,
        };
    },
    methods: {
        addNewPlayerToggle() {
            this.showAddPlayer = !this.showAddPlayer;
        },
        addNewPlayerHandler(name, phone, email) {
            const newPlayer = new Player(
                new Date().toLocaleDateString(),
                name,
                phone,
                email
            );
            this.players.push(newPlayer);
            this.addNewPlayerToggle();
        },

        // callbacks
        deletePlayerHandler(id) {
            const targetIndex = this.players.indexOf((p) => p.id === id);
            this.players.splice(targetIndex, 1);
        },
    },
};
</script>

<template>
    <PlayerDetails
        v-for="player in players"
        :player="player"
        :key="player.id"
        @toggle-selected="toggleSelectedHandler"
        @delete-player="deletePlayerHandler"
    />
    <button id="button-change3" @click="addNewPlayerToggle">
        Add new player
    </button>
    <AddNewPlayer
        v-if="this.showAddPlayer"
        @add-new-player="addNewPlayerHandler"
    />
</template>
