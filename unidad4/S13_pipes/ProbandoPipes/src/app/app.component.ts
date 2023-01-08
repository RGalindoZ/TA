import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fechaahora: Date = new Date();
  fechainput!: Date;
  fecharespuesta!: string;

  currencyselect!: string;
  moneda!: number;
  texto!: string;
  title = 'PruebaPipes';
  fecha: string = '6.15.1970, 13:10:05'
  frase: string = 'mono wbn';

  mono(a:Date){
    let respuesta: string = '';
    let mili:any = new Date(a);
    let ahora:any = this.fechaahora;
    let diff = Math.abs(mili - ahora);

    // Definiendo diferentes medidas de tiempo

    let diffseg = Math.floor(diff/1000);
    let diffmin = Math.floor(diffseg/60);
    let diffhor = Math.floor(diffmin/60);
    let diffday = Math.floor(diffhor/24);
    let diffmon = Math.floor(diffday/30);
    let diffyea = Math.floor(diffmon/12);
    console.log('fecha ingresada en milisegundos: '+mili);
    console.log('fecha de este instante en milisegundos: '+ahora);

    if(diffseg<60){
      if(diffseg == 1){
        respuesta = `A ${diffseg} seconds ago`;  
      } else{
        respuesta = `${diffseg} seconds ago`;
      }
    } else if(diffmin<60){
      if(diffmin == 1){
        respuesta = `A ${diffmin} minutes ago`;  
      } else{
        respuesta = `${diffmin} minutes ago`;
      }
    } else if(diffhor<24){
      if(diffhor == 1){
        respuesta = `A ${diffhor} hours ago`;  
      } else{
        respuesta = `${diffhor} hours ago`;
      }
    } else if(diffday<30){
      if(diffday == 1){
        respuesta = `A ${diffday} day ago`;  
      } else{
        respuesta = `${diffday} days ago`;
      }
    } else if(diffmon<12){
      if(diffmon == 1){
        respuesta = `A ${diffmon} month ago`;  
      } else{
        respuesta = `${diffmon} months ago`;
      }
    } else if(diffyea<3){
      if(diffyea == 1){
        respuesta = `A ${diffyea} year ago`;  
      } else{
        respuesta = `${diffyea} years ago`;
      }
    } else{
      respuesta = `on ${mili}`;
    };
    this.fecharespuesta = respuesta;
  }
}
