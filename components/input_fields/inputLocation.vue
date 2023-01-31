<template>
    <div :class="['inputs', 'input-location', darkMode ? 'input-dark-mode' : 'input-light-mode']">
        <div class="input__label" :for="id">{{ label }}</div>
        <div class="input__div">
            <div :class="['left-icon', filled ? 'icon-color' : '']">
                <nuxt-icon name="icon_location" />
            </div>
            <input class="input__field"
                :id="id"
                :type="'text'"
                v-model="inputValueObj"
                @input="(input) => $emit('input', input.target.value)"
                :placeholder="placeholder"
            />
            <div class="distance__div">
                <div class="shrink-icon">
                    <nuxt-icon name="icon_shrink1"/>
                </div>
                <div class="distance-content"> {{ distance }} </div>
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
    label: {
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
    distance: {
        type: String,
        required: false
    }
});
const emit = defineEmits(['input']);
const inputValueObj = ref(props.inputValue);
const filled = computed(() => inputValueObj.value.length > 0);
</script>

<style scoped lang="scss">
.input-location {
    
    .input__div {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 1fr;
        grid-template-areas: "left-icon input-field distance-div";
        padding: 7px 7px 7px 15px;

        .distance__div {
            grid-area: distance-div;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "shrink-icon distance-content";
            order: 1;
            gap: 8px;
            background: $primary_arrow_light;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            padding: 7px 21px;

            .shrink-icon {
                font-size: 16px;
            }
            .distance-content {
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>