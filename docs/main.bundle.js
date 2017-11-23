webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOARD_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GAME_MODES; });
var BOARD_SIZE = 18;
var CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
var COLORS = {
    GAME_OVER: '#D24D57',
    FRUIT: '#EC644B',
    HEAD: '#336E7B',
    BODY: '#C8F7C5',
    BOARD: '#86B5BD',
    OBSTACLE: '#383522'
};
var GAME_MODES = {
    classic: 'Classic',
    no_walls: 'No Walls',
    obstacles: 'Obstacles'
};
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EXAMPLE_COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_pagina_no_encontrada_pagina_no_encontrada_component__ = __webpack_require__("../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routesModule__ = __webpack_require__("../../../../../src/app/app.routesModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_home_home_component__ = __webpack_require__("../../../../../src/app/componentes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_crear_cuenta_crear_cuenta_component__ = __webpack_require__("../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_quiensoy_quiensoy_component__ = __webpack_require__("../../../../../src/app/componentes/quiensoy/quiensoy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_ayuda_ayuda_component__ = __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_menu_encabezado_menu_encabezado_component__ = __webpack_require__("../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_mi_juego_mi_juego_component__ = __webpack_require__("../../../../../src/app/componentes/mi-juego/mi-juego.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_storage_service__ = __webpack_require__("../../../../../src/app/app.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


var EXAMPLE_COMPONENTS = {
    'autocomplete-display': {
        title: 'Display value autocomplete',
        component: __WEBPACK_IMPORTED_MODULE_9__componentes_home_home_component__["a" /* HomeComponent */],
        additionalFiles: null,
        selectorName: null
    },
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_7__componentes_pagina_no_encontrada_pagina_no_encontrada_component__["a" /* PaginaNoEncontradaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__componentes_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__componentes_crear_cuenta_crear_cuenta_component__["a" /* CrearCuentaComponent */],
            __WEBPACK_IMPORTED_MODULE_11__componentes_quiensoy_quiensoy_component__["a" /* QuiensoyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_ayuda_ayuda_component__["a" /* AyudaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_menu_encabezado_menu_encabezado_component__["a" /* MenuEncabezadoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_mi_juego_mi_juego_component__["a" /* MiJuegoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routesModule__["a" /* APP_ROUTING */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_21__app_storage_service__["a" /* BestScoreManager */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routesModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_componentes_home_home_component__ = __webpack_require__("../../../../../src/app/componentes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_componentes_crear_cuenta_crear_cuenta_component__ = __webpack_require__("../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_componentes_quiensoy_quiensoy_component__ = __webpack_require__("../../../../../src/app/componentes/quiensoy/quiensoy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_componentes_ayuda_ayuda_component__ = __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_componentes_menu_encabezado_menu_encabezado_component__ = __webpack_require__("../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_mi_juego_mi_juego_component__ = __webpack_require__("../../../../../src/app/componentes/mi-juego/mi-juego.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_componentes_pagina_no_encontrada_pagina_no_encontrada_component__ = __webpack_require__("../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.ts");














var APP_ROUTES = [
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_1__app_componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__app_componentes_home_home_component__["a" /* HomeComponent */] },
    { path: 'Registrarse', component: __WEBPACK_IMPORTED_MODULE_4__app_componentes_crear_cuenta_crear_cuenta_component__["a" /* CrearCuentaComponent */] },
    { path: 'quiensoy', component: __WEBPACK_IMPORTED_MODULE_5__app_componentes_quiensoy_quiensoy_component__["a" /* QuiensoyComponent */] },
    { path: 'encabezado', component: __WEBPACK_IMPORTED_MODULE_7__app_componentes_menu_encabezado_menu_encabezado_component__["a" /* MenuEncabezadoComponent */] },
    { path: 'Ayuda', component: __WEBPACK_IMPORTED_MODULE_6__app_componentes_ayuda_ayuda_component__["a" /* AyudaComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_13__app_componentes_pagina_no_encontrada_pagina_no_encontrada_component__["a" /* PaginaNoEncontradaComponent */] },
    { path: 'Juegos', component: __WEBPACK_IMPORTED_MODULE_2__app_componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_9__app_componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_11__componentes_listado_listado_component__["a" /* ListadoComponent */] },
            { path: 'Mijuego', component: __WEBPACK_IMPORTED_MODULE_10__componentes_mi_juego_mi_juego_component__["a" /* MiJuegoComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_12__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_8__app_componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] }]
    },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__app_componentes_pagina_no_encontrada_pagina_no_encontrada_component__["a" /* PaginaNoEncontradaComponent */] }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });
//# sourceMappingURL=app.routesModule.js.map

/***/ }),

/***/ "../../../../../src/app/app.storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestScoreManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BestScoreManager = (function () {
    function BestScoreManager() {
        this.ngxSnake = 'ngx_snake';
    }
    BestScoreManager.prototype.store = function (score) {
        localStorage.setItem(this.ngxSnake, JSON.stringify({ 'best_score': score }));
    };
    BestScoreManager.prototype.retrieve = function () {
        var storage = this.parse();
        if (!storage) {
            this.store(0);
            storage = this.parse();
        }
        return storage.best_score;
    };
    BestScoreManager.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxSnake));
    };
    return BestScoreManager;
}());
BestScoreManager = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], BestScoreManager);

