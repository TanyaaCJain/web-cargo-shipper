<template>
    <div class="app__back-icon" @click="goBack">
        <img :src="`/_nuxt/assets/icons/icon_back_arrow.svg`" />
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.back()
                : this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
.app__back-icon {
    width: 20px;
    padding-bottom: 30.5px;
}
</style>