<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="counter">
      {{$store.state.counter}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('subircontador')">+</button>
      <button @click="$store.dispatch('bajarcontador')">-</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  
  methods:{
    bajarcontador(){
      this.counter--;
    },
    subircontador(){
      this.counter++;
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}
.buttons button{
  font-size: 40px;
  color: azure;
  background-color: blue;
  margin: 0 10px;
}
</style>