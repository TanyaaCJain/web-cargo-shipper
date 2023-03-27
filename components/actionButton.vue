<template>
    <div class="button">
        <button :class="['button__submit','button', buttonTextClass, buttonTypeClass, buttonBgClass, darkMode ? 'button-dark-mode' : 'button-light-mode']" @click="buttonAction">
            <div class="button__submit__text">
                <span class="button__submit__icon" v-if="buttonIcon">
                    <nuxt-icon :name="`icon_${buttonIcon}`" />
                </span>
                {{ buttonText }}
            </div>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    darkMode: {
        type: Boolean,
        default: false
    },
    buttonIcon: {
        type: String,
        required: false
    },
    buttonText: {
        type: String,
        required: true
    },
    buttonTextClass: {
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
});
</script>

<style scoped lang="scss">
.button {
    margin: auto 0;
    .button__submit {
        width: 100%;

        .button__submit__text {
            text-align: center;

            .button__submit__icon {
                font-size: 20px;
                margin-right: 10px;
            }
        }
    }
}
</style>
