'use strict';

function formatearHora(num){
    return String(num).padStart(2,"0");
}

function mostrarHora(){
    let ahora = new Date();
    let horas = formatearHora(ahora.getHours());
    let minutos = formatearHora(ahora.getMinutes());
    let segundos = formatearHora(ahora.getSeconds());

    console.log(`${horas}:${minutos}:${segundos}`);

    if(segundos==="40"){
        detenerReloj(id);
    }
}

function iniciarReloj(){
    mostrarHora();
    var id = setInterval(mostrarHora,1000);
    
    return id;
}

function detenerReloj(idInterval){
    clearInterval(idInterval);
}

let id = iniciarReloj();

//setTimeout(detenerReloj(id,10000));
