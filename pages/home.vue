<template>
    <div class="arrow-grid">
        <div class="arrow-grid-child-fw home">
            <div class="home__info">
                <div class="home__info__username">
                    <div class="username-icon">
                        <img src="/_nuxt/assets/icons/icon_spl_xmas_presents.svg" alt="logo" />
                    </div>
                    <h1 class="username">Hi {{user.name}}!</h1>
                </div>
                <div class="home__info__user-stats">
                    <div class="ride-open">
                        <h1>{{user.rideStats.rideOpen}}</h1>
                        <h3>Ride Open</h3>
                    </div>
                    <div class="ride-done">
                        <h1>{{user.rideStats.rideDone}}</h1>
                        <h3>Ride Done</h3>
                    </div>
                    <div class="arrow-points">
                        <h1>{{user.rideStats.arrowPoints}}</h1>
                        <h3>Arrow Points</h3>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="cargo-shipping">
                    <h2 class="cargo-shipping__h2">Where are we flying today?</h2>
                    <HeaderButton
                        class="cargo-shipping__header"
                        :id="'headerButton'"
                        :headings="arrow_flight_types"
                        :activeIndex="activeIndex"
                        @active-index="activeIndex = $event"
                    />
                    <div class="cargo-shipping__content">
                        <div class="active-index__0" v-show="activeIndex==0">
                            <InputDigits
                                :id="'inputCargoPackages'"
                                v-model="inputPackageValue"
                                :inputValue="inputPackageValue"
                                @input="updatePackageValue"
                                :digitLabel="'Packages'"
                            />
                            <ActionButton
                                :id="'buttonSubmit'"
                                :buttonText="'Search Flights'"
                                :buttonTextClass="'btn-medium'"
                                :buttonTypeClass="'primary-btn-sm'"
                                :buttonBgClass="'primary-btn-dark-bg'"
                                :buttonAction="goNextCargoPackage"
                            />
                        </div>
                        <!-- <div class="active-index__1" v-show="activeIndex==1">
                            <InputIcon
                                :id="'inputCargoAddress'"
                                :type="'text'"
                                v-model="inputFieldValue"
                                :inputValue="inputFieldValue"
                                @input="inputFieldValue = $event"
                                :placeholder="'Where to ship to?'"
                                :error="inputFieldError"
                                :leftIcon="'search'"
                                :darkMode="true"
                            />
                        </div> -->
                    </div>
                </div>
                <div class="divider"></div>
                <RightImgCard
                    :id="'card1'"
                    :title="'The future of travel will be eVtol'"
                    :paragraph="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus in risus in hendrerit.'"
                    :imgSrc="'/images/helicopter.jpg'"
                    :imgAlt="'helicopter'"
                    :contentLink="''"
                    :contentLinkText="'Read More'"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['input']);
const inputPackageValue = ref(1);
const inputFieldValue = ref('');
const inputFieldError = ref('');
const userStore = useUserStore();
const user = userStore.getUser;
const cargoBookingStore = useCargoBookingStore();
const arrow_flight_types = [
    {
        id: 0,
        icon: 'vtol_cargo',
        text: 'Cargo',
    },
    // {
    //     id: 1,
    //     icon: 'vtol_person',
    //     text: 'Rideshare',
    // }
];
const activeIndex = ref(0);
const goNextCargoPackage = () => {
    window.location.href = '/bookCargo';
};
const updatePackageValue = (value) => {
    inputPackageValue.value = value;
    cargoBookingStore.setCargoPackages(value);
};
</script>

<style scoped lang="scss">
.home {
    .home__info {
        .home__info__username {
            display: flex;

            .username-icon {
                width: 30px;
                height: 30px;
            }
            .username {
                padding-left: 15px;
                height: 30px;
                display:flex;
                align-items: center;
                justify-content: center;
                margin: 0;
            }
        }
        .home__info__user-stats {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 8px;
            padding: 10px 0;

            & > div {
                background: $greys_almost_white_muted;
                border-radius: 15px;
                color: $primary_arrow_blue;
                text-align: center;
                padding: 10px;

                h1 {
                    color: $primary_arrow_blue;
                    text-align: center;
                }

                h3 {
                    color: $primary_arrow_blue;
                    text-align: center;
                    font-size: 1em;
                }
            }
        }
        .cargo-shipping {
            background: $primary_arrow_navy;
            border-radius: 24px;
            padding: 15px;
            display: grid;
            grid-template-rows: auto auto auto;
            gap: 20px;

            .cargo-shipping__h2 {
                color: $primary_arrow_light;
                text-align: center;
                padding-top: 15px;
                padding-bottom: 10px;
            }

            .cargo-shipping__content {
                .active-index__0 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;

                }
            }
        }
    }
}
</style>
