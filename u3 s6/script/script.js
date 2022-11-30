const form = document.querySelector('#miformulario');
form.addEventListener('submit', Procesar);
//iconos success y error
let success = '<i class="fa fa-check-circle fa-lg text-success h-100" aria-hidden="true"></i>';
let error = '<i class="fa fa-times-circle fa-lg text-danger h-100" aria-hidden="true"></i>';

//Obtencion de inputs
const usuario = document.querySelector('#usuario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const numero = document.querySelector('#numero');
const contrasena = document.querySelector('#contrasena');
const repetircontrasena = document.querySelector('#rcontrasena');

//funcion onchange
function fonchange(){
    let div = repetircontrasena.closest('.torret'); //div donde esta el input
    let status = div.querySelector('.status');
    let lista = div.className; //clases del div
    let x = contrasena.value;
    let y = repetircontrasena.value;
    if(x === y){
        if(lista.includes('error')){
            div.classList.replace('error', 'success');
        } else{
            div.classList.add('success');
        }
        status.innerHTML = success;
    } else if(x !== y){
        if(lista.includes('success')){
            div.classList.replace('success', 'error');
        } else{
            div.classList.add('error');
        }
        status.innerHTML = error;
    }
}

//Expresiones regulares
var exptest = 'mono pendejo';
var expusuario = /^([0-9A-Za-z\_\-]{4,16})$/;
var expnombre = /^([A-Z]([a-z]{1,10})\s){1,5}([A-Z]([a-z]{1,10}))$/;
var expemail = /^(([a-zA-Z]{1})([A-Za-z0-9_]{1,19}))@(([a-z]{3,9}.){1,2})[a-z]{2,3}$/;
var expnumero = /^([9]{1})([0-9]{8})$/;
var expcontrasena = /^[\x20-\x7E]{4,16}$/;

function Procesar(e){
    e.preventDefault();
    let obj = [];

    //aun no usado
    //const estado = document.querySelector('#estado'); // resultado debajo del boton

    //metiendolos a un array
    obj.push(usuario);
    obj.push(nombre);
    obj.push(email);
    obj.push(numero);
    obj.push(contrasena);
    console.log(obj);

    //Trabajando con los valores
    obj.forEach(use => {
        console.log('-----------------O----------------')
        let div = use.closest('.torret'); // div donde esta ese input
        console.log(div);
        let status = div.querySelector('.status');
        console.log(status)
        let lista = div.className; // div clases
        console.log(lista);
        let id = use.id; // id del input
        console.log('valor: '+use.value);
        console.log('id: '+id);
        let valor = use.value; // valor del input
        let exp = window['exp'+id];
        console.log('expresion: '+exp);
        console.log('tipo: '+typeof id);

        //Añadir o quitar clase
        if(exp.test(valor)){
            if(lista.includes('error')){
                div.classList.replace('error', 'success');
            } else{
                div.classList.add('success');
            }
            status.innerHTML = success;
            console.log('estado: aceptada');
        } else if(exp.test(valor) === false || valor === ""){
            if(lista.includes('success')){
                div.classList.replace('success', 'error');
            } else{
                div.classList.add('error');
            }
            status.innerHTML = error;
            console.log('estado: denegado');
        }
    });
}