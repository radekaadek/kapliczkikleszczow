<template>
    <div>
        <header>
            <div class="inner_header">
                <div class="logo_container">
                    <h1>e<span>-kapliczki.pl</span></h1>
                </div>
                <ul class="navigation">
                    <a href="">
                        <li>Strona Główna</li>
                    </a>
                    <a href="">
                        <li>O Stronie</li>
                    </a>
                    <a href="">
                        <li>Zgłoś Kapliczkę</li>
                    </a>
                    <a href="/contact">
                        <li>Kontakt</li>
                    </a>
                </ul>
            </div>
        </header>
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
            ]
        }
    }
}
</script>