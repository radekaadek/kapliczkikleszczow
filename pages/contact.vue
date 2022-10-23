<template>
    <div>
        <h1>Contact</h1>
        <NuxtLink to="/">contact</NuxtLink>
    </div>
</template>

<script setup lang="ts"></script>

<script>
export default {
    head() {
        return {
            title: 'Contact',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'This is the contact page'
                }
            ]
        }
    }
}
</script>

<style>

</style>