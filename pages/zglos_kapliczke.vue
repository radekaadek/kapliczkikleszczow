<template>
    <div>
        <Bar/>
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

        function includeJS(path) {
            var js = document.createElement("script");
            js.type = "text/javascript";
            js.src = path;
            document.body.appendChild(js);
        }
        includeJS("/lib/leaflet.js");
        
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
                .setContent(`<div class="lokalizacja"> Współrzędne: ${e.latlng.toString()}</div> <input type="button" value="Zgłoś kapliczkę" class="butonik"/>`)
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
    margin: 10px;
    font-size: 20px;
}

#map {
    display: flex;
    width: 100vw;
    height: 100%;
    cursor: crosshair;
}


.butonik {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.butonik:disabled {
  cursor: default;
}

.butonik:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}

.leaflet-popup-content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.lokalizacja {
    color: red;
}
</style>
