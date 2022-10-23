<template>
  <div>
    <bar></bar>
    <h1>Twoj jebany font</h1>
    <p>Twoj jebany font</p>
    <button @click="counter++">counter is: {{ counter }}</button>
  </div>
</template>

<script>
var counter = 0;
export default {
    data() {
        return {
            counter: counter
        }
    },
    methods: {
        dodaj() {
            counter++;
        }
    }
}
</script>

<style>
h1 {
    font-family: 'Fuzzy Bubbles', cursive;
}
</style>