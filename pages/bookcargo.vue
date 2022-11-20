<template>
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

            <h3>Departure Location</h3>
            <InputLocation
                :id="'departureLocation'"
                :label="'Drop-off location'"
                :type="'text'" 
                v-model="departureLocation"
                :inputValue="departureLocation"
                @input="departureLocation = $event"
                :placeholder="'Enter location'"
                :error="locationError"
                :distance="'12 km'"
            />
            <h3>Arrival Location</h3>
            <InputLocation
                :id="'arrivalLocation'"
                :label="'Drop-off location'"
                :type="'text'" 
                v-model="arrivalLocation"
                :inputValue="arrivalLocation"
                @input="arrivalLocation = $event"
                :placeholder="'Enter location'"
                :error="locationError"
                :distance="'12 km'"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        locationError: {
            type: String,
            required: false
        },
        arrivalLocation: {
            type: String,
            required: true,
            default: ''
        },
        departureLocation: {
            type: String,
            required: true,
            default: ''
        }
    },
    data() {
        return {
            locationError: '',
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
    }
}
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
}
</style>