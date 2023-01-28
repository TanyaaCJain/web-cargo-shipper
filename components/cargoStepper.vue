<template>
    <div class="cargo-stepper">
        <div class="cargo-stepper__container">
            <div class="cargo-stepper__step1" v-show="step==1">
                <CommuteLocation
                    :dark="true"
                />
                <ActionButton
                    :buttonText="'Show flights'"
                    :buttonTextClass="'btn-medium'"
                    :buttonTypeClass="'primary-btn-sm'"
                    :buttonBgClass="'primary-btn-dark-bg'"
                    :buttonIcon="'add'"
                    :buttonAction="showFlights"
                />
            </div>
            <div class="cargo-stepper__step2" v-show="step==2">
                <ActionButton
                    :buttonText="'Book'"
                    :buttonTextClass="'btn-medium'"
                    :buttonTypeClass="'primary-btn-sm'"
                    :buttonBgClass="'primary-btn-dark-bg'"
                    :buttonAction="bookFlights"
                />
            </div>
            <div class="cargo-stepper__step3" v-show="step==3">
                <div class="cargo-stepper__step3__totalfare">
                    <div class="subheading-bold">Total</div>
                    <div class="fare">
                        <div class="subheading-bold">{{ totalFare }}</div>
                        <div class="field-info">incl VAT</div>
                    </div>
                </div>
                <ActionButton
                    :buttonText="'Book Cargo Flight'"
                    :buttonTextClass="'btn-medium'"
                    :buttonTypeClass="'primary-btn-sm'"
                    :buttonBgClass="'primary-btn-dark-bg'"
                    :buttonAction="confirmFlight"
                />
            </div>
            <div class="cargo-stepper__bars">
                <div class="cargo-stepper__bar" :class="{'cargo-stepper__bar--active': step==1}"></div>
                <div class="cargo-stepper__bar" :class="{'cargo-stepper__bar--active': step==2}"></div>
                <div class="cargo-stepper__bar" :class="{'cargo-stepper__bar--active': step==3}"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    step: {
        type: Number,
        required: true
    }
});
const showFlights = () => {
    window.location.href = '/flights';
};
const bookFlights = () => {
    window.location.href = '/checkout';
};
const confirmFlight = () => {
    window.location.href = '/checkout';
};
const cargoBookingStore = useCargoBookingStore();
const totalFare = cargoBookingStore.getTotalFare;
</script>

<style scoped lang="scss">
.cargo-stepper {
    background: $primary_arrow_navy;
    border-radius: 24px 24px 0px 0px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    padding: 22.5px 24px;

    .cargo-stepper__container {
        color: $primary_arrow_light!important;
        .cargo-stepper__step1 {
            .cargo-stepper__commute-location h2 {
                color: $primary_arrow_light!important;
            }
        }

        .cargo-stepper__step3 {

            .cargo-stepper__step3__totalfare {
                display: grid;
                grid-template-columns: 1fr auto;
                grid-template-areas: "subheading-bold fare";
                grid-column-gap: 16px;
                align-items: center;
                padding: 12px 0;

                .subheading-bold {
                    grid-area: subheading-bold;
                    color: $primary_arrow_light!important;
                    font-size: 12px;
                }

                .fare {
                    grid-area: fare;

                    .subheading-bold {
                        color: $primary_arrow_light!important;
                        font-size: 12px;
                    }

                    .field-info {
                        color: $greys_grey_light!important;
                        font-size: 12px;
                    }

                }
            }
        }
    }

    .cargo-stepper__bars {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin-top: 20px;

        .cargo-stepper__bar {
            width: 100%;
            height: 4px;
            background: $greys_blue_light_muted;
            border-radius: 12px;

            &--active {
                background: $arrow_active;
            }
        }
    }
}
</style>