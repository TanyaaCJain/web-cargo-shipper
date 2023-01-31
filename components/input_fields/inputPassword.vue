<template>
    <div :class="['inputs', 'input-2-icon', darkMode ? 'input-dark-mode' : 'input-light-mode']">
        <div class="input__label" :for="id">{{ Password }}</div>
        <div class="input__div">
            <div :class="['left-icon', filled ? 'icon-color' : '']">
                <nuxt-icon name="icon_padlock"/>
            </div>
            <input class="input__field"
                :id="id"
                :type="showPassword ? 'text' : 'password'"
                v-model="inputValueObj"
                @input="(input) => $emit('input', input.target.value)"
                placeholder="Enter Password"
            />
            <div class="right-icon" @click="showPassword = !showPassword">
                <span v-show="showPassword">
                    <nuxt-icon name="icon_show"/>
                </span>
                <span v-show="!showPassword">
                    <nuxt-icon name="icon_hide"/>
                </span>
            </div>
        </div>
        <div class="input__error" v-if="error">{{ error }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    darkMode: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        required: true
    },
    inputValue: {
        type: String,
        required: true,
        default: ''
    },
    error: {
        type: String,
        required: false
    }
});
const emit = defineEmits(['input']);
const showPassword = ref(false);
const inputValueObj = ref(props.inputValue);
const filled = computed(() => inputValueObj.value.length > 0);
</script>

<style scoped lang="scss">
.input-2-icon {
    .input__div {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 1fr;
        grid-template-areas: "left-icon input-field right-icon";

        .input__field {
            grid-area: input-field;
        }

        .left-icon {
            grid-area: left-icon;
        }

        .right-icon {
            grid-area: right-icon;
        }
    }
}
</style>