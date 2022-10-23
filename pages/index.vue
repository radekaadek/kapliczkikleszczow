<template>
    <div>
        <h1>App</h1>
        <router-view></router-view>
    </div>
</template>

<script lang="ts"></script>

<script>
export default {
    name: 'App',
    components: {
        head() {
            return {
                title: 'App',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'App'
                    }
                ]
            }
        }
    }
}
</script>

<style>

</style>