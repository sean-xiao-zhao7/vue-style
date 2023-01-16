<script>
export default {
    data() {
        return {
            name: "",
            phone: "",
            email: "",
        };
    },
    methods: {
        addHandler(e) {
            e.preventDefault();
            this.$emit("add-new-player", this.name, this.phone, this.email);
        },
    },
    emits: ["add-new-player"],
};
</script>

<template>
    <form id="colForm" @submit="addHandler">
        <input type="text" name="name" placeholder="name" v-model="name" />
        <input type="text" name="phone" placeholder="phone" v-model="phone" />
        <input type="text" name="email" placeholder="email" v-model="email" />
        <button type="submit">Add</button>
    </form>
</template>

<style scoped>
#colForm {
    display: grid;
    grid-row-gap: 0.5rem;
}
</style>
