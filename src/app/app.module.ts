import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule,Route } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { APP_ROUTING } from './app.routesModule';
import { HomeComponent } from './componentes/home/home.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuEncabezadoComponent } from './componentes/menu-encabezado/menu-encabezado.component';
import { JuegoServiceService } from './servicios/juego-service.service';

import { MiJuegoComponent } from './componentes/mi-juego/mi-juego.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { BestScoreManager } from './app.storage.service';


export const EXAMPLE_COMPONENTS = {
  'autocomplete-display': {
    title: 'Display value autocomplete',
    component: HomeComponent,
    additionalFiles: null,
    selectorName: null
  },
};



@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    JuegosComponent,
    PaginaNoEncontradaComponent,
    HomeComponent,
    CrearCuentaComponent,
    QuiensoyComponent,
    AyudaComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    MenuEncabezadoComponent,
    MiJuegoComponent,
    ListadoComponent,
    AnagramaComponent,
    ListadoDeResultadosComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
    APP_ROUTING
  ],

  
  providers: [ JuegoServiceService,BestScoreManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
