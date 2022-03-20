const fetchPokemon=(pokemon) =>{
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
    fetch(url).then((res)=>{
        if(res.status!=200){
            pokeimagen("https://imagenes.t13.cl/images/original/2016/03/1459198726-meme.jpg?width=976&height=549&position=top");
        }if(res.status==404){
            alert("No existe el pokemon");
        }
        return res.json();
    }).then((data)=>{
        // console.log(data);
        let pokeimg =data.sprites.front_default;
        let pokename=data.forms[0].name;
        let poketipo=data.types[0].type.name;
        let pokeestadisticas=[];
        for(var i=0;i<data.stats.length;i++){
            pokeestadisticas.push(data.stats[i].stat.name+"  "+data.stats[i].effort);
        }
        let pokemovimientos=[];
        for(var i=0;i<10;i++){
            if(data.moves[i]!=null){
                pokemovimientos.push(data.moves[i].move.name);
            }        
        } 
        let pokearray =[pokename,poketipo,pokeimg,pokeestadisticas,pokemovimientos];

        pokeinfo(pokearray);
    })
}
const pokeinfo=(pokemon_array)=>{
    const pokename= document.getElementById("name");
    pokename.textContent=pokemon_array[0];
    const poketipo= document.getElementById("tipo");
    poketipo.textContent=pokemon_array[1];
    const pokeimg = document.getElementById("pokeimg");
    pokeimg.src=pokemon_array[2];
    const pokeestadisticas = document.getElementById("estadisticas");
    pokeestadisticas.textContent=pokemon_array[3];
    const pokemovimientos = document.getElementById("movimientos");
    pokemovimientos.textContent=pokemon_array[4];    
}
const buscar_pokemon=()=>{
    const pokemon = document.getElementById("pokename");
    fetchPokemon(pokemon.value.toLowerCase() );
}