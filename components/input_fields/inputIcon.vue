<template>
    <div :class="['inputs', darkMode ? 'input-dark-mode' : 'input-light-mode']">
        <div v-if="label" class="input__label" :for="id">{{ label }}</div>
        <div class="input__div">
            <div :class="['left-icon', filled ? 'icon-color' : '']" v-if="leftIcon">
                <nuxt-icon :name="`icon_${leftIcon}`"/>
            </div>
            <input class="input__field"
                :id="id"
                :type="type"
                v-model="inputValueObj"
                @input="(input) => $emit('input', input.target.value)"
                :placeholder="placeholder"
            />
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
    label: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    inputValue: {
        type: String,
        required: true,
        default: ''
    },
    placeholder: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: false
    },
    leftIcon: {
        type: String,
        required: false
    },
    rightIcon: {
        type: String,
        required: false
    }
});
const emit = defineEmits(['input']);
const inputValueObj = ref(props.inputValue);
const filled = computed(() => inputValueObj.value.length > 0);
</script>

<style scoped lang="scss">
.inputs {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "label"
        "input-div"
        "error";
    gap: 5px;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.5rem 0;

    .input__label {
        grid-area: label;
    }

    .input__div {
        grid-area: input-div;
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
