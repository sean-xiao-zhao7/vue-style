<script>
export default {};
</script>

<template>
    <div id="coach-page">
        <nav>
            <ul>
                <li><router-link to="/coach/list">Coach list</router-link></li>
                <li>
                    <router-link to="/coach/register"
                        >Sign up as a coach</router-link
                    >
                </li>
                <li>
                    <router-link to="/coach/requests">Requests</router-link>
                </li>
            </ul>
        </nav>
        <router-view v-slot="slotProps">
            <transition mode="out-in" name="coach-route">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
div#coach-page {
    background-color: white;
}
nav > ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    justify-content: center;
}
nav li {
    list-style: none;
}
.coach-route-enter-from,
.coach-route-leave-to {
    opacity: 0;
}

.coach-route-enter-active,
.coach-route-leave-active {
    transition: opacity 0.2s;
}

.coach-route-leave-from,
.coach-route-enter-to {
    opacity: 1;
}
</style>
