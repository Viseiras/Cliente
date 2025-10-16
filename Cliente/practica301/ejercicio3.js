'use strict';

// CONSTANTES GLOBALES
const botonAnyadir = document.getElementsByTagName("button")[0];
const input = document.getElementById("texto");
const tbody = document.getElementById("bodyTabla");
var contador = 0;
// FUNCIONES

// Función que transforma el texto al "estilo cani"
function toCani(id){

    //Nos movemos al padre del botón desde el que se ejecuta para ubicarnos en la linea
    const fila=document.getElementById(id);

    const celdaTexto=fila.querySelector('td');

    let cadena=celdaTexto.textContent;

    let stringCani=cadena.toLowerCase();
    let cadenaCani=stringCani.split('');

    for (let i=0;i<cadenaCani.length;i++){
        if (cadenaCani[i]==="c"){
            cadenaCani[i]="k";
        }
        if (i%2===0){
            cadenaCani[i]=cadenaCani[i].toUpperCase();
        }
    }

    cadenaCani=cadenaCani.join('');
    cadenaCani=cadenaCani.padEnd(cadenaCani.length+(Math.floor(Math.random()*(5-2))+2),"H");

    //Actualizamos el texto de la td con la cadena cani
    celdaTexto.textContent=cadenaCani;
}

function anyadeFila() {
    //Creamos la nueva tr
    const tr = document.createElement("tr");

    contador++;
    tr.setAttribute("id",`${contador}`);

    //Creamos la td con el texto del input
    const tdTexto = document.createElement("td");
    tdTexto.textContent = input.value;

    //Creamos el td que tiene el botón cani
    const tdBoton = document.createElement("td");
    const botonCani = document.createElement("button");
    botonCani.textContent = "Caniar";
    botonCani.setAttribute("onclick",`toCani(${contador})`);

    tdBoton.appendChild(botonCani);

    //Añadir las td a tr
    tr.append(tdTexto,tdBoton);

    //Añadimos tr a tbody
    tbody.appendChild(tr);
}

//MAIN
botonAnyadir.addEventListener("click", anyadeFila);
