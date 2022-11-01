<template>
    <header>
        <div class="inner_header">
            <div class="logo_container">
                <a class ="logo"></a>
            </div>
            <ul class="navigation">
                <a href="/">
                    <li>Strona Główna</li>
                </a>
                <!-- <a href="/info">
                    <li>O Stronie</li>
                </a> -->
                <a href="/zglos_kapliczke">
                    <li>Zgłoś Kapliczkę</li>
                </a>
                <a href="/kontakt">
                    <li>Kontakt</li>
                </a>
            </ul>
            <div class="logo_kleszczow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/POL_gmina_Kleszcz%C3%B3w_COA.svg" alt="logo gminy kleszczów">   
            </div>
        </div>
    </header>
</template>
 
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

header {
    width: 100%;
    height: max(100px, 2vh);
    background: linear-gradient(to right, #081562, #4e0808);
}

.inner_header {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.logo_container {
    height: 100%;
    padding: 0.6vw;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
}

.navigation a {
    height: 100%;
    padding: 0px 20px;
}

.navigation a li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    font-family: 'Arial';
    font-size: max(16px, 1vmax);
    text-transform: uppercase;
}
.logo{
    background-image: url("/static/e-kapliczki.svg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
}
.logo_kleszczow {
    height: 100%;
    padding: 0.6vw;
    display: flex;

}
@media screen and (max-width: 1200px){
    .logo{
        width: clamp(200px, 33vw, 360px);
    }
}

@media screen and (max-width: 950px){
    .logo_kleszczow{
        display: none;
    }
    .navigation {
        justify-content: space-evenly;
    }
    .navigation a {
    height: 100%;
    padding: 0px 2vw;
}
}

@media screen and (max-width: 750px){
    .logo_container{
        display: none;
    }
}

</style>