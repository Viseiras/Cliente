'use strict';

/*
var elementos = document.getElementsByTagName("p");
console.log(elementos.length);

let parrafo = document.body.firstChild;
console.log(parrafo);

let parrafoElemento = document.body.firstElementChild;
console.log(parrafoElemento);


console.log(parrafo.nodeType);
console.log(parrafoElemento.nodeType);

console.log(parrafo.nodeName);
console.log(parrafoElemento.nodeName);

console.log(parrafo.nodeValue);
console.log(parrafoElemento.nodeValue);


console.log(`Párrafos seleccionados: ${elementos.length}`);
console.log(elementos[elementos.length-1]);

for(let i=0;i<elementos.length;i++){
    console.log(elementos[i]);
}
*/

/*
let inputs = document.querySelectorAll("input");
console.log(inputs);

let botones = document.querySelector("#botones");
console.log(botones);

let divs = document.querySelectorAll("div div");
console.log(divs);

let contenido = document.querySelectorAll(".contenido");
console.log(contenido);

*/

const crearCE = function(){
    let contenido = document.createTextNode(
        "Nuevo párrafo creado <strong>dinámicamente</strong>"
    );

    let elemento = document.createElement("p");
    elemento.appendChild(contenido);
    console.log(document.getElementById("botones"));
    document.getElementById("botones").appendChild(elemento);
}

const crearIH = () => {
    let elemento2 = document.createElement("div");
    elemento2.innerHTML =
    "<p>Nuevo párrafo creado dinámicamente con <strong>innerHTML</strong></p>";

    document.getElementById("botones").appendChild(elemento2);
};

const derecha = function(){
    let der = document.getElementById("primero");
    console.log(der.getAttribute("align"));

    der.setAttribute("align","right");
    console.log(der.getAttribute("align"));
}

const destacar = () =>{
    let nuevos = document.getElementsByClassName("nuevo");
    for(let i=0;i<nuevos.length;i++){
        nuevos[i].classList.toggle("destacado");
    }
};

const pintarAzul = () =>{
    let azules = document.getElementsByClassName("contenido");
    for(let i=0;i<azules.length;i++){
        azules[i].style.color = "blue";
    }
};

let primero = document.getElementById("primero");
primero.classList.add("verde");

const crearRosa = () =>{
    let style = document.createElement("style");

    style.innerHTML = ".rosa{ color:pink !important; border: red 2px solid;}";

    document.head.appendChild(style);

    let elementos = document.getElementsByClassName("contenido");

    for(let i=0;i<elementos.length;i++){
        elementos[i].classList.toggle("rosa");
    }
};