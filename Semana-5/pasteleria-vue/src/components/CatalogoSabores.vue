<template>
  <h3>{{ msg }}</h3>
  <div class="rellenos">
    <div class="relleno">
      <p class="alimento">
        Relleno Fresa........................................20.00 MXN
      </p>
    </div>
    <div class="relleno">
      <p class="alimento">
        Chochitos.............................................10.00 MXN
      </p>
    </div>
    <div class="relleno">
      <p class="alimento">
        Chocolate Blanco..................................15.00 MXN
      </p>
    </div>
    <div class="relleno">
      <p class="alimento">
        Chocolate Amargo...............................20.00 MXN
      </p>
    </div>
    <div class="relleno">
      <p class="alimento">
        Durazno..............................................20.00 MXN
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogoSabores",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
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
</style>