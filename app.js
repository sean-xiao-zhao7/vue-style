const randomAttack = (baseValue, extraValue) => {
    return Math.floor(Math.random() * extraValue) + baseValue;
};

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            monsterAttackValue: 50,
            playerAttackValue: 10,
            monsterAttackExtra: 10,
            playerAttackExtra: 10,
            playerSpecialAttackExtra: 50,
        };
    },
    methods: {
        attack() {
            this.monsterHealth -= randomAttack(
                this.playerAttackValue,
                this.playerAttackExtra
            );
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.monsterAttack();
        },
        specialAttack() {
            this.monsterHealth -= randomAttack(
                this.playerAttackValue,
                this.playerSpecialAttackExtra
            );
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
        },
        heal() {},
        skip() {},
        monsterAttack() {
            this.playerHealth -= randomAttack(
                this.monsterAttackValue,
                this.monsterAttackExtra
            );
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
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
});

app.mount("#styling");
