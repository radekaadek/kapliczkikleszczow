<template>
    <div>
        <header>
      <div class="inner_header">
            <div class="logo_container">
                <h1>e<span>-kapliczki.pl</span></h1>
            </div>
            <ul class="navigation">
                <a href=""><li>Strona Główna</li></a>
                <a href=""><li>O Stronie</li></a>
                <a href=""><li>Zgłoś Kapliczkę</li></a>
                <a href=""><li>Kontakt</li></a>
            </ul>
      </div>
        </header>
        <main>
            <!-- <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Gmina%20Kleszcz%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div> -->
            <iframe src="https://www.google.com/maps/d/u/2/embed?mid=16hEpU3gdoHf34bOzf9CFdVP9WY-xIFM&ehbc=2E312F"></iframe>
        </main>
        <footer>
            <!-- <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script>, Plöhnen Software</p> -->
        </footer>
    </div>
</template>

<script lang="ts"></script>

<script>
export default {
    head() {
        return {
            title: 'e-kapliczki',
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

</style>