let pagina = 1;
let pokemons = '';
let lastPokemon;


// Creamos el observador
let observador = new IntersectionObserver((entradas, observador) => {

	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			pagina++;
			getPokemon();
		}
	});
}, {
	rootMargin: '0px 0px 200px 0px',
	threshold: 1.0
});

const getPokemon = async(id) => {
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        /* Validación de respuesta */
        if(pokemon.status === 200){			
				pokemons += `
					<div class="pokemon">
						<img class="poster" src="${pokemon.data.sprites.front_default}">
						<h3 class="titulo">${pokemon.data.name}</h3>
					</div>
				`;

			document.getElementById('contenedor').innerHTML = pokemons;

			

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('El pokemon que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}
    } catch (error) {
       console.log('error: ' + error ) 
    }
    
}

function getPokemons(number) {
    for (let i = 0; i <= number; i++) {
        getPokemon(i)
        
    }
}

getPokemons(100);

