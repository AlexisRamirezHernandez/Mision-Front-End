<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/img2.png" height="180px" width="100%" />
    <h2 style="text-align: center">Pasteleria Planeta</h2>
    <h2 style="text-align: center">Bienvenido</h2>
    <h3 style="text-align: center">Estos son tus pedidos nuevos</h3>
    <div class="contenedor">
      <div class="tabla-contenido" style="margin-left: 100px">
        <form action="">
          <table>
            <tr>
              <th>Numero Orden</th>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Pastel</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>0302220003</td>
              <td>Jesus Guzman Eusebio</td>
              <td>554322323</td>
              <td>
                Pastel Galaxia
                <h5>Fresa</h5>
              </td>
              <td>
                $175.00 MXN
                <p>Pagado</p>
              </td>
            </tr>
            <tr>
              <td>0302220002</td>
              <td>Fernanda Ochoa</td>
              <td>554902873</td>
              <td>
                Pastel Tierra
                <h5>Ninguna</h5>
              </td>
              <td>
                $175.00 MXN
                <p>Pagado</p>
              </td>
            </tr>
            <tr>
              <td>0302220001</td>
              <td>Ricardo Miron</td>
              <td>554322323</td>
              <td>
                Pastel Jupiter
                <h5>Chocolate amargo,fresas,Chochitos</h5>
              </td>
              <td>
                $175.00 MXN
                <p>Pagado</p>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class="tabla-pasteles" style="width: 250px">
        <table style="width: 50%">
          <tr>
            <th style="width: 150px">Foto del pastel</th>
            <th style="width: 100px">Nombre</th>
            <th style="width: 100px">Sabor</th>
            <th style="width: 100px">Precio</th>
            <th style="width: 100px">Cantidad</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://cdn.kiwilimon.com/recetaimagen/36187/th5-640x640-44504.jpg"
                width="80px"
              />
            </td>
            <td>Pastel Luna</td>
            <td>Tres Leches</td>
            <td>145.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/03/12211546/RFB-1902-3-tortaarcoiris.jpg"
                width="100px"
              />
            </td>
            <td>Pastel galaxia</td>
            <td>Arcoiris</td>
            <td>175.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://t2.rg.ltmcdn.com/es/posts/6/3/4/pastel_de_moka_envinado_12436_orig.jpg"
                width="100px"
              />
            </td>
            <td>Pastel Jupiter</td>
            <td>Mocca</td>
            <td>185.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://mysuenos.com/wp-content/uploads/2020/05/pastel-azul.jpg"
                width="100px"
              />
            </td>
            <td>Pastel Tierra</td>
            <td>Blue</td>
            <td>200.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
        </table>
      </div>
      <!-- <h4>Marca algun relleno</h4> -->
      <div class="tabla-rellenos">
        <table style="width: 150px">
          <tr>
            <th style="width: 150px">Relleno/Topin</th>
            <th style="width: 150px">Precio</th>
            <th style="width: 200px">Actulizar</th>
          </tr>
          <tr>
            <td>Chochitos</td>
            <td>10.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>Chocolate blanco</td>
            <td>15.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>Frutos Azules</td>
            <td>25.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>Rebanadas de Fresa</td>
            <td>25.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>Chocolate Amargo</td>
            <td>18.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
          <tr>
            <td>Durazno</td>
            <td>23.00 MXN</td>
            <td>
              <input type="number" value="4" style="width: 50px" />
              <input type="button" value="Actualizar" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
body {
  background-color: #fef9de;
}

table,
th,
td {
  border: 1px solid rgba(0, 0, 0, 0.2);
}

table {
  border-collapse: collapse;
  text-align: center;
  table-layout: fixed;
  width: 75%;
}

th,
td {
  padding: 10px;
  width: 200px;
}

th {
  background: #009ddc;
  color: #fff;
}

tr:hover {
  background: #e5e5e5;
}

.wrapper .sidebar {
  background: #957dad;
  position: fixed;
  /* margin-top: 173px; */
  width: 225px;
  height: 100%;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 30px 30px;
  border-bottom: 1px solid #957dad;
  color: rgb(241, 237, 237);
  font-size: 16px;
  position: relative;
}

.wrapper .sidebar ul li a:hover {
  color: #0c7db1;

  background: white;
  border-right: 2px solid rgb(5, 68, 104);
}
</style>