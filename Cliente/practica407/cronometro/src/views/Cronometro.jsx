import { useEffect, useState, useRef } from "react";

/**
 * Componente que crea un temporizador en horas, minutos, segundos y milisegundos. Que permite iniciar, pausar y reiniciar el temporizador.
 */
function Cronometro() {

    //Declaramos las constantes del useState
    const [tiempo, setTiempo] = useState(0); 
    const [corriendo, setCorriendo] = useState(false);
    const intervalo = useRef(null);

    //Constante que nos permite modificar la rápidez de actualización del reloj
    const velocidadIntervalo = 10;

    //Realizamos un useEffect para ir actualizando el tiempo del temporizador, se actualiza cada 10 milisegundos
    useEffect(() => {
        if (corriendo) {
            intervalo.current = setInterval(() => {
                setTiempo((t) => t + velocidadIntervalo);
            }, velocidadIntervalo); 
        }else{
            clearInterval(intervalo.current);
        }

    return () => clearInterval(intervalo.current);
    }, [corriendo]);

    /**
     * Función que nos permite calcular las horas, minutos, segundos y milisegundos y formatearlos adecuadamente para su correcta visualización
     * 
     * @returns {text} - Cadena de texto que tiene la hora formateada
     */
    const formatearTiempo = () => {
        const ms = tiempo % 1000;
        const seg = Math.floor((tiempo / 1000) % 60);
        const min = Math.floor((tiempo / 1000 / 60) % 60);
        const hr = Math.floor(tiempo / 1000 / 60 / 60);

        return `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}:${String(ms).padStart(3, "0")}`;
    };

    return (
        <div>
        <p>Temporizador</p>
        <p>{formatearTiempo()}</p>

        <div className="botones">
            {/* Añadimos los botones con las diferentes funcionalidades poner en marcha el reloj, pausarlo y reiniciar el tiempo a la vez que se para */}
            <button onClick={() => setCorriendo(true)}>Empezar</button>
            <button onClick={() => setCorriendo(false)}>Pausar</button>
            <button onClick={() => {setCorriendo(false); setTiempo(0);}}>Reiniciar</button>
        </div>
        </div>
  );
}

export default Cronometro;
