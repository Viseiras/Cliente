import React from "react";

function Etiqueta(props){
  let clase = "etiqueta-"+(props.tipo || "");

  return <span className={clase}>{props.children}</span>
}

export function Person(props){
  let c1 = props.color1 || 'white';
  let c2 = props.color2 || 'rgb(68, 146, 209)';
  let descripcion = props.children || "No hay ninguna descripcion disponible";
  let rol = props.rol;
  let esVip = !!props.esVip;
  return(
    <div className={'person'+(esVip ? '-vip':'')} style={{
      background: "linear-gradient(135deg,"+c1+","+c2+")"
    }}>
      <img src={props.foto} alt={props.nombre} width="200"/>
      <h3>{(esVip ? "✦" :"")} Nombre: {props.nombre} {(esVip ? "✦":"")}</h3>
      <p>Edad: {props.edad}</p>
      <p>Descripción: {descripcion}</p>

      <div className='etiquetas-extra'>
        {rol ? <Etiqueta tipo="rol">{rol}</Etiqueta> : null}
        {esVip ? <Etiqueta tipo="vip">Vip</Etiqueta>: null}
      </div>
    </div>
  )
}

export function GrupoPersonas(props){
  let total = React.Children.count(props.children);
  let titulo = total > 3 ? "Equipo (grupo grande)" : "Equipo";

  return (
    <>
      <h1>{titulo} (Total:{total})</h1>
      <div className='grid'>{props.children}</div>
    </>
  )
}
