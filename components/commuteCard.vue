<template>
    <div class="commute-card">
        <div class="commute-card__tofro">
            <div class="commute-card__location commute-card__from">
                <div class="commute-card__datetime subheading-bold">
                    {{ fromLocation.date }} {{ fromLocation.time }}
                </div>
                <h6 class="commute-card__location-name">
                    {{ fromLocation.name }}
                </h6>
                <div class="commute-card__distance subheading-bold">
                    {{ fromLocation.distance }} travel
                </div>
            </div>
            <div class="commute-card__arrow">
                <nuxt-icon name="icon_drop_right" />
            </div>
            <div class="commute-card__location commute-card__to">
                <div class="commute-card__datetime subheading-bold">
                    {{ toLocation.date }} {{ toLocation.time }}
                </div>
                <h6 class="commute-card__location-name">
                    {{ toLocation.name }}
                </h6>
                <div class="commute-card__distance subheading-bold">
                    <span class="numeric_dist">{{ toLocation.distance }}</span> travel
                </div>
            </div>
        </div>
        <h5 class="commute-card__price">
            {{ price }} <span class="muted-text">incl VAT</span>
        </h5>
        <div class="commute-card__edit">
            <nuxt-icon name="icon_edit" />
        </div>
    </div>
</template>

<script setup>
const cargoBookingStore = useCargoBookingStore();
const cargoBooking = cargoBookingStore.cargoBooking;
const fromLocation = ref({
    'name': cargoBooking.departure.vertiport_location,
    'date': cargoBooking.departure.date || '11/19/2022',
    'time': cargoBooking.departure.time || '10:00',
    'distance': `${cargoBooking.departure.distance_km} KM`
})
const toLocation = ref({
    'name': cargoBooking.arrival.vertiport_location,
    'date': cargoBooking.arrival.date || '11/19/2022',
    'time': cargoBooking.arrival.time || '19:30',
    'distance': `${cargoBooking.arrival.distance_km} KM`
})
const price = ref(cargoBooking.fare.total);
</script>

<style scoped lang="scss">
.commute-card {
    background-color: $primary_arrow_light;
    border-radius: 15px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr 1fr;
    padding: 20px;
    margin: auto;
    max-width: 400px;

    .commute-card__tofro {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "from arrow to";
        padding: 1rem;

        .commute-card__location {
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;
        }
        .commute-card__from {
            grid-area: from;
        }

        .commute-card__to {
            grid-area: to;
        }

        .commute-card__arrow {
            grid-area: arrow;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .commute-card__price {
        margin: auto;
    }

    .commute-card__edit {
        margin: auto 0 auto auto;
    }
}
</style>
