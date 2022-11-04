<template>
  <body id="body_contact">
    <div>
      <Bar />
      <div id="background_main">
        <main id="main_contact">
          <form class="contact" action="">
            <div class="title">
              <h2>Kontakt</h2>
            </div>
            <div class="half">
              <div class="item">
                <label for="name">Nazwa</label>
                <input type="text" id="name" />
              </div>
              <div class="item">
                <label for="email">E-mail</label>
                <input type="text" id="email" />
              </div>
            </div>
            <div class="full">
              <label for="message">Wiadomość</label>
              <textarea name="" id="message"></textarea>
            </div>
            <div class="action">
              <input type="submit" value="Wyślij" />
              <input type="reset" value="Reset" />
            </div>
          </form>
        </main>
      </div>
      <Foo />
    </div>
  </body>
</template>

<script lang="ts"></script>

<script>
export default {
  head() {
    return {
      title: "Kontakt",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is the contact page",
          charset: "UTF-8",
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: sans-serif;
}

#body_contact,
#background_main {
  background-image: url(https://drive.google.com/uc?export=download&id=16p-qgmyEr0JA5Av_NKa7VrtDJjramDyr);
  background-position: 0% 55%;
  background-size: 120vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
}

#main_contact {
  height: calc(100vh - 158px);
  padding: 50px 0;
}
.contact {
  background: rgba(36, 37, 42, 0.9);
  width: 640px;
  margin: 0 auto 50px auto;
  max-width: 97%;
  border-radius: 4px;
  padding: 55px 30px;
}

form .title h2 {
  letter-spacing: 3px;
  border-bottom: 1px solid white;
  display: inline-block;
  padding-bottom: 8px;
  margin-bottom: 32px;
}

form .half {
  display: flex;
  justify-content: space-between;
}

form .half .item {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 48%;
}

form label {
  display: block;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

form .half .item input {
  border-radius: 4px;
  border: 1px solid white;
  outline: 0;
  padding: 16px;
  width: 100%;
  height: 44px;
  background: transparent;
  font-size: 17px;
}

form .full {
  margin-bottom: 24px;
}

form .full textarea {
  background: transparent;
  border-radius: 4px;
  border: 1px solid white;
  outline: 0;
  padding: 12px 16px;
  width: 100%;
  height: 200px;
  font-size: 17px;
}

form .action {
  margin-bottom: 32px;
}

form .action input {
  background: transparent;
  border-radius: 4px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 1.5px;
  outline: 0;
  padding: 0 20px 0 22px;
  margin-right: 10px;
}
input,
textarea {
  color: white;
}

form .action input[type="submit"] {
  background: white;
  color: black;
}

form .action input[type="reset"] {
  color: white;
}

form .icons a {
  border: 1px solid white;
  border-radius: 50%;
  line-height: 36px;
  text-align: center;
  font-weight: 600;
  width: 38px;
  margin-right: 10px;
}

form .half .item input:focus,
form .full textarea:focus,
form .action input[type="reset"]:hover,
form .icons a:hover {
  background: rgba(255, 255, 255, 0.075);
}

@media (max-height: 815px) {
  #main_contact {
    height: auto;
  }
}

@media (max-width: 1000px) {
  .navbar {
    background-color: rgb(36, 37, 42);
  }
}

@media (max-width: 960px) {
  #background_main {
    background-position: 50% 30%;
    background-size: cover;
  }
}

@media (max-width: 480px) {
  #main_contact {
    height: auto;
  }
  form .half {
    flex-direction: column;
  }
  form .half .item {
    width: 100%;
  }
  form .action {
    display: flex;
    flex-direction: column;
  }
  form .action input {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>
