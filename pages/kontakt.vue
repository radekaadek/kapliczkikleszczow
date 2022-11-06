<template>

  <body id="body_contact">
    <div>
      <Bar />
      <div id="background_main">
        <main id="main_contact">
          <form class="contact" onsubmit= "return false">
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
              <button id="submiter" type="submit" value="Wyślij" @click="submit">Wyślij</button>
              <input type="reset" value="Reset" />
            </div>
          </form>
        </main>
      </div>
      <Foo />
    </div>
  </body>
</template>

<script lang="js">
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
  methods: {
    submit() {
      const http = new XMLHttpRequest();
      const name = document.getElementById('name')
      const email = document.getElementById('email')
      const message = document.getElementById('message')
      const emailRegex = new RegExp(/[a-zA-Z.\d]+@[a-zA-Z.]+\.[a-zA-Z\d]{2,4}/, "gm");

      if (emailRegex.test(email.value)||email.value.length==0||message.value.length==0||name.value.length==0) {
      let url = `https://kapliczkikleszczowmail.herokuapp.com/kontakt?name=${name.value}&email=${email.value}&content=${message.value}`;
      http.open("POST", url);
      http.send();
      http.onreadystatechange = (e) => {
        console.log(http.responseText)
      }
      document.querySelector('form.contact').innerHTML = `<h2>Proszę potwierdzić, wiadomość z linkiem wysłana na e-mail📧</h2>`}
      else {
        alert('Niepoprawny adres e-mail lub brak wymaganych pól')
      }

    },
  },
};</script>

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
  background-image: url(https://drive.google.com/uc?export=download&id=1YWh8YtVftIuEp3Cr_upT4YTrLcU-FmxR);
  background-position: 0 65%;
  background-size: cover;
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

form .action input,
#submiter {
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

#submiter {
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
