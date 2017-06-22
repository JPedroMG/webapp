import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //two way data bindig
import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { routing, appRoutingProviders } from './app.routing';

import { ContactoComponent} from './contacto/contacto.component';
import { HomeComponent} from './home/home.component';
import { Probando123Component } from './probando123/probando123.component';
import { ConversorPippe } from './pippes/conversor.pippe';
import { CochesComponent } from './coches/coches.component'

@NgModule({
  declarations: [ // todo lo que tenga que ver con directivas, pippes y componentes
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    Probando123Component,
    ConversorPippe,
    CochesComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
