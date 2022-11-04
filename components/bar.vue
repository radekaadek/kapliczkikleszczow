<template>
    <header>
        <nav class="navbar">
            <div class="ekapliczki">
                <Logo />
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
        </nav>
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

.navbar {
    background: linear-gradient(to right, #081562, #4e0808);
    color: white;
    display: flex;
}





























/* header {
    width: 100%;
    height: max(100px, 2vh);
    background: linear-gradient(to right, rgb(8, 21, 98), rgb(78, 8, 8));
}

.navbar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.ekapliczki {
    height: 100%;
    padding: 0.6vw;
    display: flex;
    align-items: center;
}

.navigation {
    display: flex;
    justify-content: center;
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

.logo_kleszczow {
    height: 100%;
    padding: 0.6vw;
    display: flex;
    justify-content: flex-end;

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
} */

</style>