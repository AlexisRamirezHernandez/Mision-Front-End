<template>
  <nav>
    <ul>
      <router-link to="/admin">Admin</router-link>
      <router-link to="/index">Menu</router-link>
      <router-link to="/pedido">Realiza un pedido</router-link>
    </ul>
  </nav>

  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav> -->

  <router-view />
  <footer>
    <div class="datos" id="contacto">
      <h3 style="text-align: center">Ubicación y Horarios</h3>
      <div class="direccion">
        <h4 style="font-size: 20px">Direccion</h4>
        <p>
          Calle Macedonio Alcala N°8<br />
          Oaxaca de Juarez, C.P. 68800
        </p>
        <p>(951) 157 61 98</p>
        <p>pasteleriaplaneta@gmail.com</p>
      </div>
      <div class="horarios">
        <h4 style="font-size: 20px">Horarios</h4>
        <p>Lunes a Viernes<br />8:00am - 9:00pm</p>
        <p>Sabados y Domingos<br />11:00am - 11:00pm</p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3733.3836847970842!2d-103.39386822512469!3d20.653963595389975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d20.6544405!2d-103.391583!5e0!3m2!1ses!2smx!4v1460436070427"
      width="100%"
      height="300"
      frameborder="0"
      style="border: 0"
      allowfullscreen
    ></iframe>
    <div class="copirigh">
      <p>copiright 2022 LaunchX</p>
    </div>
  </footer>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fef9de;
}

nav {
  /* padding: 30px; */
  padding-top: 10px;

  height: 60px;
  background-color: #d291bc;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 20px;
  float: right;
}

nav a.router-link-exact-active {
  color: white;
}
nav a:hover {
  background-color: #8e5fbd;
  color: white;
}

.datos {
  margin-bottom: 10px;
  width: 50%;
  display: inline-block;
}
.datos .direccion {
  float: left;
  margin-left: 25px;
  margin-bottom: 10px;
}
.datos .horarios {
  float: right;
  margin-right: 25px;
}
.ubicacion {
  background: #fff;
  padding: 70px 0;
}
.copirigh {
  background-color: black;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 18px;
}
</style>
