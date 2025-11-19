import { generarUuidAleatorio } from "../bibliotecas/funciones";
import Interprete from "./Interprete";


//No sé si pasar el ref dede props es una buena práctica o como debería hacerse pero como funciona lo dejo así.
function Interpretes(props){
    const actores = props.actores;
    return(
        <div ref={props.ref} className="interpretes oculto">
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