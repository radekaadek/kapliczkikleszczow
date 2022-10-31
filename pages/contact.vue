<template>
    <div>
        <Bar />
        <div class="contact">
            <h1>Contact</h1>
            <p>Send us a message</p>
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
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
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

body {
    background-color: white;
}

.contact, .contact form {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>
