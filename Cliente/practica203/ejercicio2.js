'use strict';

/**
 * Mostrando (Objetos)
 * ----------------------------
 * PROGRAMA QUE MUESTRA LAS PROPIEDADES FORMATEADAS
 * ----------------------------
 */

//FUNCIONES
/**
 * Función que muestra el Objeto debidamente formateado
 * 
 * @param {Object} curso 
 */
function muestraCurso(curso){
    let cadena = "TIPO\t  NOMBRE\t\tVALOR\n";

    for(let propiedad in curso){
        //Cada \t es equivalente a padEnd(5)
        cadena+=`${(typeof propiedad).padEnd(10)}${(propiedad).padEnd(10)}\t\t${curso[propiedad]}\n`;
    }

    console.log(cadena);
}

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
muestraCurso(cursoDAWSemi);
//FIN