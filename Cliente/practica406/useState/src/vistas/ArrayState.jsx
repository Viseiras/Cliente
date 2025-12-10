import { useState } from "react";

/**
 * Componente ArrayState que permite mediante un array y useState crear una lista con numeros aleatorios 
 */
function ArrayState(){
    
    //Use state para mensaje
    const [mensajeParrafo, setMensajeParrafo] = useState("Pulsa el botón generar para añadir un numero aleatorio a la lista");
    //Use state para la lista
    const [lista, setLista] = useState([]);

    //Función del botón que añade un numero a la lista
    const manejaParrafo = () =>{
        const numero = Math.floor(Math.random()*100)+1;
        setLista([...lista,numero]);
        setMensajeParrafo(`Añadido el numero ${numero}`);
    }

    //Función que vacia la lista
    const eliminaParrafo = () =>{
        setLista([]);
        setMensajeParrafo("Has eliminado la lista exitosamente, pulsa el botón generar para volver a empezar");
    }

    return(
        <div>
            <button className="button" onClick={manejaParrafo}>Generar</button>
            <button className="button" onClick={eliminaParrafo}>Eliminar</button>
            <p>{mensajeParrafo}
                <ul className="lista__parrafo">
                    {/* Hacemos un map con num e index para tener el valor (num) y un key (index), esto sirve para que no haya problemas de render */}
                    {lista.map((num,index)=>(
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </p>
        </div>
    );
}

export default ArrayState;