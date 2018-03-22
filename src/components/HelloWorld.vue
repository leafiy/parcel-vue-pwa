<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>test Links</h2>
        <ul>
            <li>
                <router-link to="/404">404 page</router-link>
            </li>
            <li>
                <router-link to="/offline">offline page</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>