//# sourceMappingURL=app.storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
var JuegoAgilidad = (function () {
    function JuegoAgilidad() {
    }
    return JuegoAgilidad;
}());

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, " Anagrama ", gano, jugador) || this;
        _this.palabraOrdenada = "";
        _this.palabraDesordenada = "";
        _this.palabraIngresada = "";
        _this.arrayDePalabras = [
            { ordenada: "Gato", desordenada: "toga" },
            { ordenada: "Halcon", desordenada: "loncha" },
            { ordenada: "Jirafa", desordenada: "fijara" },
            { ordenada: "Leon", desordenada: "loen" },
            { ordenada: "Luciernaga", desordenada: "neuralgica" },
            { ordenada: "Gorila", desordenada: "gloria" },
            { ordenada: "Tiburon", desordenada: "tribuno" },
            { ordenada: "Cebra", desordenada: "cebar" },
            { ordenada: "Lobo", desordenada: "bolo" },
            { ordenada: "Tigre", desordenada: "grite" },
            { ordenada: "Vaca", desordenada: "cava" },
            { ordenada: "Zorra", desordenada: "rozar" },
            { ordenada: "Pantera", desordenada: "atrapen" },
            { ordenada: "Mariposa", desordenada: "piaramos" },
            { ordenada: "Medusa", desordenada: "mudase" }
        ];
        return _this;
    }
    JuegoAnagrama.prototype.asignarPalabra = function () {
        var indice;
        indice = Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada = this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada = this.arrayDePalabras[indice]["ordenada"];
    };
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabraIngresada == this.palabraOrdenada) {
            this.gano = true;
            this.palabraOrdenada = "";
            this.palabraDesordenada = "";
            this.palabraIngresada = "";
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<body style=\"background-image: url('../assets/acertijo.jpg'); height: 100%;\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n    \n    </div>\n    <div class=\"col-sm-6\">\n      <div style=\"text-align:center\">\n  <div class=\"alert alert-dark\" role=\"alert\">\n    <h3>\n\n      <p class=\"font-italic font-weight-bold\" > {{nuevoJuego.nombre}}</p>\n    </h3>\n  </div>\n \n </div>\n<form name=\"juego\">\n<p class=\"font-italic font-weight-bold\" >Ingrese numero:</p>\n   <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:100%\"/>\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\n \n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\"> Nuevo número secreto</button></h2>\n \n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i> Esperando que ingrese un número</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3><p [hidden]=\"nuevoJuego.gano\" class=\"font-italic\"> Usted aún no gano</p> </h3>\n\n\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>\n\n    </div>\n    <div class=\"col-sm-3\">\n    \n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<!-- index.html -->\n\n<body style=\"background-image: url('../assets/agilidad.jpg'); height: 100%;\">\n<div class=\"row\">\n  <div class=\"col-sm-3\"></div>\n  <div class=\"col-sm-6\">\n\n<div class=\"alert alert-success\" role=\"alert\">\n\n  <div class=\"alert alert-dark\">\n    <strong>Agilidad</strong> \n  </div>\n\n\n\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Primer Numero</label>\n  <div class=\"col-10\">\n  \n    <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:100%\" readonly/>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-search-input\" class=\"col-2 col-form-label\">Operador</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:100%\" readonly/>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-email-input\" class=\"col-2 col-form-label\">Segundo Numero</label>\n  <div class=\"col-10\">\n    <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:100%\" readonly/>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <label for=\"example-email-input\" class=\"col-2 col-form-label\">Respuesta</label>\n  <div class=\"col-10\">\n   <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:100%\"/>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n \n  <div class=\"col-12\">\n     <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg btn-block\">Verificar {{Tiempo}} </button></h2>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n \n  <div class=\"col-12\">\n   <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg btn-block\">Nuevo</button></h2>\n  </div>\n</div>\n<div class=\"form-group row\">\n  <div class=\"col-12\">\n    <ul class=\"list-group\">\n<li> <h3><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h3> </li>\n  <li class=\"list-group-item list-group-item-success\" [hidden]=\"!nuevoJuego.gano\">Usted adivino el número</li>\n  <li class=\"list-group-item list-group-item-danger\" [hidden]=\"nuevoJuego.gano\">Usted aún no gano </li>\n</ul>\n   \n  </div>\n</div>\n\n</div>\n</div>\n<div class=\"col-sm-3\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nhtml{\r\n\r\nheight: 100%;\r\npadding: 10px;\r\n\r\n}\r\n\r\n\r\nbody{\r\n\r\nheight: 100%;\r\nmin-height: 100%;\r\npadding: 10px;\r\n\r\n}\r\n\r\nform {\r\n    border: 10px solid #2196F3;\r\n    padding: 10px;\r\n    min-height: 100%;\r\n    background:orange;\r\n}\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color:blue;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: red;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Anagrama</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js\"></script>\n</head>\n\n<body style=\"background-image: url('../assets/anagramafondo.jpg'); height: 100%;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n      </div>\n      <div class=\"col-sm-6\">\n        <br>\n        <div class=\"card bg-primary text-white\">\n          <div class=\"card-body\">\n            <h3>\n              <p class=\"font-italic font-weight-bold\"> {{nuevoJuego.nombre}}</p>\n            </h3>\n          </div>\n        </div>\n        <form name=\"juego\">\n          <h2><button *ngIf=\"ocultarComenzar\" (click)=\"generarPalabra()\" class=\"btn btn-info btn-block\"><p>Play <i class=\"fa fa-gamepad fa-2x\" aria-hidden=\"true\"></i> </p> </button></h2>\n          <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\" class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n          <h1>{{nuevoJuego.palabraDesordenada}} </h1>\n          <br />\n          <input [hidden]=\"ocultarVerificar\" [(ngModel)]=\"nuevoJuego.palabraIngresada\" placeholder=\"ingrese la solucion\" name=\"palabraOrdenadaa\"\n            type=\"text\" class=\"form-control\" style=\"width:100%\" />\n          <br />\n          <h2 [hidden]=\"ocultarVerificar\"><button *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-block btn-lg\">Verificar</button></h2>\n          <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\" class=\"btn btn-info btn-block\">Nuevo número secreto</button></h2>\n          <h3>\n            <p *ngIf=\"!ocultarVerificar\">\n              Esperando...\n              <i class=\"fa fa-refresh fa-spin fa-2x fa-fw text-danger\"></i>\n              <span class=\"sr-only\">Loading...</span></p>\n          </h3>\n          <div id=\"snackbar\">{{Mensajes}}</div>\n        </form>\n\n      </div>\n      <div class=\"col-sm-3\">\n\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaComponent = (function () {
    function AnagramaComponent() {
        this.ocultarComenzar = true;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.ocultarVerificar = true;
    }
    AnagramaComponent.prototype.generarPalabra = function () {
        this.nuevoJuego.asignarPalabra();
        this.contador = 0;
        this.ocultarVerificar = false;
        this.nuevoJuego.gano = false;
        this.Mensajes = "";
        this.ocultarComenzar = false;
    };
    AnagramaComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Sos un Genio!!!", true);
        }
        else {
            this.mensaje = "Ooops, casi lo lograste!";
            this.MostarMensaje(this.mensaje);
            this.nuevoJuego.palabraIngresada = "";
            this.nuevoJuego.palabraDesordenada = "";
        }
        console.info("Gano: ", this.nuevoJuego.gano);
        this.ocultarComenzar = true;
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            //modelo.ocultarVerificar=false;
        }, 3000);
        console.info("objeto", x);
    };
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnagramaComponent);

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/ayuda/ayuda.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/ayuda/ayuda.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-encabezado></app-menu-encabezado>\n<div class=\"container-fluid\">\n  <div class=\"col-lg-4\">\n    <h3>\n      <p>Preguntas frecuentes</p>\n    </h3>\n    <div class=\"row\">\n      <div class=\"card\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Administrar configuracion de la cuenta</li>\n          <li class=\"list-group-item\">Clave de cuenta</li>\n          <li class=\"list-group-item\">Contraseña e inicio de sesion</li>\n          <li class=\"list-group-item\">Crear o eliminar cuenta</li>\n          <li class=\"list-group-item\">Politicas de juegos</li>\n          <li class=\"list-group-item\">Seguridad de la cuenta</li>\n          <li class=\"list-group-item\">Contactanos</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/ayuda/ayuda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AyudaComponent = (function () {
    function AyudaComponent() {
    }
    AyudaComponent.prototype.ngOnInit = function () {
    };
    return AyudaComponent;
}());
AyudaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ayuda',
        template: __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AyudaComponent);

