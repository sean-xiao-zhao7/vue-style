<script>
import Modal from "../shared/Modal.vue";

export default {
    components: { modal: Modal },
    data() {
        return {
            inAnimation: false,
            modalShown: false,
        };
    },
    methods: {
        animate() {
            this.inAnimation = !this.inAnimation;
        },
        toggleModal() {
            this.modalShown = !this.modalShown;
        },
    },
};
</script>

<template>
    <div>
        <div
            id="square"
            @click="animate"
            :class="{ 'in-animation': inAnimation }"
        ></div>
        <button @click="toggleModal">Toggle modal</button>
        <modal v-if="modalShown" :toggle="toggleModal" />
    </div>
</template>

<style scoped>
/* base */
div#square {
    background-color: green;
    height: 10rem;
    width: 10rem;
    transition: transform 0.2s;
}

/* animation */
.in-animation {
    transform: translateX(100%);
}
</style>
