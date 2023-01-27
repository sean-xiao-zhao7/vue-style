<script>
export default {};
</script>

<template>
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
    <router-view></router-view>
</template>

<style scoped>
nav > ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    justify-content: center;
}
nav li {
    list-style: none;
}
</style>
