'use strict';

//IMPORTANTE, HE USADO CHATGPT PARA ESTE PORQUE ME ESTABA HACIENDO UN LIO TRMENDO, POR SI HACE FALTA BAJARME LA NOTA PERO NO SABÍA HACER QUE LEYESE EL OBJETO DENTRO DEL OBJETO


/**
 * Mostrando II (Objetos)
 * ----------------------------
 * PROGRAMA QUE MUESTRA UN OBJETO Y ENSEÑA TODOS LOS CAMPOS
 * ----------------------------
 */


// FUNCIONES
/**
 * Función que crea un objeto curso recibiendo todas sus propiedades por parámetro
 * 
 * @param {string} nombreCurso - Nombre del curso
 * @param {number} anyoCurso - Año del curso
 * @param {string} descripcionCurso - Descripción del curso
 * @param {Array} alumnadoInicial - Array con alumnos iniciales
 * @returns {Object}
 */
function constructorCurso(nombreCurso, anyoCurso, descripcionCurso, alumnadoInicial = []) {
    let curso = {
        nombre: nombreCurso,
        anyo: anyoCurso,
        descripcion: descripcionCurso,
        alumnado: alumnadoInicial,

        /**
         * Función que añade alumnos al curso
         * 
         * @param {Object} discente
         */
        matricular(discente) {
            this.alumnado = [...this.alumnado, discente];
        }
    };

    return curso;
}
/**
 * Función que imprime cualquier objeto indicando tipo de cada propiedad
 * 
 * @param {Object} objeto - Objeto a imprimir
 * @returns {string} - Cadena formateada
 */
function imprimeObjeto(objeto) {
    let cadena = "CLAVE        VALOR                               TIPO\n";

    function recorrer(obj, indent = "") {
        if (Array.isArray(obj)) {
            obj.forEach((elem, index) => {
                if (typeof elem === "object" && elem !== null) {
                    cadena += `${indent}[${index}]`.padEnd(12) + "[objeto]".padEnd(35) + "object\n";
                    recorrer(elem, indent + "    ");
                } else {
                    cadena += `${indent}[${index}]`.padEnd(12) + String(elem).padEnd(35) + typeof elem + "\n";
                }
            });
            return;
        }

        for (let propiedad in obj) {
            let valor = obj[propiedad];
            let tipo = typeof valor;

            if (tipo === "function") {
                continue; // no imprimimos funciones
            } else if (Array.isArray(valor)) {
                cadena += `${indent}${propiedad.padEnd(12)}[array]`.padEnd(35) + "array\n";
                recorrer(valor, indent + "    ");
            } else if (tipo === "object" && valor !== null) {
                cadena += `${indent}${propiedad.padEnd(12)}[objeto]`.padEnd(35) + "object\n";
                recorrer(valor, indent + "    ");
            } else {
                cadena += `${indent}${propiedad.padEnd(12)}${String(valor).padEnd(35)}${tipo}\n`;
            }
        }
    }

    recorrer(objeto);
    return cadena;
}


// CREACIÓN DEL DISCENTE
let discente = {
    id: 2,
    nombre: "Ana",
    apellidos: "López Martín",
    aficiones: ["pintar", "bailar", "tocar el piano"],
    notas: {
        primera: 9,
        segunda: 8.5,
        tercera: 9.8
    },

    /**
     * Calcula la media de las 3 evaluaciones
     * @returns {number}
     */
    calcularMedia() {
        let media = (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
        return media.toFixed(2);
    },

    /**
     * Devuelve las aficiones como cadena
     * @returns {string}
     */
    imprimirAficiones() {
        return this.aficiones.join(", ");
    },

    /**
     * Devuelve un informe completo del discente
     * @returns {string}
     */
    imprimirInforme() {
        let cadena = "";
        cadena += `ID: ${this.id}\n`;
        cadena += `Nombre: ${this.nombre} ${this.apellidos}\n`;
        cadena += `Aficiones: ${this.imprimirAficiones()}\n`;
        cadena += `Notas: Primera: ${this.notas.primera}, Segunda: ${this.notas.segunda}, Tercera: ${this.notas.tercera}\n`;
        cadena += `Nota media: ${this.calcularMedia()}\n`;
        return cadena;
    }
};

// MAIN
let cursoDAWSemi = constructorCurso(
    "DAW Semi",
    2025,
    "Curso de desarrollo de aplicaciones Web Semipresencial",
    ["Javier", "Rober", "Aaron"] // alumnos iniciales
);

// Matriculamos al discente
cursoDAWSemi.matricular(discente);

// Imprimimos el curso completo formateado
console.log(imprimeObjeto(cursoDAWSemi));
//FIN