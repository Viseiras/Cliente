'use strict';

/**
 * Recorriendo (objetos)
 * ----------------------------
 * PROGRAMA QUE RECORRE UN OBJETO YA CREADO
 * ----------------------------
 */


//FUNCIONES

//MAIN
let discente ={
    id:2,
    nombre:"Ana",
    apellidos:"López Martín",
    aficiones:["pintar","bailar","tocar el piano"],
    notas:{
        primera:9,
        segunda:8.5,
        tercera:9.8
    },

    /**
     * Función del objeto discente que calcula la media de las 3 evaluaciones
     * 
     * @returns {number}
     */
    calcularMedia(){
        let media = ((this.notas.primera+this.notas.segunda+this.notas.tercera)/3).toFixed(2);

        return media;
    },

    //Función que imprime por consola las aficiones 
    imprimirAficiones(){
        //Debería ser un console.log() para seguir exactamente el enunciado pero no me resultaba útil así que lo he hecho así 
        //console.log(this.aficiones.join(", "));
        return this.aficiones.join(", ");
    },

    imprimirInforme(){
        let cadena=""

        cadena+=`ID: ${this.id}\n`;
        cadena+=`Nombre: ${this.nombre} ${this.apellidos}\n`;
        cadena+=`Aficiones: ${this.imprimirAficiones()}\n`;
        cadena+=`Notas: Primera Evaluación: ${this.notas.primera}, Segunda Evaluación: ${this.notas.segunda}, Tercera Evaluación: ${this.notas.tercera}\n`;
        cadena+=`Nota media: ${this.calcularMedia()}`;

        console.log(cadena);
    }

}

discente.imprimirInforme();

//FIN