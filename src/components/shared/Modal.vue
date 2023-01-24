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
    <Teleport to="body">
        <div id="background">
            <div>
                <p><slot>Modal!</slot></p>
                <button @click="toggle">Ok</button>
            </div>
        </div>
    </Teleport>
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
