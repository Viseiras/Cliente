import { useParams } from "react-router-dom";

function DetallesModulo(props){
    
    const {moduleId} = useParams();
    const moduloSeleccionado = props.modulos.find(m => m.id === moduleId)

    if(!moduloSeleccionado){
        return <p>Selecciona un modulo de la lista para ver sus detalles</p>
    }
    
    return(
        <div className="detalle-card">
            <h3>Detalles: {moduloSeleccionado.nombre}</h3>
            <p><strong>ID:</strong> {moduloSeleccionado.id.toUpperCase()}</p>
            <p><strong>Carga Horaria: </strong> {moduloSeleccionado.horas} horas</p>
            <p><strong>Descipción:</strong> {moduloSeleccionado.descripcion}</p>
        </div>
    )
}

export default DetallesModulo;