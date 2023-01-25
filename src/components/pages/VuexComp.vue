<script>
export default {
    methods: {
        addOne() {
            this.$store.dispatch("incrementAction");
        },
    },
    computed: {
        counter() {
            return this.$store.getters.finalCounter;
        },
    },
};
</script>

<template>
    <button @click="addOne">Increment</button>
    <div>
        {{ counter }}
    </div>
</template>
