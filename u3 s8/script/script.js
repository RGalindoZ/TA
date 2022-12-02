// Agregar fecha de nacimiento y genero
//Obtencion de inputs
const inputs = $('input');
console.log(inputs);
const FirstName = inputs[0];
const LastName = inputs[1];
const Email = inputs[2];
const Phone = inputs[3];
const TextArea = $('#TextArea')[0];

//Expresiones regulares
var expFirstName = /^([A-Z])[a-z]{1,15}$/;
var expLastName = expFirstName;
var expEmail = /^(([a-zA-Z]{1})([A-Za-z0-9_.]{1,19}))@(([a-z]{3,9}.){1,3})com$/;
var expPhone = /^([9]{1})([0-9]{8})$/;


$('.btn').click(function(e){
    e.preventDefault();
    
    inputs.each(function(use){
        let valor = $(this).val();
        console.log(valor);
        let id = $(this).attr('id');
        console.log(id);
        let exp = window['exp'+id];
        console.log(exp);
        if(exp.test(valor)){
            if($(this).hasClass('is-invalid')){
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            } else {
                $(this).addClass('is-valid');
            }
        } else if(exp.test(valor) === false || valor === ""){
            if($(this).hasClass('is-valid')){
                $(this).removeClass('is-valid');
                $(this).addClass('is-invalid');
            } else {
                $(this).addClass('is-invalid');
            }
        }
    });
});