function Interprete(props){
  
    return (
        <div className='elenco__actor'>
            <img className='elenco__actor-foto' src={props.foto} alt={`Foto de ${props.nombre}`}/>
            <div className='elenco__actor-texto'>
                <h2>{props.nombre}</h2>
                <p>{props.children}</p>
            </div>
        </div>      
  )
}

export default Interprete;