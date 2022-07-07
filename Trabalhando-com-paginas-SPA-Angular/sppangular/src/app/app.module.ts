// É preciso importar a classe aqui se quiser que o angular reconheça sua existência
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar'; // Menu
import {MatIconModule} from '@angular/material/icon'; // Icon



@NgModule({
  // Declarations é usado para adicionar um modulo local / criado localmente
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // Imports é usado para adicionar um módulo externo
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
