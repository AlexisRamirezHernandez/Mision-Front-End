<template>
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
</template>
<script>
export default {
  name: "FormPedido",
};
</script>
<style scoped>
.datos {
  margin: 40px;
  float: left;
  width: 100%;
  height: 300px;
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
</style>