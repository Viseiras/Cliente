import './App.css'
import React from 'react';

function Person(props){
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
    </div>
  )
}

function GrupoPersonas(props){
  let total = React.Children.count(props.children);
  let titulo = total > 3 ? "Equipo (grupo grande)" : "Equipo";

  return (
    <>
      <h1>{titulo} (Total:{total})</h1>
      <div className='grid'>{props.children}</div>
    </>
  )
}

function App() {

  return (
    <>

      <GrupoPersonas>
        <Person nombre="Javier" edad="22" foto="https://w0.peakpx.com/wallpaper/34/233/HD-wallpaper-minish-cap-cute-toon-link-sword-the-legend-of-zelda.jpg">
          Es una persona que le gusta programar en Javascript y modificar bases de datos para crear aplicaciones interactivas y muy eficientes, a su vez ampliamente documentadas.
        </Person>
        <Person nombre="Jorge" edad="29" esVip={true} color1="green" color2="aqua"/>
        <Person nombre="Rober" edad="40" color1="red" color2="white"/>
        <Person nombre="Aaron" edad="25" color1="gold" color2="orange"/>
      </GrupoPersonas>
    </>
  )
}

export default App
