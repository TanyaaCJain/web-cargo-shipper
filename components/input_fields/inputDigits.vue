<template>
    <div class="input-digit__component">
        <div class="input-digit">
            <input class="input-digit__field"
                :id="id"
                type="text"
                v-model="inputValueObj"
                @input="(input) => $emit('input', input.target.value)"
            />
            <div class="input-digit__arrows">
                <div class="input-digit__arrow-up" @click="incrementValue">
                    <nuxt-icon name="icon_drop_up"/>
                </div>
                <div class="input-digit__arrow-down" @click="decrementValue">
                    <nuxt-icon name="icon_drop_down"/>
                </div>
            </div>
        </div>
        <h3 class="input-digit__label">
            {{ digitLabel }}
        </h3>
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    inputValue: {
        type: Number,
        required: true,
        default: 1
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
.input-digit__component{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
        "input-field-box label";
    gap: 5px;
    width: 100%;

    .input-digit {
        grid-area: input-field-box;
        background-color: rgba(128, 134, 237, 0.1);
        border: 1px solid $primary_arrow_blue;
        border-radius: 25px;
        display: grid;
        grid-template-columns: 10px 10px;
        grid-template-areas: "input-field arrows";
        padding: 12px 15px;
        gap: 10px;
        min-height: 25px;
        width: 65px;

        .input-digit__field {
            grid-area: input-field;
            color: $primary_arrow_light;
            font-weight: 600;
        }

        .input-digit__arrows {
            grid-area: arrows;
            display: grid;
            grid-template-rows: auto auto;
            grid-template-areas:
                "arrow-up"
                "arrow-down";
            color: $primary_arrow_light;
            font-size: 10px;

            .input-digit__arrow-up {
                grid-area: arrow-up;
            }

            .input-digit__arrow-down {
                grid-area: arrow-down;
            }
        }
    }
    .input-digit__label {
        grid-area: label;
        color: $primary_arrow_light;
        vertical-align: middle;
        margin: auto;
    }
}
</style>