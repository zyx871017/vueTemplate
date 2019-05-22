<template>
    <div class="page-content">
        <pre>var a = 'ceshi'</pre>
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
<style>
    .page-content {
        width: 1260px;
        margin: 0 auto;
    }
</style>