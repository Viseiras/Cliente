"use strict";

const body = document.getElementsByTagName("body")[0];

// Array con las URLs de las imágenes
var imagenes = [
    "https://png.pngtree.com/png-clipart/20200309/ourmid/pngtree-gold-number-1-png-image_2158836.jpg",
    "https://media.istockphoto.com/id/475251515/es/vector/3-d-rojo-brillante-n%C3%BAmero-2.jpg?s=612x612&w=0&k=20&c=Z_t_x31x8OJ6_KafUSb0d-_WTfPMATuPqzkTiuaT1Eo=",
    "https://png.pngtree.com/png-vector/20250205/ourmid/pngtree-gold-number-3-design-png-image_15390782.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Number_4_Colored_Icon.svg/1200px-Number_4_Colored_Icon.svg.png"
];

// Crear el div contenedor
const div = document.createElement("div");
div.style.width = "300px";      // tamaño fijo para la imagen
div.style.height = "300px";
div.style.overflow = "hidden";
div.style.alignContent="center";
div.style.position = "relative";

// Crear la etiqueta img
const img = document.createElement("img");
img.style.width = "100%";
img.style.height = "100%";
img.style.position = "absolute";
img.style.top = 0;
img.style.left = 0;
img.style.transition = "opacity 1s ease-in-out";  // transición suave
img.style.opacity = 1;

div.appendChild(img);
body.appendChild(div);

let currentIndex = 0;

// Función para cambiar la imagen con transición
function cambiarImagen(){
    // Desvanecer la imagen
    img.style.opacity = 0;

    // Después de la transición (1s), cambiar la src y volver a mostrar la imagen
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % imagenes.length;
        img.src = imagenes[currentIndex];
        img.style.opacity = 1;
    }, 1000);
}

// Inicializar la primera imagen
img.src = imagenes[currentIndex];

// Cambiar imagen cada 2 segundos (pero con transición de 1s)
setInterval(cambiarImagen, 2000);
