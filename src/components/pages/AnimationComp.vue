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
        <transition>
            <modal v-if="modalShown" :toggle="toggleModal">
                <p>Test modal</p>
            </modal>
        </transition>
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

/* animated modal */
.v-enter-from {
    opacity: 0;
}
.v-enter-active {
    transition: opacity 0.2s;
}
.v-enter-to {
    opacity: 1;
}
.v-leave-from {
    opacity: 1;
}
.v-leave-active {
    transition: opacity 0.2s;
}
.v-leave-to {
    opacity: 0;
}
</style>
