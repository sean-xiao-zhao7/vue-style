<script>
export default {
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
        };
    },
    methods: {
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
};
</script>

<template>
    <div>
        <button id="button-change" @click="attack">Attack</button>
        <button id="button-change1" @click="specialAttack">
            Special attack
        </button>
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
    </div>
</template>
