<template>
  <h1>{{ msg }}</h1>
  <h3>Esta es nuestra carta</h3>
  <!-- <router-link to="/pedido">Realiza un pedido</router-link> -->
  <a class="btn" href="pedido.html">Realiza un pedido</a>
  <div class="contenedor">
    <div class="card">
      <img
        src="https://cdn.kiwilimon.com/recetaimagen/36187/th5-640x640-44504.jpg"
        style="width: 100%"
      />
      <div class="container">
        <h4><b>Pastel Luna</b></h4>
        <p>Pastel de 3 leches</p>
        <p>145.00 MXN</p>
      </div>
    </div>
    <div class="card">
      <img
        src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/03/12211546/RFB-1902-3-tortaarcoiris.jpg"
        style="width: 100%"
      />
      <div class="container">
        <h4><b>Pastel Galaxia</b></h4>
        <p>Pastel Arcoiris</p>
        <p>175.00 MXN</p>
      </div>
    </div>
    <div class="card">
      <img
        src="https://t2.rg.ltmcdn.com/es/posts/6/3/4/pastel_de_moka_envinado_12436_orig.jpg"
        style="width: 100%"
      />
      <div class="container">
        <h4><b>Pastel Jupiter</b></h4>
        <p>Pastel de Mocca</p>
        <p>180.00 MXN</p>
      </div>
    </div>
    <div class="card">
      <img
        src="https://mysuenos.com/wp-content/uploads/2020/05/pastel-azul.jpg"
        style="width: 100%"
      />
      <div class="container">
        <h4><b>Pastel Tierra</b></h4>
        <p>Pastel Blue</p>
        <p>200.00 MXN</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogoPasteles",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.contenedor {
  justify-content: center;
  text-align: center;
}
.datos {
  margin-left: 25%;
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
.card {
  margin: 20px;
  background-color: white;
  display: inline-block;
  margin-right: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 20%;
}
.container {
  padding: 2px 16px;
}
.rellenos {
  margin-left: 25%;
  width: 50%;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 10px;
  /* background-color: #d291bc; */
}
.rellenos .relleno {
  padding: 10px;
}
.alimento {
  font-size: 20px;
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
.btn {
  color: #fff;
  background: #246eb9;
  display: inline-block;
  font-size: 16px;
  padding: 15px 20px;
  text-decoration: none;
  margin: 10px 10px;
  border-radius: 10px;
}

.btn:hover {
  opacity: 0.8;
}
</style>