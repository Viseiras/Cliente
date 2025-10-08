'use strict';

/**
 * Fechas
 * ----------------------------
 * PROGRAMA QUE MUESTRA LA FECHA POR CONSOLA DESPUÉS DE ESPERAR 5 SEGUNDOS
 * ----------------------------
 */


//FUNCIONES
/**
 * Función que nos muestra la fecha actual debidamente formateada
 */
function mostrarFecha(){

    //Hacemos 2 array para escribir textualmente el nombre del día y mes
    const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    //Creamos el objeto Date con la fecha del sistema
    let ahora = new Date();
    //Recogemos el día del mes
    let dia = ahora.getDate();
    //Recogemos el día de la semana con el array
    let diaSemana = semana[ahora.getDay()];
    //Recogemos el mes con el array (numericamente habría que sumarle 1 porque los meses no empiezan en 0)
    let mes = meses[ahora.getMonth()];
    //Recogemos el año
    let anyo = ahora.getFullYear();

    //Lo mostramos debidamente formateado
    console.log(`${diaSemana}, ${dia} de ${mes} de ${anyo}`);

}


//MAIN
//Hacemos un timeout antes de empezar y ejecutamos la función después de 5 segundos
setTimeout(mostrarFecha,5000);
//FIN