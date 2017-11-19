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
import { PaginaNoEncontradaComponent } from '../app/componentes/pagina-no-encontrada/pagina-no-encontrada.component';

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
         [ {path: 'Adivina' , component: AdivinaElNumeroComponent}, 
           {path: 'Listado' , component: ListadoComponent },
           {path: 'Mijuego' , component: MiJuegoComponent },
             {path: 'Anagrama' , component: AnagramaComponent },
           {path: 'Agilidad' , component: AgilidadAritmeticaComponent }]
          
     },

    { path: '',   redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
