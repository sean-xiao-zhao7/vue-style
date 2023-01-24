<script>
export default {
    props: ["toggle"],
    data() {
        return {
            visible: false,
        };
    },
};
</script>

<template>
    <div id="background">
        <div>
            <slot><h2>Modal!</h2></slot>
            <button @click="toggle">
                <slot name="buttonText">Close</slot>
            </button>
        </div>
    </div>
</template>

<style scoped>
#background {
    background-color: rgba(86, 86, 86, 0.466);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#background > div {
    padding: 3rem 10rem;
}
</style>
