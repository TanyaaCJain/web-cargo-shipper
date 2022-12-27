<template>
    <div class="">
        <div class="input-digit">
            <input class="input-digit__field"
                :id="id"
                type="text"
                v-model="inputValueObj"
                @input="(input) => $emit('input', input.target.value)"
            />
            <div class="input-digit__arrows">
                <div class="input-digit__arrow-up" @click="incrementValue">
                    <img :src="`/_nuxt/assets/icons/icon_drop_up.svg`" />
                </div>
                <div class="input-digit__arrow-down" @click="decrementValue">
                    <img :src="`/_nuxt/assets/icons/icon_drop_down.svg`" />
                </div>
            </div>
            <div class="input-digit__label">
                {{ digitLabel }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    inputValue: {
        type: String,
        required: true,
        default: ''
    },
    digitLabel: {
        type: String,
        required: true,
        default:''
    }
});
const emit = defineEmits(['input']);
const inputValueObj = ref(props.inputValue);
let incrementValue = () => {
    if (inputValueObj.value < 10) {
        inputValueObj.value = parseInt(inputValueObj.value) + 1;
        emit('input', inputValueObj.value);
    } else {
        inputValueObj.value = 10;
    }
};
let decrementValue = () => {
    if (inputValueObj.value > 1) {
        inputValueObj.value = parseInt(inputValueObj.value) - 1;
        emit('input', inputValueObj.value);
    } else {
        inputValueObj.value = 1;
    }
};

</script>

<style lang="scss" scoped>
.input-digit {
    background-color: rgba(128, 134, 237, 0.1);
    border: 1px solid $primary_arrow_blue;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    gap: 10px;
    width: 70px;

    .input-digit__field {
        color: $primary_arrow_light;
        font-weight: 600;
        width: 20px;
    }

    .input-digit__arrows {
        margin-top: -10px;

        .input-digit__arrow-up {
            width: 10px;
            height: 10px;
        }

        .input-digit__arrow-down {
            width: 10px;
            height: 10px;
        }
    }
    .input-digit__label {
        color: $primary_arrow_light;
    }
}
</style>