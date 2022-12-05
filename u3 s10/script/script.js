class Alumno{
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    promedio(){
        return (((this.nota1*15)/100)+((this.nota2*20)/100)+((this.nota3*25)/100)+((this.nota4*40)/100))
    }
    condicion(){
        if(this.promedio() >= 12){
            return 'Condición: Aprobado';
        } else {
            return 'Condición: Desaprobado';
        }
    }
    obsequio(){
        if(this.promedio() > 17){
            return 'Se le obsequiara una Mochila';
        } else{
            return 'No merece obsequio'
        }
    }
}
let alumno = new Alumno('1','Sebastian','10','18','18','20');
console.log(alumno);
console.log(alumno.promedio());
console.log(alumno.condicion());
console.log(alumno.obsequio());