const form = document.querySelector('#miformulario');
form.addEventListener('submit', Procesar);
// //iconos success y error
// let success = '<i class="fa fa-check-circle fa-lg text-success h-100" aria-hidden="true"></i>';
// let error = '<i class="fa fa-times-circle fa-lg text-danger h-100" aria-hidden="true"></i>';

//Obtencion de inputs
const FirstName = document.querySelector('#FirstName');
const LastName = document.querySelector('#LastName');
const Email = document.querySelector('#Email');
const Phone = document.querySelector('#Phone');
const TextArea = document.querySelector('#TextArea');

//Expresiones regulares
var expFirstName = /^([A-Z])[a-z]{1,15}$/;
var expLastName = expFirstName;
var expEmail = /^(([a-zA-Z]{1})([A-Za-z0-9_]{1,19}))@(([a-z]{3,9}.){1,2})com$/;
var expPhone = /^([9]{1})([0-9]{8})$/;

//Funcion
function Procesar(e){
    e.preventDefault();
    let obj = [];

    //aun no usado
    //const estado = document.querySelector('#estado'); // resultado debajo del boton

    //metiendolos a un array
    obj.push(FirstName);
    obj.push(LastName);
    obj.push(Email);
    obj.push(Phone);
    console.log(obj);

    //Trabajando con los valores
    obj.forEach(use => {
        console.log('-----------------O----------------')
        let lista = use.className; // div clases
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
            if(lista.includes('is-invalid')){
                use.classList.replace('is-invalid', 'is-valid');
            } else{
                use.classList.add('is-valid');
            }
            console.log('estado: aceptada');
        } else if(exp.test(valor) === false || valor === ""){
            if(lista.includes('is-valid')){
                use.classList.replace('is-valid', 'is-invalid');
            } else{
                use.classList.add('is-invalid');
            }
            console.log('estado: denegado');
        }
    });
}