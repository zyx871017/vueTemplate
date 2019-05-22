<template>
    <div class="header-extension">
        <div class="header-content">
            <a href="/" to="/">
                老猫小白的官方网站
            </a>
            <router-link class="nav-link" v-for="(item, index) in nav" v-bind:to="item.path" v-bind:key="index">
                {{item.text}}
            </router-link>
        </div>
    </div>
</template>

<script>
    import zyx_logo from 'static/img/zyx_logo.jpg';
    import config from 'config/config.js';

    export default {
        data() {
            return {
                zyx_logo,
                nav: config.routes
            };
        }
    }
</script>

<style scoped>
    .header-extension {
        height: 40px;
        background-color: #0593d3;
    }

    .header-content {
        width: 1260px;
        margin: 0 auto;
        color: #fff;
        height: 40px;
        line-height: 40px;
        font-size: 24px;
    }

    .header-content a {
        color: #fff;
        padding: 0 15px;
        height: 40px;
        display: block;
        float: left;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
    }

    .header-content .nav-link {
        box-sizing: border-box;
        padding: 0 15px;
        border: 1px solid transparent;
        font-size: 14px;
        transition: background-color 0.5s, border-color 0.5s;
    }

    .header-content .nav-link:hover {
        border-color: #0371a1;
        background-color: #0482ba;
        transition: background-color 1s, border-color 1s;
    }


</style>