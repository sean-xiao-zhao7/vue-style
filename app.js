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
            message: "",
        };
    },
    methods: {
        onTextChange(event) {
            this.message = this.$refs.textInput1;
        },

        attack() {
            this.message = "";
            const attackVal = randomAttack(
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
            const attackVal = randomAttack(
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
});

app.mount("#styling");
