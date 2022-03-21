const app=Vue.createApp({
    data() {
      return {
        firstname: "Oscar",
        middlename:"Ramirez",
        email:"17161210@itoaxaca.edu.mx",
        picture:"https://randomuser.me/api/portraits/men/36.jpg",
        male:"masculino"
    };
    },
    methods:{
        async generatePeople(){
            const res=await fetch("https://randomuser.me/api");
            const{
                results
            }=await res.json()
            console.log(results)
            this.firstname=results[0].name.first
            this.middlename=results[0].name.last
            this.email=results[0].email
            this.male=results[0].gender
            this.picture=results[0].picture.large
        }
    }
  })
  
  app.mount("#app");
