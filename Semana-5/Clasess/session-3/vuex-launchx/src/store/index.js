// import { random } from 'core-js/core/number';
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:0
  },
  getters: {
  },
  mutations: {
    subircontador(state,random){
      state.counter+=random;
    },
    bajarcontador(state,random){
      state.counter-=random;
    }

  },
  actions: {
    async subircontador({ commit }){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results= await res.json();
      console.log(results);
      commit("subircontador",results)
    },
    async bajarcontador({ commit }){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');
      const results= await res.json();
      console.log(results);
      commit("bajarcontador",results)
    }
  },
  modules: {
  }
})
