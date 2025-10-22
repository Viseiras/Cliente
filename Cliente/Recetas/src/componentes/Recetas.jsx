import Receta from "./Receta";
import './Recetas.css';

function Recetas(props){
    const listadoRecetas = props.listado;
    const numRecetas = listadoRecetas ? listadoRecetas.length : 0;

    return(
        <div className="recetas-listado">
            <h1>El ricón de las Recetas ({numRecetas} platos)</h1>

            {listadoRecetas && listadoRecetas.length > 0 ? (
                listadoRecetas.map((receta)=>(
                <Receta
                    key = {receta.id}
                    nombre={receta.nombre}
                    tiempo={receta.tiempoPreparacion}
                    dificultad={receta.dificultad}
                    ingredientes={receta.ingredientes}
                    utensilios={receta.utensilios}
                    imagen={receta.imagen}
                >
                    {receta.preparacionCompleta}
                </Receta>
                ))
            ):(
                <p>No se han encontrado recetas</p>
            )}
        </div>
    );
}

export default Recetas;