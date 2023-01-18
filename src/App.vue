<script>
export default {
    data() {
        return {
            currentComp: "resources-comp",
        };
    },
};
</script>

<template>
    <custom-layout>
        <keep-alive>
            <component :is="currentComp"></component>
        </keep-alive>
    </custom-layout>
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
