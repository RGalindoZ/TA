//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado. 
// Ejemplo: "hola a todos" => "Hola A Todos"

let frase = "hola a todos" // "Hola a todos"

function capitalizar(cadena){ //"hola a todos"
    let array = cadena.split(" ") // ["hola", "a", "todos"]
    let cadenaCapitalizada = []
    for(const index in array){
        cadenaCapitalizada.push((array[index].charAt(0).toUpperCase() + array[index].slice(1))) // h   a   t
    }
    return cadenaCapitalizada.join(" ")
}

//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

let objeto = {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""};

//Hecho por mi
function verificar(objeto){
    let propiedades = Object.getOwnPropertyNames(objeto);
    propiedades.forEach(prop => {
    let valor = objeto[prop];
    console.log(valor);
    if(valor === ""){  
       valor = prompt(`Ingrese su ${prop} `);
       objeto[prop] = valor; 
    }
    })
    return objeto;
}

//Hecho por el profesor
function verificarYLlenar(objeto) {
    for(const index in objeto) {
        if (objeto[index] === "") {
            objeto[index] = prompt(`El campo ${index} está vacío, por favor llenalo: `)
        }
    }
    return objeto
}

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.

//4. Te enviaron una base de datos de usuarios:

// let users = [
//     {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
//     {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
//     {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
//     {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
//     {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
//     {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
// ]

//Hecho por mi
function verificacion(array){
    for(let obj in array){
        console.log(array[obj]);
        verificarYLlenar(array[obj]);
    }
    return array;
}

//Hecho por el profesor ----------------> comentado porque sino no puedo usar la pag XD
// for(const index in users){
//     verificarYLlenar(users[index])
// }

// console.log(users)

// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.

//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.

function ordenar(array, enbase){
    for(let obj in array){
        let propiedades = Object.getOwnPropertyNames(array[obj]);
        if (propiedades.includes(enbase)){
            if (enbase === "edad"){
                return users.sort((a,b) => a[enbase]-b[enbase])
            } else {
                return users.sort((a,b) => a[enbase].localeCompare(b[enbase]))
            }
        } else {
            return `Debes ingresar un argumento valido!    ${propiedades}`
        }
    }
}


//Hecho por el profesor
// function ordenar(objeto) {
//     objeto.sort((a, b) => a.edad - b.edad)
//     return objeto
// }

    let users = [
    {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
    {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:

// Ejemplo: "Andres Soto tiene 28 años y es profesor"

// for(const index in users){
//     let nombre = users[index].nombre
//     let apellido = users[index].apellido
//     let edad = users[index].edad
//     let profesion = users[index].profesion

//     let frase = `${nombre} ${apellido} tiene ${edad} años y es ${profesion}`
//     //let frase = nombre + " " + apellido + " tiene " + edad + " años y es " + profesion
//     document.write(frase)
//     document.write("<br>")
// }

//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista ordenada.

function ordenar2(array, enbase){
    for(let obj in array){
        let propiedades = Object.getOwnPropertyNames(array[obj]);
        if (propiedades.includes(enbase)){
            if (enbase === "edad"){
                return users.sort((a,b) => a[enbase]-b[enbase])
            } else {
                return users.sort((a,b) => a[enbase].localeCompare(b[enbase]))
            }
        } else {
            return `Debes ingresar un argumento valido!    ${propiedades}`
        }
    }
}

// Hecho por el profesor
// function ordenar(parametro){
//     if (parametro === "edad"){
//         return users.sort((a,b) => a[parametro]-b[parametro])
//     } else {
//         return users.sort((a,b) => a[parametro].localeCompare(b[parametro]))
//     }
// }

//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"

const root = document.getElementById('root');
const boton = document.createElement('button');
boton.textContent ='Aceptar';
root.append(boton);

boton.addEventListener('click',() => {
    alert('De acuerdo!')
})


//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.

boton.addEventListener('mouseover', () => {
    boton.style.display ='none';
    // boton1.style.display ='inline-block'
})

// const divboton = document.getElementById('boton1')
// const boton1 = document.createElement('button');
// boton1.textContent ='Aceptar';
// boton1.style.display ='none';
// divboton.append(boton);

// boton1.addEventListener('mouseover',() => {
//     alert('De acuerdo!')
// })

// boton.addEventListener('mouseover', () => {
//     boton.style.display ='inline-block';
// })