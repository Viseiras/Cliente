'use strict';

function cuentaVocalesConsonantes(texto){
    let minuscula = texto.toLowerCase();
    let vocales=0, consonantes=0;

    for(let i=0;i<minuscula.length;i++){
        let c = minuscula[i];
        if(/[a-záéíóúüñ]/.test(c)){
            if(/[aeiouáéíóúü]/.test(c)){
                vocales++;
            }else{
                consonantes++;
            }
        }
    }

    console.log(`Vocales: ${vocales},\nConsonantes: ${consonantes}`);
}

cuentaVocalesConsonantes("Hola, como estás? Pingüino");