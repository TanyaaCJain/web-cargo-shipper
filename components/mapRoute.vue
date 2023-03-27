<template>
    <div class="map-route">
        <div id="map" class="map-container">
            <div id="controls-panel" class="controls-panel">
                <InputSelect
                    :id="'departure'"
                    :label="'Departure'"
                    :options="departureOptions"
                    :default="``"
                />
                <InputSelect
                    :id="'arrival'"
                    :label="'Arrival'"
                    :options="arrivalOptions"
                    :default="``"
                />
            </div>
            <div id="map-box"></div>
        </div>
        <div id="msg"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
const config = useRuntimeConfig();
const startLat = ref(59.32932349999999).value;
const startLng = ref(18.0685808).value;
const endLat = ref(51.5073509).value;
const endLng = ref(-0.1277583).value;
const cargoBookingStore = useCargoBookingStore();
const cargoBooking = cargoBookingStore.cargoBooking;
const flightOptions = ref(cargoBooking.flight_options);
const departureOptions = ref(flightOptions.value.map((flightOption) => flightOption.departure_vertiport));
const arrivalOptions = ref(flightOptions.value.map((flightOption) => flightOption.arrival_vertiport));
const googleMapsToken = ref(config.public.googleMapsToken).value;
const google_maps_api_url = `https://maps.googleapis.com/maps/api/js?key=${googleMapsToken}`;
const deferMapScript = async () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = google_maps_api_url;
        console.log(script.src);
        script.defer = true;
        script.type = "text/javascript";
        document.head.appendChild(script);
        script.onload = () => {
            resolve();
        };
        script.onerror = () => {
            reject();
        };
    });
};

const initMap = (startLat, startLng, endLat, endLng) => {
    const centerLat = startLat + ((endLat - startLat) / 2);
    const centerLng = startLng + ((endLng - startLng) / 2);

    const center = { lat: centerLat, lng: centerLng };
    const options = {
        zoom: 4,
        scaleControl: true,
        center: center,
    };
    const map = new google.maps.Map(document.getElementById("map-box"), options);
    const icon = {
        url: '/_nuxt/assets/icons/location_marker.svg'
    };
    const startMarker = new google.maps.Marker({
        position: { lat: startLat, lng: startLng },
        map,
        title: "Start",
        icon: icon,
    });
    const endMarker = new google.maps.Marker({
        position: { lat: endLat, lng: endLng },
        map,
        title: "End",
        icon: icon,
    });
    const line = new google.maps.Polyline({
        path: [startMarker.getPosition(), endMarker.getPosition()],
        strokeColor: "#F9F9FD",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map,
    });
    map.setOptions({
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
};

onMounted(async () => {
    await deferMapScript().then(() => {
        initMap(startLat, startLng, endLat, endLng);
    });
});

</script>

<style  scoped lang="scss">
.map-container {
    height: 400px;
    width: 100vw;
    .controls-panel {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 1000;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }
    #map-box {
        height: inherit;
    }
}
</style>
