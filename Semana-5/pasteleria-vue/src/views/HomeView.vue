<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img2.png" />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <CatalogoPasteles msg="Bienvenido a nuestra Pasteleria" />
    <CatalogoSabores msg="Disfruta de nuestros Rellenos para tu pastel ideal" />
  </div>
</template>

<script>
// @ is an alias to /src
import CatalogoSabores from "@/components/CatalogoSabores.vue";
import CatalogoPasteles from "@/components/CatalogoPasteles.vue";

export default {
  name: "CatologoPasteles",
  components: {
    CatalogoPasteles,
    CatalogoSabores,
  },
};
</script>
<style >
.home img {
  width: 100%;
}
</style>
