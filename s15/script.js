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

function P1(){
    document.querySelector('#R1').innerHTML= " ";
    let nombre = prompt('Ingrese el nombre del trabajador');
    if(!VL(nombre)){return false};
    let sueldo = +prompt('Ingrese el sueldo básico del trabajador');
    if(!VN(sueldo)){return false};
    sueldo = +(sueldo.toFixed(2));
    let hijos = +prompt('Ingrese el número de hijos del trabajador');
    if(!VNE(hijos)){return false};
    let bono = 0;
    //let tb;
    if(hijos > 0){
        bono = (sueldo*7)/100;
        sueldo = sueldo + bono;
        //tb = document.createTextNode(`Señor(a) ${nombre}. Usted CUENTA con una BONIFICACIÓN de S/ ${bono} `); 
        document.getElementById("R1").textContent = `Señor(a) ${nombre}. Usted CUENTA con una BONIFICACIÓN de S/ ${bono} y su sueldo es de S/ ${sueldo} .`;
        //document.getElementById("R1").textContent = `a`;
    };
    if(bono === 0){
        //tb = document.createTextNode(`Señor(a) ${nombre}. Usted NO CUENTA con BONIFICACIÓN `); 
        document.getElementById("R1").textContent = `Señor(a) ${nombre}. Usted NO CUENTA con BONIFICACIÓN y su sueldo es de S/ ${sueldo}.`;
    };
};

function P2(){
    document.querySelector('#R2').innerHTML= " ";
    let num = +prompt('Ingrese un número');
    if(!VN(num)){return false};
    num = +(num.toFixed(2));
    if(num > 500){
        let num1 = (num*18)/100;
        num = `El 18% de ${num} es : ${num1}`
    }
    else if(num === 500){
        num = `El número ingresado debe ser mayor a 500. Evidentemente 500 no lo es.`
    }
    else{num = `El ${num} es menor que 500`};
    document.getElementById("R2").textContent = `Respuesta: ${num}`;
};

function P3(){
    document.querySelector('#R3').innerHTML= " ";
    let num = +prompt('Ingrese un número natural entero');
    if(!VNEN(num)){return false};
    let fact = 1;
    if(num !== 0){
        for(a = 1 ; a <= num ; a++){
            fact = fact * a;
            console.log(fact);
        }
    }
    else{fact = 1};
    document.querySelector('#R3').innerHTML= `Respuesta: <b>${num}!</b> = ${fact}`
};

function P4(){
    document.querySelector('#R4').innerHTML= " ";
    let imp = +prompt('Ingrese el importe de la compra');
    if(!VN(imp)){return false};
    imp = +(imp.toFixed(2));
    let des;
    if(imp >= 150){
        des = (imp*12)/100;
        imp = imp - des
        document.getElementById("R4").textContent = `Respuesta: Tiene un DESCUENTO de S/ ${des} y el IMPORTE FINAL es de S/ ${imp} .`;
    }
    else{document.querySelector('#R4').innerHTML= `Respuesta: El IMPORTE FINAL es de S/ ${imp} .`}
};

function P5(){
    document.querySelector('#R5').innerHTML= " ";
    let nombre = prompt('Ingrese el nombre del alumno');
    let ep = +prompt('Ingrese la nota de su EXAMEN PARCIAL');
    if(!VNE(ep)){return false};
    let ef = +prompt('Ingrese la nota de su EXAMEN FINAL');
    if(!VNE(ef)){return false};
    let pp = +prompt('Ingrese la nota de su PROMEDIO DE PRÁCTICAS');
    if(!VNE(pp)){return false};
    let pf = ((ep*1)/4) + ((ef*2)/4) + ((pp*1)/4);
    if(pf <= 10){
        document.querySelector('#R5').innerHTML= `Respuesta: El ALUMNO: ${nombre} está DESAPROBADO.`
    }
    else{document.querySelector('#R5').innerHTML= `Respuesta: El ALUMNO: ${nombre} está APROBADO con un PROMEDIO FINAL DE ${pf}.`};
};