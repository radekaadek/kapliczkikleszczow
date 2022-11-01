<template>
    <header>
        <div class="inner_header">
            <div class="logo_container">
                <h1>e<span>-kapliczki</span></h1>
            </div>
            <ul class="navigation">
                <a href="/">
                    <li>Strona Główna</li>
                </a>
                <!-- <a href="/info">
                    <li>O Stronie</li>
                </a> -->
                <a href="/zglos">
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
<<<<<<< HEAD
    width: 100vw;
    height: 12vmin;
=======
    width: 100%;
    height: 100px;
>>>>>>> dupa
    background: linear-gradient(to right, #081562, #4e0808);
}

.inner_header {
<<<<<<< HEAD
    width: 100vw;
=======
    width: 100%;
>>>>>>> dupa
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.logo_container {
    height: 100%;
    flex-grow: 1;
}

.logo_container h1 {
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Varela Round', sans-serif;
    font-size: 2vw;
    
}

.navigation {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
}

.navigation a {
    height: 100%;
<<<<<<< HEAD
    padding: 0vw 1vh;
=======
    padding: 0px 20px;
>>>>>>> dupa
}

.navigation a li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    font-family: 'Arial';
    font-size: min(2vw, 25px);
    text-transform: uppercase;
}

.logo_kleszczow {
    height: 100%;
    padding: 0.6vh;
    display: flex;

}

@media screen and (max-width: 800px){
    .logo_kleszczow{
        display: none;
    } 
}
</style>