<template>
    <div :class="['input-2-icon', darkMode ? 'input-dark-mode' : 'input-light-mode']">
        <div class="input__label" :for="id">{{ label }}</div>
        <div class="input__div dropdown">
            <!-- <input class="input__field"
                :id="id"
                type="text"
                v-model="inputValueObj"
                @input="(input) => $emit('input', input.target.value)"
                :placeholder="placeholder"
            /> -->
            <span class="input__field">{{ inputValueObj }}</span>
            <div class="right-icon" @click="showDropdown = !showDropdown" href="#" role="button" aria-expanded="false">
                <span v-show="showDropdown">
                    <nuxt-icon name="icon_drop_up"/>
                </span>
                <span v-show="!showDropdown">
                    <nuxt-icon name="icon_drop_down"/>
                </span>
            </div>
        </div>
        <div class="input__dropdown" v-show="showDropdown">
            <div class="input__dropdown__item" v-for="item in items" :key="item.id">
                <span v-on="selectItem(item)">{{ item }}</span>
            </div>
        </div>
        <div class="input__error" v-if="error">{{ error }}</div>
        {{ showDropdown }}
        <div class="input__div dropdown">
            <select class="input__field" v-model="inputValueObj">
                <option v-for="(item, index) in items" :key="index" v-bind:value="item">
                    {{ item }}
                </option>
            </select>
        </div>
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
    },
    items: {
        type: Array,
        required: false
    }
});
const emit = defineEmits(['input']);
const showDropdown = ref(false);
const inputValueObj = ref(props.inputValue);
const selectItem = (item) => {
    inputValueObj.value = item;
    emit('input', inputValueObj.value);
    showDropdown.value = false;
}
</script>

<style scoped lang="scss">
.input-2-icon {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "label"
        "input-div"
        "error";
    gap: 5px;
    align-content: baseline;
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
        justify-items: center;
        align-items: center;
        padding: 10px 15px;
        gap: 10px;
        background: #ffffff;
        border: 1px solid $primary_blue_muted;
        border-radius: 25px;

        &:focus-within {
            border: 1px solid $primary_arrow_blue;
            box-shadow: 0px 0px 0px 2px rgba(12, 9, 32, 0.25), -6px 0px 19px 8px rgba(52, 60, 194, 0.25), 6px 6px 20px rgba(255, 178, 162, 0.25);
            border-radius: 25px;
        }

        .input__field {
            grid-area: input-field;
            width: 100%;
            height: 100%;

            /* if active change left-icon color */
            &:focus ~ .left-icon {
                color: $primary_arrow_blue;
            }

            &::placeholder ~ .left-icon {
                color: $greys_grey_light;
            }
        }

        .left-icon {
            grid-area: left-icon;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            height: 100%;
            padding: 0 10px;
            color: $primary_arrow_blue;
        }

        .right-icon {
            grid-area: right-icon;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            height: 100%;
            padding: 0 10px;
            color: $secondary_purple_mid;
        }
    }
    .input__dropdown {
        background: #ffffff;
    }
}
</style>