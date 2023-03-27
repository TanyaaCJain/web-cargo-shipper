<template>
    <div :class="`commute-location ${dark ? 'dark-bg' : ''}`">
        <h2 class="start">
            <span :class="`${dark ? 'dark-bg' : ''}`">
                {{ departureLocation }}
            </span>
        </h2>
        <div class="to-arrow">
            <nuxt-icon name="icon_drop_right"/>
        </div>
        <h2 class="end">
            <span :class="`${dark ? 'dark-bg' : ''}`">
                {{ arrivalLocation }}
            </span>
        </h2>
    </div>
</template>

<script setup>
const props = defineProps({
    dark: {
        type: Boolean,
        default: false
    }
});
const cargoBookingStore = useCargoBookingStore();
const cargoBooking = cargoBookingStore.cargoBooking;
const departureLocation = ref(cargoBooking.departure.pick_up_location);
const arrivalLocation = ref(cargoBooking.arrival.drop_off_location);
</script>

<style scoped lang="scss">
.commute-location {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 16px;

    .start {
        text-align: center;
    }

    .to-arrow {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .end {
        text-align: center;
    }
}
.dark-bg {
    color: $primary_arrow_light!important;
}
</style>
