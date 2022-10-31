<template>
</template>

<script lang="ts"></script>

<script>
import Vue from 'vue';
Vue.prototype = window;

new Vue({
    el: 'root',
    template: '<Viever/>',
    components: {Viever}
});
// const vm = new Vue({
//   template: '<Viever />',
//   created(){
//     console.log('Created');
//   },
//   mounted(){
//     console.log('Mounted');
//   }
// });
// vm.$mount('root');
</script>

<style>

</style>
