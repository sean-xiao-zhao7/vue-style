<script>
import PlayerDetails from "./components/PlayerDetails.vue";
import { Player } from "./models/Player.js";

export default {
    components: {
        PlayerDetails,
    },
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            monsterAttackValue: 50,
            playerAttackValue: 10,
            monsterAttackExtra: 10,
            playerAttackExtra: 10,
            playerSpecialAttackExtra: 50,
            message: "",
            players: [
                new Player(1, "Player 1", "test1@test.com", "123-123-1411"),
                new Player(2, "Player 2", "test2@test.com", "123-123-1412"),
                new Player(3, "Player 3", "test3@test.com", "123-123-1413"),
                new Player(4, "Player 4", "test4@test.com", "123-123-1414"),
            ],
        };
    },
    methods: {
        onTextChange(event) {
            this.message = this.$refs.textInput1;
        },

        attack() {
            this.message = "";
            const attackVal = this.randomAttack(
                this.playerAttackValue,
                this.playerAttackExtra
            );
            this.monsterHealth -= attackVal;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.message =
                "Human attacked the monster for " + attackVal + " damage.";
            this.monsterAttack();
        },

        monsterAttack() {
            const attackVal = this.randomAttack(
                this.monsterAttackValue,
                this.monsterAttackExtra
            );
            this.playerHealth -= attackVal;
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
            this.message += "\n";
            this.message +=
                "The monster attacked for " + attackVal + " damage.";
        },

        specialAttack() {
            this.monsterHealth -= this.randomAttack(
                this.playerAttackValue,
                this.playerSpecialAttackExtra
            );
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
        },

        heal() {},

        skip() {},
        randomAttack(baseValue, extraValue) {
            return Math.floor(Math.random() * extraValue) + baseValue;
        },
    },
    computed: {
        monsterHealthStyle() {
            return { width: this.monsterHealth + "%" };
        },
        playerHealthStyle() {
            return { width: this.playerHealth + "%" };
        },
    },
    beforeCreate() {
        console.log("test");
    },
    beforeUpdate() {
        console.log("test 2");
    },
};
</script>

<template>
    <header>
        <h1>Monsters</h1>
    </header>
    <section id="styling">
        <input type="text" ref="textInput1" />
        <button id="button-change" @click="attack">Attack</button>
        <button id="button-change1" @click="specialAttack">
            Special attack
        </button>
        <button id="button-change2" @click="heal">Heal</button>
        <button id="button-change3" @click="skip">Skip</button>
        <div id="health-area">
            <div>
                <h1>Monster</h1>
                <div :style="monsterHealthStyle" class="health-bar"></div>
            </div>
            <div>
                <h1>Human</h1>
                <div :style="playerHealthStyle" class="health-bar"></div>
            </div>
        </div>
        <div id="message-area">
            {{ message }}
            <p v-if="playerHealth <= 0">Human is dead.</p>
        </div>
        <PlayerDetails v-for="player in players" :player="player" />
    </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    padding: 1rem;
    background-color: #4fc08d;
    color: white;
    text-align: center;
}

#styling {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 3rem 30%;
    text-align: center;

    /* flex */
    display: grid;
    grid-row-gap: 1rem;
}

button {
    background-color: #4fc08d;
    border: 0;
    border-radius: 15px;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

button#button-change.change1 {
    background-color: #a0c04f;
}

button#button-change.change2 {
    background-color: #c04fa8;
}

button:active {
    background-color: #46ac7e;
}

input {
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0.5rem 1rem;
    text-align: center;
    border: 1px solid #4fc08d;
}

div {
    background-color: #4fc08d;
    color: white;
    padding: 1rem;
    font-size: 1.2rem;
}

div#health-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
}

div#health-area h1 {
    color: #4fc08d;
}

div#health-area > div {
    background-color: white;
}

div.health-bar {
    height: 2rem;
    padding: 0;
    transition: width 0.2s;
}

div#message-area {
    background-color: white;
    padding: 3rem;
    color: #4fc08d;
}
</style>
