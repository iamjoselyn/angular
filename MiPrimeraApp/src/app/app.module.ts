import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
