import Utensilios from "./Utensilios";
import './Receta.css';

function Receta(props){
    const {nombre, tiempo, dificultad, ingredientes, utensilios, imagen} = props;

    return(
        <div className="receta-card">
            <img src={imagen} alt={nombre} className="receta-imagen"/>

            <div className="receta-contenido">
                <h1>{nombre}</h1>
                <p className="tiempo-dificultad">Tiempo de preparación: <strong>{tiempo}</strong></p>
                <p className="tiempo-dificultad">Dificultad: <strong>{dificultad}</strong></p>
                <div className="ingredientes">
                    <ul>
                        {ingredientes.map((ingrediente,index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                    </ul>
                </div>
                <Utensilios lista={utensilios}/>
                <div className="preparacion">
                    <h3>Preparacion</h3>
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    );
}   

export default Receta;