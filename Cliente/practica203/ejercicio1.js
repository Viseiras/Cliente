'use strict';

/**
 * Constructor (de objetos)
 * ----------------------------
 * PROGRAMA QUE CREA UN OBJETO A PARTIR DE PARAMETROS
 * ----------------------------
 */

/**
 * Función que crea un objeto recibiendo todas sus propiedades por parametro
 * 
 * @param {string} nombre - Nombre del curso
 * @param {number} anyo - Año en el que toma lugar el curso
 * @param {string} descripcion - Descripción del curso
 * @param {Array} alumnado - Array que contiene los alumnos
 * @returns {Object}
 */
function constructorCurso(nombre, anyo, descripcion, alumnado){
    let curso = {
        nombre:nombre,
        anyo:anyo,
        descripcion:descripcion,
        alumnado:alumnado
    }

    return curso;
}

//MAIN
let cursoDAWSemi= constructorCurso("DAW Semi",2025,"Curso de desarrollo de aplicaciones Web Semipresencial",["Javier","Rober","Aaron"]);

console.log(cursoDAWSemi.nombre);
console.log(cursoDAWSemi.anyo);
console.log(cursoDAWSemi.descripcion);
console.log(cursoDAWSemi.alumnado[0]);
//FIN