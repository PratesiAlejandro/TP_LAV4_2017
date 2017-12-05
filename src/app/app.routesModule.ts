import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/componentes/login/login.component';
import { JuegosComponent } from '../app/componentes/juegos/juegos.component';
import { HomeComponent } from '../app/componentes/home/home.component';
import { CrearCuentaComponent } from '../app/componentes/crear-cuenta/crear-cuenta.component';
import { QuiensoyComponent } from '../app/componentes/quiensoy/quiensoy.component';
import { AyudaComponent } from '../app/componentes/ayuda/ayuda.component';
import { MenuEncabezadoComponent } from '../app/componentes/menu-encabezado/menu-encabezado.component';
import { AgilidadAritmeticaComponent } from '../app/componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { AdivinaElNumeroComponent } from '../app/componentes/adivina-el-numero/adivina-el-numero.component';
import { MiJuegoComponent } from './componentes/mi-juego/mi-juego.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { PiedraPapelTijeraListadoComponent } from './componentes/piedra-papel-tijera-listado/piedra-papel-tijera-listado.component';
import { AnagramaMasListadoComponent } from './componentes/anagrama-mas-listado/anagrama-mas-listado.component';
import { HomeJuegosComponent } from './componentes/home-juegos/home-juegos.component';
import { PaginaNoEncontradaComponent } from '../app/componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { MiJuegoListadoComponent } from './componentes/mi-juego-listado/mi-juego-listado.component';


const APP_ROUTES: Routes = [ 
    {path: 'Login' ,component:LoginComponent },
    {path: 'Home' ,component: HomeComponent },
    {path: 'Registrarse' , component: CrearCuentaComponent },
    {path: 'quiensoy' , component: QuiensoyComponent },
    {path: 'encabezado',component: MenuEncabezadoComponent},
    {path: 'Ayuda' , component: AyudaComponent },
    {path: '404' ,component: PaginaNoEncontradaComponent },
    {path: 'Juegos' ,component: JuegosComponent ,
      children:
         [ {path: 'AdivinaListado' , component: AdivinaMasListadoComponent}, 
           {path: 'Listado' , component: ListadoComponent },
            {path: 'PPTListado' , component: PiedraPapelTijeraListadoComponent },
           {path: 'Mijuego' , component: MiJuegoListadoComponent },
            {path: 'PPT' , component: PiedraPapelTijeraComponent },
             {path: 'Anagrama' , component: AnagramaMasListadoComponent },
           {path: 'AgilidadListado' , component: AgilidadMasListadoComponent }]
          
     },

    { path: '',   redirectTo: '/Login', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
