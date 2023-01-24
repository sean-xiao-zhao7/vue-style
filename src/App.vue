<script>
const compTitles = [
    "Vuex",
    "Animation",
    "Form",
    "Learning resources",
    "Monster",
    "People",
];

export default {
    data() {
        return {
            currentComp: "vuex-comp",
            currentCompTitle: compTitles[0],
        };
    },
    methods: {
        switchComp(nextComp, titleIndex) {
            this.currentComp = nextComp;
            this.currentCompTitle = compTitles[titleIndex];
        },
    },
};
</script>

<template>
    <header>
        <h1>{{ currentCompTitle }}</h1>
    </header>
    <nav>
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
    <section id="styling">
        <router-view></router-view>
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
#app > nav {
    display: grid;
    grid-template-columns: repeat(6, max-content);
    grid-column-gap: 1.5rem;
    padding: 0 30rem;
    align-items: center;
    justify-items: center;
}

#app > nav > a {
    font-size: 1.4rem;
    text-decoration: none;
    color: #4fc08d;
    transition: color 0.1s;
}

#app > nav > a:hover,
#app > nav > a.current-comp {
    color: #398a66;
}

/* button */
button {
    background-color: #4fc08d;
    border: 0;
    border-radius: 15px;
    color: white;
    font-size: 1.2rem;
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
