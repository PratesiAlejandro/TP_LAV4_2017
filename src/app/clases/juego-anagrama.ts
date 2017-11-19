import  { Juego } from '../clases/juego';

export class JuegoAnagrama extends Juego {

 respuestaIngresada : string;
    respuesta : string;
    palabraOrdenada="";
    palabraDesordenada="";
    palabraIngresada="";

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super(" Anagrama ",gano,jugador);
    }

    arrayDePalabras : Array <any >= [
        { ordenada:"Gato",desordenada:"toga" },
        { ordenada:"Halcon",desordenada:"loncha" },
        { ordenada:"Jirafa",desordenada:"fijara" },
        { ordenada:"Leon",desordenada:"loen" },
        { ordenada:"Luciernaga",desordenada:"neuralgica" },
        { ordenada:"Gorila",desordenada:"gloria" },
        { ordenada:"Tiburon",desordenada:"tribuno" },
        { ordenada:"Cebra",desordenada:"cebar" },
        { ordenada:"Lobo",desordenada:"bolo" },
        { ordenada:"Tigre",desordenada:"grite" },
        { ordenada:"Vaca",desordenada:"cava" },
        { ordenada:"Zorra",desordenada:"rozar" },
        { ordenada:"Pantera",desordenada:"atrapen" },
        { ordenada:"Mariposa",desordenada:"piaramos" },
        { ordenada:"Medusa",desordenada:"mudase" }

    ];

    public asignarPalabra() {       
        let indice;
        indice =Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada=this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada=this.arrayDePalabras[indice]["ordenada"];
    }

    public verificar() {
        if (this.palabraIngresada == this.palabraOrdenada ) 
        {
          this.gano = true;
          this.palabraOrdenada="";
          this.palabraDesordenada="";
          this.palabraIngresada=""; 
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }

}

