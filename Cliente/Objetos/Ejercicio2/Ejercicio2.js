'use strict';

let viaje = {
    origen:"Alicante",
    destino:"Tokio",
    dias:8,
    precio: 1200,
    mostrar: function(){
        console.log(`Orige: ${this.origen}, Destino:${this.destino}`);
        console.log(`Dias: ${this.dias}, Precio: ${this.precio}€`);
    }
};

//viaje.mostrar();

let oferta = viaje;
oferta.precio = 800;
oferta.mostrar();