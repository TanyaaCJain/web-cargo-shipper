<template>
    <div class="book-cargo">
        <div class="arrow-grid">
            <div class="arrow-grid-child-fw book-cargo">
                <BackLinkArrow/>
                <div class="book-cargo__h1">
                    <h1>Booking a cargo flight</h1>
                </div>
                <div class="book-cargo__p">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non massa non neque cursus interdum in eget erat.</p>
                </div>
                <h3>When</h3>
                <div class="book-cargo__datetime">
                    <div class="active-index__0" v-show="activeIndex==0">
                        <InputDateTime 
                            :id="activeIndex"
                            :inputDate="inputArrivalDateValue"
                            @inputDate="updateArrivalDateValue"
                            :inputTime="inputArrivalTimeValue"
                            @inputTime="updateArrivalTimeValue"
                        />
                    </div>
                    <div class="active-index__1" v-show="activeIndex==1">
                        <InputDateTime 
                            :id="activeIndex"
                            :inputDate="inputDepartureDateValue"
                            @inputDate="updateDepartureDateValue"
                            :inputTime="inputDepartureTimeValue"
                            @inputTime="updateDepartureTimeValue"
                        />
                    </div>
                    <HeaderButton
                        class="cargo-shipping__header"
                        :id="'headerButton'"
                        :headings="flight_arrival_departure"
                        :activeIndex="activeIndex"
                        @active-index="activeIndex = $event"
                    />
                </div>
                <h3>Departure Location</h3>
                <InputLocation
                    :id="'departureLocation'"
                    :label="'Pick-up location'"
                    :type="'text'" 
                    v-model="departureLocationObj"
                    :inputValue="departureLocationObj"
                    @input="departureLocationObj.value = $event"
                    :placeholder="'Enter location'"
                    :error="locationError"
                    :distance="cargoBooking.departure.distance_km + ' km'"
                />
                <h3>Arrival Location</h3>
                <InputLocation
                    :id="'arrivalLocation'"
                    :label="'Drop-off location'"
                    :type="'text'" 
                    v-model="arrivalLocationObj"
                    :inputValue="arrivalLocationObj"
                    @input="arrivalLocationObj.value = $event"
                    :placeholder="'Enter location'"
                    :error="locationError"
                    :distance="cargoBooking.arrival.distance_km + ' km'"
                />
            </div>
        </div>
        <CargoStepper :step="1" />
    </div>
</template>

<script setup>
const cargoBookingStore = useCargoBookingStore();
const cargoBooking = cargoBookingStore.cargoBooking;
const flight_arrival_departure = [
    {
        id: 0,
        text: 'Arrival',
    },
    {
        id: 1,
        text: 'Departure',
    }
];
const activeIndex = ref(1);
const arrivalLocationObj = ref(cargoBooking.arrival.drop_off_location);
const departureLocationObj = ref(cargoBooking.departure.pick_up_location);
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const inputArrivalDateValue = ref(cargoBooking.arrival.date || `${currentYear}/${currentMonth}/${currentDay}`);
const inputArrivalTimeValue = ref(cargoBooking.arrival.time || `${currentHours}:${currentMinutes}`);
const inputDepartureDateValue = ref(cargoBooking.departure.date || `${currentYear}/${currentMonth}/${currentDay}`);
const inputDepartureTimeValue = ref(cargoBooking.departure.time || `${currentHours}:${currentMinutes}`);
const updateArrivalDateValue = (value) => {
    inputArrivalDateValue.value = value;
    cargoBooking.setArrivalDate(value);
};
const updateArrivalTimeValue = (value) => {
    inputArrivalTimeValue.value = value;
    cargoBooking.setArrivalTime(value);
};
const updateDepartureDateValue = (value) => {
    inputDepartureDateValue.value = value;
    cargoBooking.setDepartureDate(value);
};
const updateDepartureTimeValue = (value) => {
    inputDepartureTimeValue.value = value;
    cargoBooking.setDepartureTime(value);
};

const locationError = ref('');
</script>

<style scoped lang="scss">
.book-cargo {
    display: grid;
    grid-template-areas:
        "back-icon"
        "logo"
        "h1"
        "p"
        "input"
        "button";
    gap: 5px;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.5rem 0;

    .arrow-grid {
        margin-bottom: 120px;

        .book-cargo__back-icon {
            width: 20px;
        }

        .arrow__logo {
            width: 80px;
            margin: 20px 0;

            img {
                width: 100%;
            }
        }

        .book-cargo__datetime {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "input header";
            gap: 5px;
            align-items: center;

            .active-index__0 {
                grid-area: input;
            }

            .active-index__1 {
                grid-area: input;
            }

            .cargo-shipping__header {
                grid-area: header;
            }
        }
    }
}
</style>