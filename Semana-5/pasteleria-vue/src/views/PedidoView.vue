<template>
  <img alt="Vue logo" src="../assets/img2.png" />

  <div class="contendedor-2">
    <div class="datos">
      <div class="campo">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="" required />
      </div>
      <div class="campo">
        <label for="cel">Telefono</label>
        <input type="tel" maxlength="10" required />
      </div>
      <div class="campo">
        <label for="correo">Correo Electronico</label>
        <input type="email" name="correo" required />
      </div>
      <div class="campo">
        <label for="pastel">Selecciona un Pastel</label>
        <select name="pastel">
          <option value="1">Pastel Luna $145.00 MXN</option>
          <option value="2">Pastel Galaxia $175.00 MXN</option>
          <option value="2">Pastel Jupiter $185.00 MXN</option>
          <option value="2">Pastel Tierra $200.00 MXN</option>
        </select>
      </div>
      <div class="campo">
        <p style="margin-top: 20px; font-size: 30px">Total: $0.00 MXN</p>
      </div>
    </div>
    <!-- <FormTopics msg="Hola"/> -->
    <div class="datos-tabla">
      <h4>Marca algun relleno</h4>

      <table>
        <tr>
          <th>Relleno/Topin</th>
          <th>Precio</th>
          <th>Agregar</th>
        </tr>
        <tr>
          <td>Chochitos</td>
          <td>10.00 MXN</td>
          <td><input type="checkbox" name="agregar" /></td>
        </tr>
        <tr>
          <td>Chocolate blanco</td>
          <td>15.00 MXN</td>
          <td><input type="checkbox" name="agregar" /></td>
        </tr>
        <tr>
          <td>Frutos Azules</td>
          <td>25.00 MXN</td>
          <td><input type="checkbox" name="agregar" /></td>
        </tr>
        <tr>
          <td>Rebanadas de Fresa</td>
          <td>25.00 MXN</td>
          <td><input type="checkbox" name="agregar" /></td>
        </tr>
        <tr>
          <td>Chocolate Amargo</td>
          <td>18.00 MXN</td>
          <td><input type="checkbox" name="agregar" /></td>
        </tr>
        <tr>
          <td>Durazno</td>
          <td>23.00 MXN</td>
          <td><input type="checkbox" name="agregar" /></td>
        </tr>
      </table>
    </div>
    <div class="boton">
      <input type="submit" value="Ordenar" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import FormTopics from "@/components/FormTopics.vue";

export default {
  name: "FormTopics",
  components: {
    FormTopics,
  },
};
</script>


<style scoped>
img {
  width: 100%;
}
.contendedor-2 {
  width: 90%;
  /* background-color: blueviolet; */
  display: inline-block;
  margin-left: 5%;
  align-items: center;
}
.datos {
  margin: 40px;
  float: left;
  width: 40%;
}
.datos-tabla {
  float: right;
  margin-right: 50px;
  justify-content: center;
  text-align: center;
  margin-right: 10%;
}
.boton {
  padding-top: 25%;
  padding-left: 45%;
  padding-bottom: 20px;
}
.boton input[type="submit"] {
  margin: auto;
  background: #3895ea;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 15px 40px;
}
.datos .campo {
  padding: 5px;
  /* display: inline-block; */
}
.datos .campo input[type="text"],
.datos .campo input[type="email"],
.datos .campo input[type="tel"],
.datos .campo select {
  border: 1px solid #cecece;
  border-radius: 5px;
  width: 100%;
  font-size: 20px;
  /* color: #a4a4a4; */
}
table,
th,
td {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

table {
  border-collapse: collapse;
  width: 500px;
  text-align: center;
}

th,
td {
  padding: 10px 20px;
}

th {
  background: #009ddc;
  color: #fff;
}

tr:hover {
  background: #e5e5e5;
}
</style>
