<template>
    <div>
        <Bar />
        <main>
            <iframe title="map"
                src="https://www.google.com/maps/d/u/2/embed?mid=16hEpU3gdoHf34bOzf9CFdVP9WY-xIFM&ehbc=2E312F"></iframe>
        </main>
        <Foo />
    </div>
</template>

<script lang="ts"></script>

<script>
export default {
    head() {
        return {
            title: 'e-kapliczki',
            meta: [
            {
                    hid: 'description',
                    name: 'description',
                    content: 'This is the contact page',
                    charset: 'UTF-8'
                }
            ],
            link: [
            { rel: 'icon', type: 'image', href: '/static/favicon.svg' }
          ]
        }
        
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    background-color: white;
}

main {
    height: calc(100vh - 100px - 58px);
}

iframe {
    display: flex;
    border: none;
    width: 100vw;
    height: 100%;
}
</style>
