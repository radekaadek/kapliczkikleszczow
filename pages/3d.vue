<!-- create empty vue page -->
<template>
    <div>
        <Bar />
        <h1>3D</h1>
    </div>
</template>

<script lang="ts"></script>

<script>
export default {
    head() {
        return {
            title: '3D',
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
