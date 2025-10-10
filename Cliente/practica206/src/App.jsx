import { useState } from 'react'
import './App.css'

/**
 * Contenedor = App
 * Cartelera = imagen enlace
 * Resumen = p con children
 * Elenco = function elenco
 * {nombre, foto, biografia} children
 */

/**
 * Elemento BloquePelicula que nos ayuda a mostrar la imagen y el resumen en linea
 * 
 * @param {*} props 
 * @returns 
 */
function BloquePelicula(props){

  return (
    <div className='bloque-pelicula'>
      <img className="bloque-pelicula__cartelera" src="https://www.aceprensa.com/wp-content/uploads/2018/02/399055-0.jpg" alt="Imagen de cartelera de la pelicula: La forma del agua"/>
      <p className='bloque-pelicula__texto'>{props.children}</p>
    </div>
  )
}

/**
 * Elemento Actor que contiene una imagen, su nombre y una breve biografia introducida como children
 * 
 * @param {*} props 
 * @returns 
 */
function Actor(props){
  
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

/**
 * Función principal que nos ejecuta la aplicación reactiva de React
 * 
 * @returns 
 */
function App() {

  return (
    <>
      <div className='titulo'>
        {/*No se a que se refiere con destacado así que lo he puesto en negrita y subrayado */}
        <h1 className='titulo__texto'>La forma del agua</h1>
        <cite className='titulo__cita'>Guillermo del Toro</cite>  
      </div>
      <BloquePelicula>Baltimore, años 60. Elisa, muda desde que era un bebé, trabaja como limpiadora nocturna en un centro de investigación aeroespacial. Una noche, mientras está limpiando en un zona de alta seguridad, ve cómo llevan al laboratorio una cápsula con un extraño ser en su interior. Se trata de un hombre anfibio que despertará la curiosidad de Elisa.</BloquePelicula>
      <ul className='elenco'>
        <li><Actor nombre="Sally Hawkins" foto="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSN5jqinj0Gltq9QAct0LSr_jm4CC_9rlgdczRKILPTohpe-V3fUUOr-XmOfCbuLabHd0K6">Sally Hawkins es una actriz británica nacida el 27 de abril de 1976, reconocida por sus papeles en películas como Happy-Go-Lucky (por la que ganó un Oso de Plata), Blue Jasmine (por la que fue nominada al Óscar) y La forma del agua (donde recibió una nominación al Óscar como Mejor Actriz). Su carrera abarca cine, teatro y televisión, habiendo debutado en cine en Todo o nada (2002) de Mike Leigh. </Actor></li>
        <li><Actor nombre="Doug Jones" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Doug_Jones_2015.jpg/250px-Doug_Jones_2015.jpg">Doug Jones es un actor y contorsionista estadounidense, nacido el 24 de mayo de 1960 en Indianápolis, Indiana. Es famoso por interpretar a personajes no humanos en películas de ciencia ficción y terror, a menudo a través de maquillaje y prótesis. Es conocido por sus colaboraciones con el cineasta Guillermo del Toro, apareciendo en películas como El laberinto del fauno, Hellboy y La forma del agua. </Actor></li>
        <li><Actor nombre="Octavia Spencer" foto="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaePlPRfe3oWQ8VWpziDHAoCgIuiWNSZy1pnKnEimjSIln_DV9WbNldIwggt_cl9pZ99Te_mhk5eWP7YrxFGWOpbnl1mZ9S6B4f9cVUC4">Octavia Spencer es una actriz estadounidense nacida el 25 de mayo de 1970 en Montgomery, Alabama. Alcanzó la fama internacional con su papel en la película Criadas y señoras (2011), por el que ganó un Premio de la Academia a la mejor actriz de reparto. Antes de este reconocimiento, tuvo una larga carrera con numerosos papeles pequeños y apareció en películas como Tiempo de matar, Ugly Betty y Siete almas. </Actor></li>
      </ul>
    </>
  )
}

export default App
