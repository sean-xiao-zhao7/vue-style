<script>
export default {
    data() {
        return {
            name: "",
            age: "",
            hearUs: "",
            interest: [],
            learnType: null,
        };
    },
};
</script>

<template>
    <form>
        <label for="name">Name:</label>
        <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Name"
            name="name"
        />
    </form>
</template>
