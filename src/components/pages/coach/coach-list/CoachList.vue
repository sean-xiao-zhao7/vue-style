<template>
    <div>Filter coaches</div>
    <div>
        <div id="controls">
            <button>Refresh</button>
            <button>
                <router-link to="/coach/register"
                    >Sign up as a coach</router-link
                >
            </button>
        </div>
        <ul>
            <li>List of coaches</li>
        </ul>
    </div>
</template>

<style>
button > a {
    text-decoration: none;
}

button > a,
button > a:visited {
    color: white;
}

ul {
    padding: 0;
    margin: 0;
}
ul > li {
    list-style: none;
}
</style>
