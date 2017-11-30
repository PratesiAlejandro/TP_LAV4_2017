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
        { ordenada:"gato",desordenada:"toga" },
        { ordenada:"halcon",desordenada:"loncha" },
        { ordenada:"jirafa",desordenada:"fijara" },
        { ordenada:"leon",desordenada:"loen" },
        { ordenada:"luciernaga",desordenada:"neuralgica" },
        { ordenada:"gorila",desordenada:"gloria" },
        { ordenada:"tiburon",desordenada:"tribuno" },
        { ordenada:"cebra",desordenada:"cebar" },
        { ordenada:"lobo",desordenada:"bolo" },
        { ordenada:"tigre",desordenada:"grite" },
        { ordenada:"vaca",desordenada:"cava" },
        { ordenada:"zorra",desordenada:"rozar" },
        { ordenada:"pantera",desordenada:"atrapen" },
        { ordenada:"mariposa",desordenada:"piaramos" },
        { ordenada:"medusa",desordenada:"mudase" }

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

