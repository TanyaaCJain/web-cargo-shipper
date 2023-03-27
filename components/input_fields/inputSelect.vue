<template>
    <div :class="['input-2-icon', darkMode ? 'input-dark-mode' : 'input-light-mode']">
        <div class="input__label">{{ label }}</div>
        <div class="custom-select" :tabindex="tabindex" @blur="open = false">
            <div class="selected" :class="{ open: open }" @click="open = !open">
                <span class="input__field">{{ selected }}</span>
                    <span class="right-icon">
                    <span v-show="open">
                        <nuxt-icon name="icon_drop_up"/>
                    </span>
                    <span v-show="!open">
                        <nuxt-icon name="icon_drop_down"/>
                    </span>
                </span>
            </div>
            <div class="items" :class="{ selectHide: !open }">
                <div
                v-for="(option, i) of options"
                :key="i"
                @click="
                    selected = option;
                    open = false;
                    $emit('input', option);
                "
                >
                {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
    return {
        selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
        open: false,
    };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>

<style scoped lang="scss">
.input-2-icon {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "label"
        "selector"
        "error";
    gap: 5px;
    align-content: baseline;
    margin: 0.5rem 0;
    padding: 0.5rem;
    min-width: 300px;
    height: 200px;
    overflow-y: scroll;

    .input__label {
        grid-area: label;
    }
}
.custom-select {
    grid-area: selector;
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
}

.custom-select .selected {
    background-color: $primary_arrow_light;
    border: 1px solid $primary_blue_muted;
    border-radius: 25px;
    color: $secondary_purple_mid;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    .right-icon {
        position: absolute;
        right: 1em;
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 20px;
        color: $secondary_purple_mid;
    }
}

.custom-select .selected.open {
    border: 1px solid $primary_blue_muted;
    border-radius: 25px 25px 0px 0px;
}

.custom-select .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid $primary_arrow_blue;
    border-left: 1px solid $primary_arrow_blue;
    border-bottom: 1px solid $primary_arrow_blue;
    position: absolute;
    background-color: $primary_arrow_light;
    left: 0;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    color: $primary_arrow_blue;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: $secondary_purple_mid;
    color: $primary_arrow_light;
}

.selectHide {
    display: none;
}
</style>
