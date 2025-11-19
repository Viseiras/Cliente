"use strict";

/**
 * Rompecabezas
 * ---------------------------------------------
 * Programa que crea un rompecabezas de imágenes que se pueden mover de posición al hacer hold en ellas
 * ---------------------------------------------
 */

const imagenes = ["./imagenes/1.png", "./imagenes/2.png", "./imagenes/3.png",
                  "./imagenes/4.png", "./imagenes/5.png", "./imagenes/6.png",
                  "./imagenes/7.png", "./imagenes/8.png", "./imagenes/9.png"];

//Recogemos la referencia al contenedor completado
const superior = document.getElementById("superior");

//Recogemos la referencia al contenedor sin completar
const inferior = document.getElementById("inferior");

//Recogemos las celdas de ambos contenedores
const celdasSuperior = superior.children;
const celdasInferior = inferior.children;

//Recogemos la referencia al botón de reiniciar
const botonReinciar = document.getElementById("reiniciar");

//Recogemos la referencia al cartel de victoria
const h1Victoria = document.getElementById("cartelVictoria");

//FUNCIONES

/**
 * Función que rellena el contenedor superior con las imagenes de un array
 * 
 * @param {Array} arrayImagenes - Array con las rutas de las imágenes
 * @param {HTMLCollection} celdas - Celdas del contenedor a rellenar
 */
function rellenarRompecabezas(arrayImagenes, celdas){
    for(let i = 0; i < celdas.length; i++){
        const img = document.createElement("img");
        img.src = arrayImagenes[i];
        img.draggable = true;
        img.id = `img${i}`;
        img.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
        });
        celdas[i].appendChild(img);
    }
}

/**
 * Función que vacía las celdas del rompecabezas
 * 
 * @param {HTMLCollection} celdas - Celdas del contenedor a vaciar
 */
function vaciarRompecabezas(celdas){
    for(let i = 0; i < celdas.length; i++){
        celdas[i].innerHTML = "";
    }
}

/**
 * Función que mezcla aleatoriamente los elementos de un array (este algoritmo es el Fisher-Yates Shuffle copiado de Internet evidentemente)
 * 
 * @param {Array} array - Array a mezclar
 * @returns {Array} Array mezclado
 */
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Función que comprueba si el rompecabezas está completado
 * @returns {boolean} True si el rompecabezas está completado, false en caso contrario
 */
function compruebaGanador(){
    for(let i = 0; i < celdasInferior.length; i++){
        const celdaInferior = celdasInferior[i];
        const img = celdaInferior.children[0];
        //Si la celda esta vacía y no hay imagen sale
        if(!img) return false;
        //Sacamos el nombre de la imagen (1.png, 2.png, etc) para compararlo
        const nombreImg = img.src.split("/").pop();
        const nombreEsperado = imagenes[i].split("/").pop(); 
        //Si los nombres no coinciden salimos
        if(nombreImg !== nombreEsperado){
            return false;
        }
    }
    //En caso de que todo haya ido bien devolvemos true
    return true;
}

//MAIN

//Hacemos una copia del array de imágenes y lo mezclamos
let imgRef = [...imagenes];
imgRef = mezclarArray(imgRef);


//Rellenamos el rompecabezas inicialmente
rellenarRompecabezas(imgRef, celdasSuperior);

//Añadimos el evento onclick al botón de reiniciar
botonReinciar.addEventListener("click", () => {
    vaciarRompecabezas(celdasInferior);
    vaciarRompecabezas(celdasSuperior);
    //Volvemos a mezclar las imágenes y rellenamos el rompecabezas
    imgRef = mezclarArray([...imagenes]);
    rellenarRompecabezas(imgRef, celdasSuperior);
    //Ocultamos el cartel de victoria
    h1Victoria.style.display = "none";
});

//Añadimos los eventos dragover y drop a las celdas del contenedor inferior
for(let i=0; i < celdasInferior.length; i++){
    const celda = celdasInferior[i];
    //Impedimos el comportamiento por defecto en dragover
    celda.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    //Manejamos el evento del drop para que se añada la imagen a la celda
    celda.addEventListener("drop", (event) => {
        event.preventDefault();
        const idImg = event.dataTransfer.getData("text/plain");
        const img = document.getElementById(idImg);
        if(celda.children.length === 0){
            celda.appendChild(img);
        }
        if(compruebaGanador()){
            h1Victoria.style.display = "block";
        }
    });
}   

//FIN