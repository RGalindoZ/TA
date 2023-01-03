import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputs: Array<any> = [
    {nombre: 'input1', orden: 'primer', valor: 0, name:'entrada1'},
    {nombre: 'input2', orden: 'segundo', valor: 0, name:'entrada2'}
  ]

  operaciones = [
    {nombre:'Elija una opción', valor: 0},
    {nombre:'Sumar', valor: 1},
    {nombre:'Restar', valor: 2},
    {nombre:'Multiplicar', valor: 3},
    {nombre:'Dividir', valor: 4},
  ];

  form = new FormGroup({
    entrada1: new FormControl(0),
    entrada2: new FormControl(0),
    resultado: new FormControl(0),
    operacion: new FormControl(this.operaciones[0])
  });

  estado!: boolean;
  resultado: any;

  mono(){
    let operacion = this.form.value.operacion?.valor;
    let numero1 = this.form.value.entrada1!;
    let numero2 = this.form.value.entrada2!;
    let resultado:any = this.form.value.resultado;
    if(operacion == 0){
      this.estado = false;
      resultado = '(No eligió operación)'
    } else{
      this.estado = true;
    }
    if(operacion == 1 ){
      resultado = numero1 + numero2;
    } else if(operacion == 2){
      resultado = numero1 - numero2;
    } else if(operacion == 3){
      resultado = numero1 * numero2;
    } else if(operacion == 4){
      resultado = numero1 / numero2;
    };
    this.form.value.resultado = resultado;
  };
}