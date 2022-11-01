<template>
    <div>
        <Bar/>
        <h1>Zgłoś kapliczkę</h1>
        <main>
            <div id="map"></div>
        </main>
        <Foo/>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Zgłoś kapliczkę',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.css',
                integrity: 'sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=',
                crossorigin: ""
            }
        ],
        script: [
            {
                src: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.js',
                integrity: 'sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=',
                crossorigin: ""
            }
        ]
    },
    mounted() {
        console.log('mounted')
        const map = L.map('map').setView([51.223019, 19.304054], 13);
        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        const marker = L.marker([51.216938, 19.302464]).addTo(map)
            .bindPopup('<b>Kleszczów</b>').openPopup();

        let popup = L.popup()
            .setLatLng([51.216938, 19.302464])
            .setContent("Naciśnij na miejsce, w którym znajduje się kapliczka")
            .openOn(map);

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent(`Współrzędne: ${e.latlng.toString()} <input type="button" value="Zgłoś kapliczkę" class="butonik"/>`)
                .openOn(map);
        }
        console.log('mounted2')
        map.on('click', onMapClick);
    },
}
</script>

<style>

h1 {
    text-align: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
}

#map {
    display: flex;
    width: 100vw;
    height: 100%;
    cursor: crosshair;
}

.butonik{
    color: royalblue;
}
</style>
