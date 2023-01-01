import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  titulo = "CALCULADORA";
  operandoA!: number;
  operandoB!: number;
  resultado!: number;
  onSumar():void{
    this.resultado = this.operandoA + this.operandoB
  }
}
