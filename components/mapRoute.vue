<template>
    <div class="map-route">
        <div id="map" class="map-container"></div>
        <div id="msg"></div>
    </div>
</template>

<script>
export default {
    setup() {
        const config = useRuntimeConfig();
        console.log(config)
        console.log(config.public)
        console.log(config.googleMapsAPIKey)
        if (process.server) {
            console.log('API secret:', config.googleMapsAPIKey)
            }
    },
    data () {
        return {
            startLat: 59.32932349999999,
            startLng: 18.0685808,
            endLat: 51.5073509,
            endLng: -0.1277583
        }
    },
    async mounted() {
        this.startLat = 59.32932349999999;
        this.startLng = 18.0685808;
        this.endLat = 51.5073509;
        this.endLng = -0.1277583;
        await this.deferMapScript();
        this.initMap(this.startLat, this.startLng, this.endLat, this.endLng);
    },
    methods: {
        initMap(startLat, startLng, endLat, endLng) {

            const centerLat = startLat + ((endLat - startLat) / 2);
            const centerLng = startLng + ((endLng - startLng) / 2);

            const center = { lat: centerLat, lng: centerLng };
            const options = {
                zoom: 4,
                scaleControl: true,
                center: center,
            };
            const map = new google.maps.Map(document.getElementById("map"), options);
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
            });
            const line = new google.maps.Polyline({
                path: [startMarker.getPosition(), endMarker.getPosition()],
                strokeColor: "#F9F9FD",
                strokeOpacity: 1.0,
                strokeWeight: 3,
                map: map,
            });
        },
        async deferMapScript() {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = `http://maps.googleapis.com/maps/api/js?key=${this.API_key}`;
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
        },
    },
};
</script>

<style  scoped lang="scss">
.map-container {
    height: 400px;
    width: 100vw;
}
</style>