//# sourceMappingURL=ayuda.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-menu-encabezado></app-menu-encabezado>\n<div class=\"container\">\n  <div class=\"signup-form-container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\"></div>\n      <div class=\"col-lg-4\">\n        <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\n          <div class=\"form-header\">\n            <h3 class=\"form-title\"><i class=\"fa fa-user\"></i> Sign Up</h3>\n          </div>\n          <div class=\"form-body\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></div>\n                <input name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Nombre\">\n              </div>\n              \n              <span class=\"help-block\" id=\"error\"></span>\n            </div>\n             <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></div>\n                <input name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Apellido\">\n              </div>\n              <span class=\"help-block\" id=\"error\"></span>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span></div>\n                <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n              <span class=\"help-block\" id=\"error\"></span>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></div>\n                <input name=\"password\" id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n              <span class=\"help-block\" id=\"error\"></span>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></div>\n                <input name=\"cpassword\" type=\"password\" class=\"form-control\" placeholder=\"Repetir Password\">\n              </div>\n              <span class=\"help-block\" id=\"error\"></span>\n            </div>\n          </div>\n          <div class=\"form-footer\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-outline btn-block\">\n                 <span class=\"glyphicon glyphicon-log-in\" ></span>  Registrase !\n                 </button>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-lg-4\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCuentaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrearCuentaComponent = (function () {
    function CrearCuentaComponent() {
    }
    CrearCuentaComponent.prototype.ngOnInit = function () {
    };
    return CrearCuentaComponent;
}());
CrearCuentaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-crear-cuenta',
        template: __webpack_require__("../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/crear-cuenta/crear-cuenta.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CrearCuentaComponent);

//# sourceMappingURL=crear-cuenta.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-img-top{\r\n    width: 280px;\r\n    height: 280px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n\r\n}\r\n\r\n\r\n\r\n      body {\r\n          font-family: 'Indie Flower', cursive;\r\n          font-size: 17px;\r\n      }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-encabezado></app-menu-encabezado>\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Menu</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link href=\"https://fonts.googleapis.com/css?family=Indie+Flower|Pacifico\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">\n <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\" crossorigin=\"anonymous\"></script>\n</head>\n\n  <body style=\"background-image: url('../assets/imagenes/poker.jpg')\">\n  \n<div class=\"container\">\n  <br>\n <div class=\"card-group card-inverse card-primary text-center\">\n  <div class=\"card\" [routerLink]=\"['/Juegos']\" style=\"background-color:darkorange   ;border-color:white; cursor:pointer;\">\n    <img class=\"card-img-top\" src=\"../assets/imagenes/cargando.gif\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Sala de juegos</h4>\n      <p class=\"card-text\">Esta es la seccion de juegos. Menu principal y submenus de juegos con estadisticas y estrategias.</p>\n     <button type=\"button\" class=\"btn btn-dark btn-lg btn-block\">Entrar</button>\n    </div> \n  </div>\n  <div class=\"card\" style=\"background-color: darkorange; border-color:white;\">\n    <a href=\"https://github.com/PratesiAlejandro\" target=\"_blank\">\n     <img class=\"card-img-top\" src=\"../assets/github.png\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n       <h4 class=\"card-title\">Github.com/PratesiAlejandro</h4>\n      <p class=\"card-text\">Este es el repositorio personal donde estan los contenidos, ejemplos y trabajos practicos de la materia.</p>\n      <button type=\"button\" class=\"btn btn-success btn-lg btn-block\">Entrar</button>\n    </div>\n    </a>\n  </div>\n  <div class=\"card\" [routerLink]=\"['/quiensoy']\" style=\"background-color:darkorange ; border-color: white;\">\n  \n     <img class=\"card-img-top\" src=\"../assets/quiensoy.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Mi Perfil</h4>\n      <p class=\"card-text\">Perfil personal</p>\n       <p class=\"card-text\">Descripcion juego creado</p>\n      <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Entrar</button>\n    </div>\n  \n  </div>\n</div>\n</div>\n\n\n</body>\n</html>\n\n\n\n\n<!--\n<h1 class=\"title\" style=\"display:none;\" >\naholaaaaaaaaaaaaaaaaaaaaaaaaa\n\n</h1>\n<button (click)=\"toggleTitle()\" >Mostarr</button>\n\n-->"

/***/ }),

