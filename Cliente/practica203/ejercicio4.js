'use strict';

/**
 * Modificando (Objetos)
 * ----------------------------
 * PROGRAMA QUE USA PARTES DEL EJERCICIO 1 y EJERCICIO 2 PARA AÑADIR UN ALUMNO CON TODOS SUS CAMPOS AL ARRAY ALUMNADO
 * ----------------------------
 */

//FUNCIONES
/**
 * Función que crea un objeto recibiendo todas sus propiedades por parametro
 * 
 * @param {string} nombre - Nombre del curso
 * @param {number} anyo - Año en el que toma lugar el curso
 * @param {string} descripcion - Descripción del curso
 * @param {Array} alumnado - Array que contiene los alumnos
 * @returns {Object}
 */
function constructorCurso(nombreCurso, anyoCurso, descripcionCurso){
    let curso = {
        nombre:nombreCurso,
        anyo:anyoCurso,
        descripcion:descripcionCurso,
        alumnado:[],

        /**
         * Función del objeto curso que nos permite añadir alumnos al curso
         * 
         * @param {Object} discente 
         */
        matricular(discente){
            //Usamos el spread operator para añadir los discentes
            this.alumnado=[...this.alumnado,discente];
        }
    }

    return curso;
}

//MAIN
//Codigo del ejercicio1
let cursoDAWSemi= constructorCurso("DAW Semi",2025,"Curso de desarrollo de aplicaciones Web Semipresencial",["Javier","Rober","Aaron"]);


//Codigo del ejercicio2
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

//MAIN
cursoDAWSemi.matricular(discente);

console.log(cursoDAWSemi);
//FIN