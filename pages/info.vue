<template>
    <div>
        <Bar />
        <main>
            <div class="container">
                <h1></h1>
                <p></p>
            </div>
        </main>
        <Foo />
    </div>
</template>

<script lang="ts"></script>

<script>
export default {
    head() {
        return {
            title: 'O stronie',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'This is the 3D page',
                    charset: 'UTF-8'
                }
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

main {
    display: flex;
    justify-content: center;
    height: calc(100vh - 100px - 58px);
}

.container {
    width: 70vw;
    background-color: #d9d9d9;

}
</style>