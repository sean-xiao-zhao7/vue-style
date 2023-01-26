<script>
export default {};
</script>

<template>
    <nav>
        <li><router-link to="/coach/list">Coach list</router-link></li>
        <li>
            <router-link to="/coach/register">Sign up as a coach</router-link>
        </li>
        <li>
            <router-link to="/coach/requests">Requests</router-link>
        </li>
    </nav>
    <router-view></router-view>
</template>
