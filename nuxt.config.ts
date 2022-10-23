import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    head: {
        link: [
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com/%22%3E'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com/',
                crossorigin: true
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap'
            }
        ]
    }
})
