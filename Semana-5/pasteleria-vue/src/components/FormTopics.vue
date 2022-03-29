<template>
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
</template>
<script>
// @ is an alias to /src
export default {
  name: "FormTopics",
};
</script>

<style scoped>
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