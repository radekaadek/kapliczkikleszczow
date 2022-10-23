<template>
    <div>
        <header>
            <div class="inner_header">
                <div class="logo_container">
                    <h1>e<span>-kapliczki.pl</span></h1>
                </div>
                <ul class="navigation">
                    <a href="/">
                        <li>Strona Główna</li>
                    </a>
                    <a href="/">
                        <li>O Stronie</li>
                    </a>
                    <a href="/">
                        <li>Zgłoś Kapliczkę</li>
                    </a>
                    <a href="/contact">
                        <li>Kontakt</li>
                    </a>
                </ul>
            </div>
        </header>
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

header {
    width: 100%;
    height: 100px;
    background: linear-gradient(to right, #00093c, #2d0b00);
}

.inner_header {
    width: 60%;
    height: 100%;
    display: block;
    margin: 0 auto;
}

.logo_container {
    height: 100%;
    display: table;
    float: left;
}

.logo_container h1 {
    color: white;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-family: 'Varela Round', sans-serif;
    font-size: 40px;
    font-weight: 800;
}

.logo_container h1 span {
    font-weight: 200;
}

.navigation {
    float: right;
    height: 100%;
}

.navigation a {
    height: 100%;
    display: table;
    float: left;
    padding: 0px 20px;
}

.navigation a:last-child {
    padding-right: 0;
}

.navigation a li {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    color: white;
    font-family: 'Arial';
    font-size: 16px;
    text-transform: uppercase;
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
