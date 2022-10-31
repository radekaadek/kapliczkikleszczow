<template>
  <foo></foo>

  <!-- choose a point on a map -->
  <div id="map"></div>

  <Bar></Bar>
</template>

<script>
export default {
    mounted() {
        const map = L.map('map').setView([51.223019, 19.304054], 13);

        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const marker = L.marker([51.216938, 19.302464]).addTo(map)
            .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent(`You clicked the map at ${e.latlng.toString()}`)
                .openOn(map);
        }

        map.on('click', onMapClick);
    },
    head: {
        title: 'Przeslij kapliczke',
        link: [
            { rel: 'stylesheet',
              href: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.css',
              integrity: 'sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=', 
              crossorigin: "" }
        ],
        script: [
            { src: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.js',
              integrity: 'sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=',
              crossorigin: ""
            }
        ]
    }
}
</script>

<style>
#map { width: 600px; height: 400px;}
</style>
