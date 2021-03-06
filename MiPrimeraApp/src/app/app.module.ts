import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { DecoradoresComponent } from './components/decoradores/decoradores.component';


@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    CalculadoraComponent,
    DecoradoresComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
