<template>
  <header>
    <nav class="navbar">
      <div class="ekapliczki">
        <Logo />
      </div>
      <ul class="nav-list">
        <a class="a_list_item" href="/">
          <li>Strona Główna</li>
        </a>
        <!-- <a href="/info">
                    <li>O Stronie</li>
                </a> -->
        <a class="a_list_item" href="/zglos_kapliczke">
          <li>Zgłoś Kapliczkę</li>
        </a>
        <a class="a_list_item" href="/kontakt">
          <li>Kontakt</li>
        </a>
      </ul>
      <div class="logo_gminy_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f2/POL_gmina_Kleszcz%C3%B3w_COA.svg"
          alt="logo gminy kleszczów"
        />
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
  height: 100px;
  background-color: #24252a;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.ekapliczki {
  padding: 0 10px 0 10px;
}

.nav-list {
  height: 100%;
  display: flex;
}

.nav-list .a_list_item {
  height: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
}

.nav-list .a_list_item li {
  color: white;
  font-size: 20px;
  font-family: sans-serif;
  text-transform: uppercase;
}

.nav-list .a_list_item:hover li {
  color: #74b50a;
  transition: color 0.1s ease-out;
}

.logo_gminy_container img {
  height: 90px;
  padding: 0 10px 0 10px;
}

@media screen and (max-width: 1060px) {
  .navbar {
    justify-content: center;
  }
  .logo_gminy_container img {
    display: none;
  }
}

@media screen and (max-width: 960px) {
  .ekapliczki,
  .logo_gminy_container {
    display: none;
  }
}

@media screen and (max-width: 580px) {
  .navbar {
    display: block;
  }
  .nav-list {
    justify-content: space-around;
  }
  .nav-list .a_list_item {
    padding: 0 5px 0 5px;
  }
  .nav-list .a_list_item li {
    font-size: 3.5vw;
    font-weight: bolder;
  }
}
</style>
