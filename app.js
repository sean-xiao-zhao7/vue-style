const randomAttack = (baseValue, extraValue) => {
    return Math.floor(Math.random() * extraValue) + baseValue;
};

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            monsterAttack: 50,
            playerAttack: 10,
            monsterAttackExtra: 10,
            playerAttackExtra: 10,
            playerSpecialAttackExtra: 50,
        };
    },
    methods: {
        attack() {
            this.monsterHealth -= randomAttack(
                this.playerAttack,
                playerAttackExtra
            );
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
        },
        specialAttack() {
            this.monsterHealth -= randomAttack(
                this.playerAttack,
                playerSpecialAttackExtra
            );
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
        },
        heal() {},
        skip() {},
        monsterAttack() {
            this.playerHealth -= randomAttack(
                this.monsterAttack,
                monsterAttackExtra
            );
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
    },
});

app.mount("#styling");
