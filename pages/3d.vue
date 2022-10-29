<template>
    <div>
        <Viewer />
    </div>
</template>

<script lang="ts"></script>

<script>
export default {
    head() {
        return {
            title: 'Kontakt',
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

</style>
