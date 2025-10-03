'use strict';

/**
 * Facturas
 * --------------------
 * PROGRAMA QUE CALCULA EL PRECIO Y MUESTRA EL NOMBRE CON SU PRECIO CALCULADO + LOS IMPUESTOS
 * --------------------
 */

//FUNCIONES
/**
 * Función que calcula el precio más impuesto y muestra por pantalla el nombre y el precio final
 * 
 * @param {string} [nombreProducto = "Producto genérico"] - Variable de texto que nos dice el nombre del producto
 * @param {number} [precio = 100] - Variable numérica que guarda el precio del producto 
 * @param {number} [impuesto = 21] - Variable numérica que guarda el impuesto del producto
 */
function calculaFactura(nombreProducto="Producto genérico",precio=100,impuesto=21){
    //Comprueba si es NaN
    if(isNaN(precio) || isNaN(impuesto)){
        console.error("Valores introducidos no válidos");
    }else{
        //Formatea el console.log()
        console.log(`Producto: ${nombreProducto.padEnd(20)} - Precio: ${(precio+((precio*impuesto)/100)).toFixed(2)}€`);
    }
}
//MAIN
//Valores por defecto
calculaFactura();
//Valores validos
calculaFactura("Manzana",2,8);
calculaFactura("TV FHD",1000,21);
//Valor NaN
calculaFactura("",'a',);
//Valor muy pequeño
calculaFactura("Pelota de pinpon",0.60,12);
//FIN