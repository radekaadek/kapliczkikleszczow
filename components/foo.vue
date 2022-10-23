<script setup lang="ts">
let current_year = new Date().getFullYear();
</script>


<template>
    <footer>
        <p>Copyright © {{current_year}}, Plöhnen Software</p>
    </footer>
</template>

<style scoped>
footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 20px;
}
</style>