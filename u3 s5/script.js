const form = document.querySelector('#miformulario');
form.addEventListener('submit', Procesar);

function Procesar(e){
    e.preventDefault();

    //Obtencion de valores
    const nombre = document.querySelector('#nombre').value;
    console.log('nombre: ',nombre);
    const horas = parseInt(document.querySelector('#numeroHoras').value);
    console.log('horas: ',horas);
    const annos = parseInt(document.querySelector('#numeroAnnos').value);
    console.log('años: ',annos);
    let cate = document.querySelector('input[name="Cat"]:checked').value;
    console.log('valor categoria: ',cate);

    //Usando valores
    let porcentaje;
    if(annos <= 3){
        porcentaje = 15;
    }else if(annos <= 7){
        porcentaje = 20;
    }else if(annos <= 12){
        porcentaje = 30;
    }else{
        porcentaje = 35;
    }
    console.log('porcentaje dependiendo de los años: ',porcentaje);

    let sueldoB = horas*cate;
    console.log('sueldo básico: ',sueldoB);
    let bono = (sueldoB*porcentaje)/100;
    console.log('bono: ',bono);
    let sueldoN = (sueldoB + bono)*80/100;
    console.log('sueldo neto: ',sueldoN);

    //Insertar texto
    let rpta = document.querySelector('#resultado');
    rpta.textContent = `Señor(a) ${nombre} su sueldo básico es ${sueldoB} , su BONIFICACIÓN POR AÑOS DE SERVICIO es: ${bono} y su SUELDO NETO es: ${sueldoN}`;
}