/***/ "../../../../../src/app/componentes/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.toggleTitle = function () {
        console.log('clickkk');
        $('.title').slideToggle();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/componentes/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title></title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">\n     <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\" crossorigin=\"anonymous\"></script>\n</head>\n<body>\n\n <nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\n <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\" [routerLink]=\"['/Home']\" >Menu principal</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\" ><span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <!-- <a class=\"nav-link\" [routerLink]=\"['Adivina']\">Adivina el numero</a> -->\n        <button type=\"button\"  [routerLink]=\"['Adivina']\" class=\"btn btn-dark\">Adivina el numero</button>\n      </li>\n       <li class=\"nav-item\">\n       <a class=\"nav-link\">|</a>\n      </li>\n      <li class=\"nav-item\" [routerLink]=\"['Agilidad']\">\n       <!-- <a class=\"nav-link\" >Agilidad</a> -->\n        <button type=\"button\" class=\"btn btn-success\">Agilidad</button>\n      </li>\n       <li class=\"nav-item\">\n       <a class=\"nav-link\">|</a>\n      </li>\n       <li class=\"nav-item\" [routerLink]=\"['Anagrama']\">\n       <button type=\"button\" class=\"btn btn-info\">Anagrama</button>\n      </li>\n <li class=\"nav-item\">\n       <a class=\"nav-link\">|</a>\n      </li>\n       <li class=\"nav-item\" [routerLink]=\"['Listado']\">\n        <button type=\"button\" class=\"btn btn-warning\">Listado</button>\n      </li>\n       <li class=\"nav-item\">\n       <a class=\"nav-link\">|</a>\n      </li>\n       <li class=\"nav-item\" [routerLink]=\"['Mijuego']\">\n       <!-- <a class=\"nav-link\" >Mi Juego</a> -->\n        <button type=\"button\" class=\"btn btn-danger\">Mi Juego</button>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n</body>\n</html>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of listado\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr>\n     \n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Set a specific color for each brand */\r\n\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n\n<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"nav-item active\">\n     <a (click)=\"llamaService()\">Servicio</a>\n    </li>\n    \n     <li class=\"nav-item active\">\n    |\n    </li>\n    \n    <li class=\"nav-item active\">\n    <a (click)=\"llamaServicePromesa()\">Serv Promesa</a>\n    </li>\n     <li class=\"nav-item active\">\n    |\n    </li>\n    \n    <li class=\"nav-item active\">\n    <a (click)=\"llamaServicePromesa()\">Serv observable</a>\n    </li>\n  \n  </ul>\n\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin\r\n{\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading, .form-signin .checkbox\r\n{\r\n    margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox\r\n{\r\n    font-weight: normal;\r\n}\r\n.form-signin .form-control\r\n{\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus\r\n{\r\n    z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"]\r\n{\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"]\r\n{\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n.account-wall\r\n{\r\n    margin-top: 20px;\r\n    padding: 40px 0px 20px 0px;\r\n    background-color: #999999;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.login-title\r\n{\r\n    color: #555;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    display: block;\r\n}\r\n.profile-img\r\n{\r\n    width: 180px;\r\n    height: 180px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n.need-help\r\n{\r\n    margin-top: 10px;\r\n}\r\n.new-account\r\n{\r\n    display: block;\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-encabezado></app-menu-encabezado>\n<div class=\"container\">\n    <div class=\"row\">\n          <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4\">\n            <h1 class=\"text-center login-title\"></h1>\n            <div class=\"account-wall\">\n                <img class=\"profile-img\" src=\"../assets/vaderLogin.jpg\" alt=\"\">\n                <form class=\"form-signin\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n                    Sign in</button>\n                <label class=\"checkbox pull-left\">\n                    <input type=\"checkbox\" value=\"remember-me\">\n                    Recordarme\n                </label>\n                <a href=\"#\" [routerLink]=\"['/Ayuda']\" class=\"pull-right need-help\">Necesitas ayuda? </a><span class=\"clearfix\"></span>\n                </form>\n            </div>\n            <a href=\"#\" [routerLink]=\"['/Registrarse']\" class=\"text-center new-account\">Crear una cuenta </a>\n        </div>\n        <div class=\"col-lg-4\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title></title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">\n     <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js\" integrity=\"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4\" crossorigin=\"anonymous\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js\" integrity=\"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1\" crossorigin=\"anonymous\"></script>\n</head>\n<body>\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" ></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n      <a class=\"nav-link\" [routerLink]=\"['/Home']\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> \n   \n      </li>\n         <li class=\"nav-item\">\n       <a class=\"nav-link\" href=\"#\">|</a>\n      </li>\n      <li class=\"nav-item\">\n      <!--  <a class=\"nav-link\" [routerLink]=\"['/Login']\" href=\"#\">Login</a> -->\n          <button class=\"btn btn-outline-success\" [routerLink]=\"['/Login']\" type=\"button\">Login</button>\n      </li>\n      <li class=\"nav-item\">\n       <a class=\"nav-link\" href=\"#\">|</a>\n      </li>\n      <li class=\"nav-item\">\n       <!-- <a class=\"nav-link\" [routerLink]=\"['/404']\" href=\"#\">PageNotFound404</a> -->\n          <button class=\"btn btn-outline-danger\" [routerLink]=\"['/404']\" type=\"button\">PageNotFound404</button>\n      </li>\n    </ul>\n   \n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEncabezadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuEncabezadoComponent = (function () {
    function MenuEncabezadoComponent() {
    }
    MenuEncabezadoComponent.prototype.ngOnInit = function () {
    };
    return MenuEncabezadoComponent;
}());
MenuEncabezadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-encabezado',
        template: __webpack_require__("../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-encabezado/menu-encabezado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuEncabezadoComponent);

//# sourceMappingURL=menu-encabezado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/mi-juego/mi-juego.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-header {\r\n  color: #fff;\r\n  padding: 5px 15px 5px 0px;\r\n  position: relative;\r\n}\r\n\r\n.game-header>.score-block {\r\n  display: inline-block;\r\n}\r\n\r\n.score-block>.score {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: -5px;\r\n}\r\n\r\n.score-block>.best-score {\r\n  position: absolute;\r\n  right: 8px;\r\n  margin-top: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.game-header>.logo {\r\n  display: inline-block;\r\n  padding-left: 20px;\r\n}\r\n\r\n.game-container {\r\n  width: 500px;\r\n  position: relative;\r\n  display: block;\r\n  margin: auto;\r\n  background-color: #47565A;\r\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  border-radius: 5px;\r\n}\r\n\r\n.row {\r\n  height: 27px;\r\n \r\n}\r\n\r\n.column {\r\n  border: 1px solid rgba(97, 131, 138, .1);\r\n  width: 27px;\r\n /* height: 24px; */\r\n  display: inline-block;\r\n}\r\n\r\n.start-button {\r\n  padding: 15px;\r\n  text-align: center;\r\n  background-color: #47565A;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n\r\n.start-button:hover {\r\n  opacity: 0.65;\r\n  cursor: pointer;\r\n}\r\n\r\n.start-button.new-game-button {\r\n  margin: 0 105px 4px 105px;\r\n}\r\n\r\n.disable-clicks {\r\n  pointer-events: none;\r\n}\r\n\r\n.new-game-menu {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  bottom: 0;\r\n  padding: 40% 0;\r\n  text-align: center;\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.new-game-menu-label {\r\n  font-size: 1.17em;\r\n  margin-bottom: 13px;\r\n  display: block;\r\n  color: #fff;\r\n}\r\n\r\n.new-best-score {\r\n  -webkit-animation: glow .5s infinite alternate;\r\n          animation: glow .5s infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .game-container {\r\n    width: 100%;\r\n  }\r\n  .column {\r\n    width: 5.55%;\r\n    height: 0;\r\n    padding-bottom: 5.06%;\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 0;\r\n    padding-bottom: 5.5%;\r\n  }\r\n  .new-game-menu {\r\n    width: 100%;\r\n    top: 8px;\r\n    padding-top: 30%;\r\n    font-size: 80%;\r\n  }\r\n  .start-button.new-game-button {\r\n    margin: 0 15% 1% 15%;\r\n  }\r\n  @-moz-document url-prefix() {\r\n    .column {\r\n      min-height: 5.5vw;\r\n    }\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/mi-juego/mi-juego.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"game-container\">\n\n  <div class=\"game-header\">\n    <h3 class=\"logo\">Snake</h3>\n    <div class=\"score-block\">\n      <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Puntaje: {{score}}</h3>\n      <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Mejor Puntaje: {{best_score}}</h3>\n    </div>\n  </div>\n\n\n<div class=\"col-sm-12\">\n  <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\n  </div>\n \n  <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Jugar</div>\n  <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\n    <span class=\"new-game-menu-label\">Modo de juego</span>\n    <div class=\"start-button new-game-button\" (click)=\"newGame(mode)\" *ngFor=\"let mode of getKeys(all_modes)\">{{all_modes[mode]}}</div>\n  </div>\n</div>\n\n\n </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/mi-juego/mi-juego.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiJuegoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_storage_service__ = __webpack_require__("../../../../../src/app/app.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiJuegoComponent = (function () {
    function MiJuegoComponent(bestScoreService) {
        this.bestScoreService = bestScoreService;
        this.default_mode = 'classic';
        this.isGameOver = false;
        this.all_modes = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["d" /* GAME_MODES */];
        this.getKeys = Object.keys;
        this.board = [];
        this.obstacles = [];
        this.score = 0;
        this.showMenuChecker = false;
        this.gameStarted = false;
        this.newBestScore = false;
        this.best_score = this.bestScoreService.retrieve();
        this.snake = {
            direction: __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT,
            parts: [
                {
                    x: -1,
                    y: -1
                }
            ]
        };
        this.fruit = {
            x: -1,
            y: -1
        };
        this.setBoard();
    }
    MiJuegoComponent.prototype.ngOnInit = function () {
    };
    MiJuegoComponent.prototype.handleKeyboardEvents = function (e) {
        if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].RIGHT) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT;
        }
        else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].UP && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].DOWN) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].UP;
        }
        else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].RIGHT && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].RIGHT;
        }
        else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].DOWN && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].UP) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].DOWN;
        }
    };
    MiJuegoComponent.prototype.setColors = function (col, row) {
        if (this.isGameOver) {
            return __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["b" /* COLORS */].GAME_OVER;
        }
        else if (this.fruit.x === row && this.fruit.y === col) {
            return __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["b" /* COLORS */].FRUIT;
        }
        else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["b" /* COLORS */].HEAD;
        }
        else if (this.board[col][row] === true) {
            return __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["b" /* COLORS */].BODY;
        }
        else if (this.default_mode === 'obstacles' && this.checkObstacles(row, col)) {
            return __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["b" /* COLORS */].OBSTACLE;
        }
        return __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["b" /* COLORS */].BOARD;
    };
    ;
    MiJuegoComponent.prototype.updatePositions = function () {
        var newHead = this.repositionHead();
        var me = this;
        if (this.default_mode === 'classic' && this.boardCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.default_mode === 'no_walls') {
            this.noWallsTransition(newHead);
        }
        else if (this.default_mode === 'obstacles') {
            this.noWallsTransition(newHead);
            if (this.obstacleCollision(newHead)) {
                return this.gameOver();
            }
        }
        if (this.selfCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        var oldTail = this.snake.parts.pop();
        this.board[oldTail.y][oldTail.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        setTimeout(function () {
            me.updatePositions();
        }, this.interval);
    };
    MiJuegoComponent.prototype.repositionHead = function () {
        var newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].DOWN) {
            newHead.y += 1;
        }
        return newHead;
    };
    MiJuegoComponent.prototype.noWallsTransition = function (part) {
        if (part.x === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */]) {
            part.x = 0;
        }
        else if (part.x === -1) {
            part.x = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */] - 1;
        }
        if (part.y === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */]) {
            part.y = 0;
        }
        else if (part.y === -1) {
            part.y = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */] - 1;
        }
    };
    MiJuegoComponent.prototype.addObstacles = function () {
        var x = this.randomNumber();
        var y = this.randomNumber();
        if (this.board[y][x] === true || y === 8) {
            return this.addObstacles();
        }
        this.obstacles.push({
            x: x,
            y: y
        });
    };
    MiJuegoComponent.prototype.checkObstacles = function (x, y) {
        var res = false;
        this.obstacles.forEach(function (val) {
            if (val.x === x && val.y === y) {
                res = true;
            }
        });
        return res;
    };
    MiJuegoComponent.prototype.obstacleCollision = function (part) {
        return this.checkObstacles(part.x, part.y);
    };
    MiJuegoComponent.prototype.boardCollision = function (part) {
        return part.x === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */] || part.x === -1 || part.y === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */] || part.y === -1;
    };
    MiJuegoComponent.prototype.selfCollision = function (part) {
        return this.board[part.y][part.x] === true;
    };
    MiJuegoComponent.prototype.fruitCollision = function (part) {
        return part.x === this.fruit.x && part.y === this.fruit.y;
    };
    MiJuegoComponent.prototype.resetFruit = function () {
        var x = this.randomNumber();
        var y = this.randomNumber();
        if (this.board[y][x] === true || this.checkObstacles(x, y)) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    };
    MiJuegoComponent.prototype.eatFruit = function () {
        this.score++;
        var tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(tail);
        this.resetFruit();
        if (this.score % 5 === 0) {
            this.interval -= 15;
        }
    };
    MiJuegoComponent.prototype.gameOver = function () {
        this.isGameOver = true;
        this.gameStarted = false;
        var me = this;
        if (this.score > this.best_score) {
            this.bestScoreService.store(this.score);
            this.best_score = this.score;
            this.newBestScore = true;
        }
        setTimeout(function () {
            me.isGameOver = false;
        }, 500);
        this.setBoard();
    };
    MiJuegoComponent.prototype.randomNumber = function () {
        return Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */]);
    };
    MiJuegoComponent.prototype.setBoard = function () {
        this.board = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */]; i++) {
            this.board[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* BOARD_SIZE */]; j++) {
                this.board[i][j] = false;
            }
        }
    };
    MiJuegoComponent.prototype.showMenu = function () {
        this.showMenuChecker = !this.showMenuChecker;
    };
    MiJuegoComponent.prototype.newGame = function (mode) {
        this.default_mode = mode || 'classic';
        this.showMenuChecker = false;
        this.newBestScore = false;
        this.gameStarted = true;
        this.score = 0;
        this.tempDirection = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT;
        this.isGameOver = false;
        this.interval = 150;
        this.snake = {
            direction: __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["c" /* CONTROLS */].LEFT,
            parts: []
        };
        for (var i = 0; i < 3; i++) {
            this.snake.parts.push({ x: 8 + i, y: 8 });
        }
        if (mode === 'obstacles') {
            this.obstacles = [];
            var j = 1;
            do {
                this.addObstacles();
            } while (j++ < 9);
        }
        this.resetFruit();
        this.updatePositions();
    };
    return MiJuegoComponent;
}());
MiJuegoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mi-juego',
        template: __webpack_require__("../../../../../src/app/componentes/mi-juego/mi-juego.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/mi-juego/mi-juego.component.css")],
        host: {
            '(document:keydown)': 'handleKeyboardEvents($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_app_storage_service__["a" /* BestScoreManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_app_storage_service__["a" /* BestScoreManager */]) === "function" && _a || Object])
], MiJuegoComponent);

