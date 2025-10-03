"use-strict";

function dibujarCruz(numero){
    if(numero%3!==0){
        console.error("El numero introducido no es multiplo de 3");
    }else{
        let anchoSector = numero/3;

        for(let fila=0;fila<numero;fila++){
            let linea="";
            for(let col=0;col<numero;col++){
                if(col>=anchoSector && col<2*anchoSector || fila>=anchoSector && fila<2*anchoSector){
                    linea+="*"
                }else{
                    linea+="#";
                }
            }
            console.log(linea);
        }
    }
}

dibujarCruz(9);