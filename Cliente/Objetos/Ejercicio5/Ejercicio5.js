'use strict';

const receta = {
    nombre: "Pulpo a la gallega",
    elaboracion: 30,
    formato:{
        tapa:"1 persona",
        media:"2 personas",
        racion:"4 personas"
    },
    ingredientes:["Pulpo","patatas","pimenton","aceite"],
    
    agregarIngredientes(ingrediente){
        this.recetaAlternativa= [...this.ingredientes,ingrediente];
    }
};

console.log(receta.ingredientes);

receta.agregarIngredientes("limón");
console.log(receta);