var _a;
//# sourceMappingURL=mi-juego.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagen404{\r\n    width: 1000px;\r\n    height: 500px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu-encabezado></app-menu-encabezado>\n<div class=\"container\">\n  <img class=\"imagen404\" src=\"../assets/404.png\" alt=\"\">\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaNoEncontradaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginaNoEncontradaComponent = (function () {
    function PaginaNoEncontradaComponent() {
    }
    PaginaNoEncontradaComponent.prototype.ngOnInit = function () {
    };
    return PaginaNoEncontradaComponent;
}());
PaginaNoEncontradaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pagina-no-encontrada',
        template: __webpack_require__("../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/pagina-no-encontrada/pagina-no-encontrada.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaginaNoEncontradaComponent);

//# sourceMappingURL=pagina-no-encontrada.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quiensoy/quiensoy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quiensoy/quiensoy.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>AP</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<style>\r\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Lato\", sans-serif}\r\n.w3-bar,h1,button {font-family: \"Montserrat\", sans-serif}\r\n.fa-anchor,.fa-coffee {font-size:200px}\r\n</style>\r\n<body>\r\n\r\n<!-- Navbar -->\r\n<div class=\"w3-top\">\r\n  <div class=\"w3-bar w3-red w3-card w3-left-align w3-large\">\r\n    <a class=\"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red\" href=\"javascript:void(0);\" onclick=\"myFunction()\" title=\"Toggle Navigation Menu\"><i class=\"fa fa-bars\"></i></a>\r\n    <a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large w3-white\">Home</a>\r\n    <a class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\">Perfil</a>\r\n    <a class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\">Mi juego</a>\r\n    \r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Header -->\r\n<header class=\"w3-container w3-red w3-center\" style=\"padding:200px 50px\">\r\n  <h1 class=\"w3-margin w3-jumbo\">alejandro pratesi</h1>\r\n  <p class=\"w3-xlarge\"><small>template by</small><strong> alejandro.pratesi</strong></p>\r\n  <p class=\"w3-xlarge\">web Developer / Photographer</p>\r\n \r\n  <button class=\"w3-button w3-black w3-padding-large w3-large w3-margin-top\">Iniciar</button>\r\n</header>\r\n\r\n<!-- First Grid -->\r\n<div class=\"w3-row-padding w3-white w3-padding-64 w3-container\">\r\n  <div class=\"w3-content\">\r\n    <div class=\"w3-twothird\">\r\n      <h1>Perfil</h1>\r\n      <h5 class=\"w3-padding-32\">\r\n        Soy un programador de sistemas y diseñador web apasionado por su trabajo.\r\n        <br>\r\n        Tengo más de 10 años de experiencia más de un centenar de proyectos en los que he participado\r\n         y realizado desde cero... y siguen aumentando.\r\n         <br>\r\nMi especialidad es el Desarrollo de Sistemas a Medida.\r\n\r\n\r\n\r\n\r\n      </h5>\r\n\r\n      <p class=\"w3-text-grey\">Especialidad: Java, JUnit, DBUnit,\r\n         Tapestry 3, Struts, Spring 3, \r\n         Hibernate, MySql, Oracle, Eclipse, Jasper\r\nReports, TDD, Python, Django, Grails, JavaScript, jQuery, CCS3, HTML5.\r\n<br>Considero cada proyecto como un nuevo reto, llevándolo a cabo con entusiasmo y desde una óptica dinámica y creativa, con el objetivo de ofrecer un trabajo competitivo y de calidad.\r\n</p>\r\n    </div>\r\n\r\n    <div class=\"w3-third w3-center\">\r\n      <i class=\"fa fa-anchor w3-padding-64 w3-text-red\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Second Grid -->\r\n<div class=\"w3-row-padding w3-light-grey w3-padding-64 w3-container\">\r\n  <div class=\"w3-content\">\r\n    <div class=\"w3-third w3-center\">\r\n      <i class=\"fa fa-coffee w3-padding-64 w3-text-red w3-margin-right\"></i>\r\n    </div>\r\n\r\n    <div class=\"w3-twothird\">\r\n      <h1>Tutorial del Juego</h1>\r\n      <h5 class=\"w3-padding-32\">\r\n      \r\nEl juego de serpientes es un juego de acción que consiste en una serpiente que se mueve constantemente\r\n dentro de una cuadrícula.<br>\r\n El jugador controla la dirección de la serpiente con las flechas del teclado,\r\n  pero la serpiente siempre se mueve.<br>\r\n   Cuando la serpiente come algo crece de tamaño.<br>\r\n    Si la serpiente toca los límites de la cuadrícula, o si trata de comerse su propia cola,\r\n     el juego termina. <br>\r\n     El objetivo del juego es mantener a la serpiente con vida el mayor tiempo posible.  \r\n      \r\n      </h5>\r\n\r\n      <!--<p class=\"w3-text-grey\"> -->\r\n         <h5 class=\"w3-padding-32\">\r\n        Teclas para jugar:  \r\n        UP , DOWN , LEFT , RIGHT\r\n         </h5>\r\n     <!-- </p> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"w3-container w3-black w3-center w3-opacity w3-padding-64\">\r\n    <h1 class=\"w3-margin w3-xlarge\"> #User Experience   #Music   #Creative Direction</h1>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<footer class=\"w3-container w3-red w3-padding-64 w3-center\">  \r\n  <div class=\"w3-xlarge w3-padding-32\">\r\n    \r\n      <a href=\"https://www.facebook.com/alejandro.pratesi\" target=\"_blank\">\r\n      <i class=\"fa fa-facebook-official w3-hover-opacity\"></i></a>\r\n\r\n     <a href=\"https://www.instagram.com/alejandro_pratesi/\" target=\"_blank\">\r\n    <i class=\"fa fa-instagram w3-hover-opacity\"></i></a>\r\n\r\n    <a href=\"https://github.com/PratesiAlejandro\" target=\"_blank\">\r\n    <i class=\"fa fa-github w3-hover-opacity\"></i></a>\r\n\r\n    <a href=\"https://twitter.com/flacodebarrio\" target=\"_blank\">\r\n    <i class=\"fa fa-twitter w3-hover-opacity\"></i></a>\r\n\r\n    <a href=\"https://www.linkedin.com/in/alejandropratesi/\" target=\"_blank\">\r\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i></a>\r\n </div>\r\n <p>Powered by    <a href=\"https://www.linkedin.com/in/alejandropratesi/\" target=\"_blank\">alejandro.pratesi</a></p>\r\n</footer>\r\n\r\n<script>\r\n// Used to toggle the menu on small screens when clicking on the menu button\r\nfunction myFunction() {\r\n    var x = document.getElementById(\"navDemo\");\r\n    if (x.className.indexOf(\"w3-show\") == -1) {\r\n        x.className += \" w3-show\";\r\n    } else { \r\n        x.className = x.className.replace(\" w3-show\", \"\");\r\n    }\r\n}\r\n</script>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/quiensoy/quiensoy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuiensoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuiensoyComponent = (function () {
    function QuiensoyComponent() {
    }
    QuiensoyComponent.prototype.ngOnInit = function () {
    };
    return QuiensoyComponent;
}());
QuiensoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quiensoy',
        template: __webpack_require__("../../../../../src/app/componentes/quiensoy/quiensoy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quiensoy/quiensoy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuiensoyComponent);

//# sourceMappingURL=quiensoy.component.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JuegoServiceService = (function () {
    function JuegoServiceService() {
    }
    JuegoServiceService.prototype.listar = function () {
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JuegoServiceService);

//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map