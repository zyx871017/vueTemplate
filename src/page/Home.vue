<template>
    <div>
        <Header></Header>
        <div class="test">Hello {{name}}</div>
    </div>
</template>

<script>
    import Header from 'component/Header.vue';

    export default {
        data() {
            return {name: 'zhaoyuxiang'}
        },
        components: {
            Header
        }
    }
</script>
<style scoped>
    .test {
        color: red;
    }
</style>