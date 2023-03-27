<template>
    <div class="app__back-icon" @click="goBack">
        <nuxt-icon name="icon_back_arrow"/>
    </div>
</template>

<script setup>
const goBack = () => {
    window.history.length > 1
        ? window.history.go(-1)
        : window.location.href = '/';
};
</script>

<style lang="scss">
.app__back-icon {
    font-size: 20px;
    padding-bottom: 30.5px;
}
</style>
