<template>
    <div>
        <Bar />
        <div class="contact">
            <h1>Kontakt</h1>
            <p>Skontaktuj się z nami</p>
            <form>
                <label for="name">Nazwa</label>
                <input type="text" id="name" name="name" />
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" />
                <label for="message">Treść</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Wyślij</button>
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

main {
    height: calc(100vh - 100px - 58px);
}

iframe {
    display: flex;
    width: 100vw;
    height: 100%;
}

footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 20px;
}

.contact {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
</style>
