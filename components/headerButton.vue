<template>
    <div>
        <div class="header-panel">
            <div v-for="item in headings"
              :id="item.id"
              :key="item.id" class="header-panel__item"
              :class="['header-panel__item', activeIndexObj == item.id ? 'header-panel__active' : '']"
              @click="setActiveIndex(item.id)"
            >
                <div class="header-panel__item__icon" v-if="item.icon">
                    <img :src="`/_nuxt/assets/icons/icon_${item.icon}.svg`" />
                </div>
                <div class="header-panel__item__text">{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    headings: {
        type: Array,
        required: true
    },
    activeIndex: {
        type: Number,
        required: true
    },
});
const emit = defineEmits(['activeIndex']);
const activeIndexObj = ref(props.activeIndex);
let setActiveIndex = (index) => {
    activeIndexObj.value = index;
    emit('activeIndex', index);
};
</script>

<style lang="scss" scoped>
.header-panel {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 6px;
    gap: 10px;
    height: 50px;
    background-color: $greys_blue_extra_light_muted;
    border-radius: 20px;

    .header-panel__item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 8px;
        width: 100%;
        .header-panel__item__icon {
            width: 20px;
        }

        &.header-panel__active {
            background-color: $primary_arrow_light!important;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            padding: 7px;
        }
    }
}
</style>