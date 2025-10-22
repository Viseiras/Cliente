import Utensilio from "./Utensilio";

function Utensilios(props){
    const listaUtensilios = props.lista;

    if(!listaUtensilios || listaUtensilios.length === 0){
        return <p>No se especifican utensilios.</p>
    }else{
        return(
            <div className="utensilios">
                <h4>Utensilios necesarios:</h4>
                <ul>
                    {listaUtensilios.map((utensilio) => (
                        <Utensilio
                            key = {utensilio.id}
                            nombre = {utensilio.nombre}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Utensilios;