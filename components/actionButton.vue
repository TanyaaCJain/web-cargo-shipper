<template>
    <div class="button">
        <button :class="['button__submit','button', buttonTypeClass, buttonBgClass, darkMode ? 'button-dark-mode' : 'button-light-mode']" @click="buttonAction">
            <div class="button__submit__text">
                {{ buttonText }}
            </div>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        darkMode: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            required: true
        },
        buttonTypeClass: {
            type: String,
            required: true
        },
        buttonBgClass: {
            type: String,
            required: true
        },
        buttonAction: {
            type: Function,
            required: true
        }
    },
}
</script>

<style scoped lang="scss">
.button__submit {
    width: 100%;
}
</style>