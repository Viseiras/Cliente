'use strict';

/**
 * Propinas
 * --------------------
 * PROGRAMA QUE CALCULA LA PROPINA Y EL PRECIO TOTAL
 * --------------------
 */

//FUNCIONES
/**
 * Función que nos devuelve el porcentaje de propina a pagar del precio total
 * 
 * @param {number} precio - Variable numérica que guarda el precio de la factura
 * @returns - Porcentaje a pagar según el precio de la factura
 */
function calculaPropina(precio){
    let propinaPorciento=0;
    
    //Comparamos si el precio es menor a 50, entre 50 y 200 y mayor de 200
    if(precio<50){
        propinaPorciento=20;
    }else if(precio>=50 && precio<=200){
        propinaPorciento=15;
    }else if(precio>200){
        propinaPorciento=10;
    }

    //Formula del porcentaje (Precio*porcentaje)/100
    return (precio*propinaPorciento)/100;
}
//MAIN
//Declaramos el Array con los precios
let precios = [124,48,268];

//Array de las propinas vacío
let propinas = [];

//Cadena que va a guardar la cadena que mostramos luego
let cadena = `FACTURA     PROPINA     TOTAL\n`;
cadena += '-------------------------------\n';

//Bucle que va rellenando las columnas
for(let i=0;i<precios.length;i++){
    //Calcula propina
    propinas[i] = calculaPropina(precios[i]);
    //Variables para guardar los valores temporalmente
    let factura = precios[i].toFixed(2);
    //Añadimos el padding Start para formatear correctamente la tabla
    let propina = propinas[i].toFixed(2).padStart(8);
    let total = (precios[i] + propinas[i]).toFixed(2).padStart(10);
    cadena += `${factura}   ${propina}   ${total}\n`;
}

//Mostramos por consola la cadena
console.log(cadena);

//FIN