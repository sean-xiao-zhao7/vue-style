<script>
import { ref } from "vue";
const compTitles = [
    "Vuex",
    "Animation",
    "Form",
    "Learning resources",
    "Monster",
    "People",
    "Coach",
];

export default {
    setup() {
        const currentComp = ref("coach-page");
        const currentCompTitle = ref(compTitles[6]);

        const switchComp = (nextComp, titleIndex) => {
            currentComp.value = nextComp;
            currentCompTitle.value = compTitles[titleIndex];
        };

        return {
            currentComp,
            currentCompTitle,
            switchComp,
        };
    },
};
</script>

<template>
    <header>
        <h1>{{ currentCompTitle }}</h1>
    </header>
    <div class="nav-container">
        <nav>
            <router-link
                to="/coach"
                @click="switchComp('coach-comp', 6)"
                :class="{ 'current-comp': currentComp === 'coach-page' }"
                >Coach</router-link
            >
            <router-link
                to="/vuex"
                @click="switchComp('vuex-comp', 0)"
                :class="{ 'current-comp': currentComp === 'vuex-comp' }"
                >Vuex</router-link
            >
            <router-link
                to="/animation"
                @click="switchComp('animation-comp', 1)"
                :class="{ 'current-comp': currentComp === 'animation-comp' }"
                >Animation</router-link
            >
            <router-link
                to="/form"
                @click="switchComp('form-comp', 2)"
                :class="{ 'current-comp': currentComp === 'form-comp' }"
                >Form</router-link
            >
            <router-link
                to="/resources"
                @click="switchComp('resources-comp', 3)"
                :class="{ 'current-comp': currentComp === 'resources-comp' }"
                >Resources</router-link
            >
            <router-link
                to="/monster"
                @click="switchComp('monster-comp', 4)"
                :class="{ 'current-comp': currentComp === 'monster-comp' }"
                >Monster</router-link
            >
            <router-link
                to="/people"
                @click="switchComp('people-comp', 5)"
                :class="{ 'current-comp': currentComp === 'people-comp' }"
                >People</router-link
            >
        </nav>
    </div>
    <section id="styling">
        <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Jost", sans-serif;
}

body {
    margin: 0;
}

a,
button {
    font-size: 1.4rem;
    text-decoration: none;
    color: #4fc08d;
    transition: color 0.1s;
}

a:hover,
a.current-comp {
    color: #398a66;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    padding: 1rem;
    background-color: #4fc08d;
    color: white;
    text-align: center;
}

#styling {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 3rem 30%;
    text-align: center;

    /* flex */
    display: grid;
    grid-row-gap: 1rem;
}

/* nav */
.nav-container {
    background-color: white;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

#app .nav-container > nav {
    display: grid;
    grid-template-columns: repeat(7, max-content);
    grid-column-gap: 1.5rem;
    align-items: center;
    justify-items: center;
}

/* button */
button {
    background-color: #4fc08d;
    border: 0;
    border-radius: 15px;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
}
button#button-change.change1 {
    background-color: #a0c04f;
}
button#button-change.change2 {
    background-color: #c04fa8;
}
button:active {
    background-color: #46ac7e;
}
button:hover {
    transform: translateX(1px) translateY(1px);
}
button.delete {
    background-color: red;
    width: 50%;
    height: 50%;
}
button:active,
button:hover {
    transform: translateX(1px) translateY(1px);
}

/* route transition */
.route-enter-from,
.route-leave-to {
    opacity: 0;
}

.route-enter-active,
.route-leave-active {
    transition: opacity 0.1s ease-out;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
}

/* form inputs */
input {
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0.5rem 1rem;
    text-align: center;
    border: 1px solid #4fc08d;
}

/* divs */
div {
    background-color: #4fc08d;
    color: white;
    padding: 1rem;
    font-size: 1.2rem;
}

div#health-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
}

div#health-area h1 {
    color: #4fc08d;
}

div#health-area > div {
    background-color: white;
}

div.health-bar {
    height: 2rem;
    padding: 0;
    transition: width 0.2s;
}

div#message-area {
    background-color: white;
    padding: 3rem;
    color: #4fc08d;
}
</style>
