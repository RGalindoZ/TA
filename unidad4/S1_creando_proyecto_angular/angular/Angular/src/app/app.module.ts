import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TituloComponent } from './titulo/titulo.component';
import { ContentComponent } from './content/content.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorTitleComponent } from './calculator-title/calculator-title.component';
import { CalculatorButtonComponent } from './calculator-button/calculator-button.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CalculadoraPushButtonDirective } from './calculadora-push-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavbarComponent,
    TituloComponent,
    ContentComponent,
    CalculadoraComponent,
    CalculatorInputComponent,
    CalculatorTitleComponent,
    CalculatorButtonComponent,
    CalculatorResultComponent,
    CalculatorFormComponent,
    CalculadoraPushButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
