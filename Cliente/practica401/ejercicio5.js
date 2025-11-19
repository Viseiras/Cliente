"use strict";

/**
 * Rellenar papalera
 * ---------------------------------------------
 * Programa que deja tirar una bola de papel a una papelera al arrastrar el elemento
 * ---------------------------------------------
 */

const imgPapel = "https://png.pngtree.com/png-vector/20240614/ourmid/pngtree-tossed-crumpled-paper-ball-concept-flat-design-isolated-png-image_12716913.png";

const imgPapelera = "https://softwareg.com.au/cdn/shop/articles/unnamed_a9fd3f84-fef9-420a-aa97-a5afffd42320.png?v=1707799740";

const imgPapeleraLlena ="https://ik.imagekit.io/smdxc0e2g3/userscontent2-endpoint/images/fa49ac7b-29c1-48b3-b683-53e0b54fab32/a0c2236776b90f85f078c5ef37fe45d3.png?tr=w-280,rt-0";

//Creamos el elemento de la bola de papel
const papel = document.createElement("img");
papel.src = imgPapel;
papel.draggable = true;
document.body.appendChild(papel);

//Creamos el elemento de la papelera
const papelera = document.createElement("img");
papelera.src = imgPapelera;
papelera.style.position = "absolute";
papelera.style.bottom = "0";
papelera.style.right = "0";
document.body.appendChild(papelera);

//Evento para iniciar el arrastre
papel.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "bola de papel");
});
//Evento para permitir soltar en la papelera
papelera.addEventListener("dragover", (event) => {
    event.preventDefault();
});

//Evento para soltar la bola de papel en la papelera
papelera.addEventListener("drop", (event) => {
    event.preventDefault();
    papel.style.display = "none";
    papelera.src = imgPapeleraLlena;
}); 

//FIN