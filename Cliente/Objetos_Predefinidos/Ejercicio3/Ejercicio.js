'use strict';

function diasHasta(finAny){
    let ahora = new Date();
    let objetivo = new Date(ahora.getFullYear(),11,31);

    let diferencia = objetivo-ahora;
    console.log(diferencia);

    let dias = Math.ceil(diferencia/(1000*60*60*24));
    console.log(`Faltan ${dias} dias para ${objetivo.getFullYear()+1}`);
}

diasHasta();