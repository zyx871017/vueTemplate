<template>
    <div class="page-content">
        <mavon-editor v-model="value"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        }
    }
</script>