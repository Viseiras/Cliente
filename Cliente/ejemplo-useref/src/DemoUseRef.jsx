import React, {useRef, useState} from "react";

function DemoUseRefLeer(){
    const inputRef = useRef(null);
    const [mensajeVisible, setMensajeVisible] = useState("Escribe algo y pulsa el botón");

    const manejarLectura = () => {
        const valorInput = inputRef.current.value;
        setMensajeVisible(`Has escrito ${valorInput}`);
        inputRef.current.value="";
        inputRef.current.focus();
    };

    return(
        <div>
            <h3>{mensajeVisible}</h3>
            <p>Pulsa el botón para leer valor del input</p>
            <input type="text" ref={inputRef} placeholder="Escribe..."/>
            <button onClick={manejarLectura}>Leer contenido</button>
        </div>
    );
}

export default DemoUseRefLeer;