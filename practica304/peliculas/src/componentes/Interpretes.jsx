import { generarUuidAleatorio } from "../bibliotecas/funciones";
import Interprete from "./Interprete";

function Interpretes(props){
    const actores = props.actores;
    return(
        <div>
            <h3>Elenco</h3>
            <ul className="elenco">
                {actores.map(actor=>(
                    <Interprete 
                        key={generarUuidAleatorio()} 
                        foto={actor.imagen} 
                        nombre={actor.nombre}>
                        {actor.biografia}
                    </Interprete>
                ))}
            </ul>
        </div>
    );
}

export default Interpretes;