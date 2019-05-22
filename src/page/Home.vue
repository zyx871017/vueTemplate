<template>
    <div class="page-content">主页
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
    .page-content {
        width: 1260px;
        margin: 0 auto;
    }
</style>