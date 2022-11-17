//Verificar si es número entero natural
function VNEN(a){
    if(Number.isInteger(a) && a >= 0){
        return true
    }
    else{
        alert('Ingrese un número natural entero por favor')
        return false
    }
}


//Verificar si es número entero
function VNE(a){
    if(Number.isInteger(a)){
        return true
    }
    else{
        alert('Ingrese un número entero por favor')
        return false
    }
}

//Verificar si es número
function VN(a){
    if(!isNaN(a)){
        return true
    }
    else{
        alert('Ingrese un número por favor')
        return false
    }
}

//Verificar si no es número
function VL(a){
    if(isNaN(a)){
        return true
    }
    else{
        alert('Ingrese un nombre por favor')
        return false
    }
}

//PROBLEMA 1
function P1(){
    document.querySelector('#R1').innerHTML= " ";
    let num1 = +prompt('Ingrese el PRIMER número de la operación');
    if(!VN(num1)){return false};
    let num2 = +prompt('Ingrese el SEGUNDO número de la operación');
    if(!VN(num2)){return false};

    //OPERACIONES
    let multipli = function(x , y){
        return x*y
    };
    let expon = function(x , y){
        return Math.pow(x , y)
    };
    let suma = (x , y) => {return x+y};
    let resta = (x , y) => {return x-y};

    //RESULTADO MULTIPLICACION
    let result = multipli(num1,num2);
    var text = document.createTextNode(`El producto es: ${result}  ||  `)
    document.getElementById("R1").appendChild(text);
    
    //RESULTADO POTENCIA
    result = expon(num1,num2);
    text = document.createTextNode(`${num1} elevado a ${num2} es : ${result}  ||  `);
    document.getElementById("R1").appendChild(text);

    //RESULTADO SUMA
    result = suma(num1,num2);
    text = document.createTextNode(`La suma de ${num1} y ${num2} es : ${result}  ||  `);
    document.getElementById("R1").appendChild(text);

    //RESULTADO RESTA
    result = resta(num1,num2);
    text = document.createTextNode(`Si se le resta ${num2} a ${num1} es : ${result}  ||  `);
    document.getElementById("R1").appendChild(text);
};

//PROBLEMA 2
function CtF(){
    document.querySelector('#R2').innerHTML= " ";
    let gc = +prompt('Ingrese una temperatura en Celsius');
    if(!VN(gc)){return false};
    
    let pasaraFarenheit = (grado) => {return Farenheit = grado *  1.8 + 32};
    let result = pasaraFarenheit(gc);
    result = +(result.toFixed(2));
    text = document.createTextNode(`${gc}°C son ${result}°F .`);
    document.getElementById("R2").appendChild(text);
};

function FtC(){
    document.querySelector('#R2').innerHTML= " ";
    let gf = +prompt('Ingrese una temperatura en Farenheit');
    if(!VN(gf)){return false};
    
    let pasaraCelsius = (grado) => {return Celsius = (grado - 32)*5/9};
    let result = pasaraCelsius(gf);
    result = +(result.toFixed(2));
    text = document.createTextNode(`${gf}°F son ${result}°C .`);
    document.getElementById("R2").appendChild(text);
};

//PROBLEMA 3
function P3(){
    document.querySelector('#R3').innerHTML= " ";
    let num1 = +prompt('Ingrese el PRIMER número de la operación');
    if(!VN(num1)){return false};
    let num2 = +prompt('Ingrese el SEGUNDO número de la operación');
    if(!VN(num2)){return false};

    let suma = (x , y) => {return x+y};
    result = suma(num1,num2);
    document.querySelector('#R3').textContent= `La suma de ${num1} y ${num2} es : ${result}`
};