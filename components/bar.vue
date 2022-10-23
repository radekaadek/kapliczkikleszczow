<template><header>
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
</header></template>
 
 <style scoped>
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
</style>