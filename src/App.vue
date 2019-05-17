<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from 'component/Header.vue';

    export default {
        data() {
            return {}
        },
        components: {
            Header
        }
    }
</script>