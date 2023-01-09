import { Component } from '@angular/core';
interface Form {
  name: string,
  dni: number,
  ec: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = {
    name: 'Simon',
    dni: 912345678,
    ec: 'casado',
  };

  usuario!: object;

  onSubmit(values: any): void {
    this.usuario = values;
    console.log(this.usuario);
  };
}
