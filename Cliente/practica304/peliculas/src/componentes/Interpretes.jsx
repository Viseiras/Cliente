import { generarUuidAleatorio } from "../bibliotecas/funciones";
import Interprete from "./Interprete";

function Interpretes(props){
    const actores = props.actores;
    return(
        <ul className="elenco">
            {actores.map(actor=>(
                <li><Interprete key={generarUuidAleatorio()} foto={actor.imagen} nombre={actor.nombre}>{actor.biografia}</Interprete></li>
            ))}
        </ul>
    );
}

export default Interpretes;