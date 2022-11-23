console.log('El orden que yo recomiendo es : | 1 y/o 2 y/o 3 || 4 || 6 || 7 || 5 (una o varias veces) || 8 ||')

let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.

function sortdamagePokemons(){
    pokemons.sort((a,b)  => a.base_damage - b.base_damage);
    console.log('Lista de los pokemones ordenados:')
    console.table(pokemons);
}

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function sortPokemons(argument){
    let validInput = ["type", "base_damage", "base_hp", "speed"];

    if(validInput.includes(argument)){
        if(argument === "type"){
            console.table((pokemons.sort((a,b) => a[argument].localeCompare(b[argument]))))
        } else{
            console.table((pokemons.sort((a,b) => a[argument] - b[argument])))
        }
    } else {
        console.log("Debes ingresar un argumento válido")
    }
}

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
function filterPokemons(argument){
    let filterPokemons = pokemons.filter(pokemon => pokemon.type === argument);
    let result = filterPokemons.length === 0 ? "Tipo de pokemon no encontrado" : filterPokemons;
    console.log(`Los pokemos del TIPO ${argument} son:`)
    console.table(result)
}

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
    let listPokemons = [];
    let PokemonMaster = {id: 452, name: "Propy", created_date: "22 de Noviembre del 2022", pokemon: listPokemons};
function pokemonmaster(){
    console.table(PokemonMaster);
    console.log('Arreglo de pokemon(es) del MAESTRO POKEMON');
    console.log(listPokemons);
}

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

function agreePokemon(){
    let number = Math.floor(Math.random()*pokemons.length);
    console.log(`ÍNDICE obtenido aleatoriamente: ${number}`);
    listPokemons.push(pokemons[number]);
    console.log("Pokemones del MAESTRO POKEMON: ")
    console.table(listPokemons);
    console.log("Pokemones disponibles: ")
    console.table(pokemons);
}

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 
function agreeminAndMaxdamage(){
    //verificar si el maestro pokemon tiene pokemones
    if(listPokemons.length === 0){
        console.error('Realiza primero el número 5');
        return false;
    }
    //funcion
    pokemons.forEach(pokemon => {
        let minnum = Math.floor(Math.random()*2+1);
        let maxnum = Math.floor(Math.random()*3+3);
        pokemon.min_damage = minnum;
        pokemon.max_damage = maxnum;
    });
    console.log('Listado de Pokemones disponibles con su min y max daño: ')
    console.table(pokemons);
}

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
 
function agreeMaindamage(){
    //verificar si el maestro pokemon tiene pokemones
    if(listPokemons.length === 0){
        console.error('Realiza primero el número 5');
        return false;
    }
    //verificar si se hizo el número 6
    if(!listPokemons[0].hasOwnProperty('min_damage')){
        console.error('Realiza primero el número 6');
        return false;
    }
    //funcion
    pokemons.forEach(pokemon => {
        let rangdamage = pokemon.max_damage - pokemon.min_damage;
        let rannum = Math.floor(Math.random()*rangdamage+pokemon.min_damage);
        
        pokemon.daño = pokemon.base_damage + rannum;
        console.log(`NÚMERO aleatorio entre min_damage y max_damage: ${rannum}`);
    });
    console.log('Listado de Pokemones con su daño medio calculado:')
    console.table(pokemons);
}

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
 
function ordenarPokemons(){
    listPokemons.forEach(a => {
        a.avgdamage = a.base_damage+a.max_damage;
    });
    listPokemons.sort((a,b) => b.avgdamage - a.avgdamage);
    listPokemons.forEach(a => {
        delete a.avgdamage;
    });
    console.log('Lista de pokemones de mayor damage a menor')
    console.table(listPokemons)
}

function vaciar(a){
    listPokemons = [];
    console.log('Fueron buenos en tu equipo, pero decidiste dejarlos ir.');
    console.log(listPokemons);
}