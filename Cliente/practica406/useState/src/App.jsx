import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/Navbar.jsx";
import ArrayState from './vistas/ArrayState';
import Euromillon from './vistas/Euromillon';


/**
 * Esta página de inicio robada del ejemplo que hicimos en clase
 * 
 * @returns 
 */
function PaginaInicio(){

  return(
    <div className="pagina-inicio">
      <h1></h1>
      <p>Usa el menú para acceder a cada ejercicio</p>
      <ul>
        <li><strong>Ejercicio 1 - Array con useState</strong> estado con arrays, eventos, objetos y generación aleatoria sin repetir</li>
        <li><strong>Ejercicio 2 - Jugando al Euromillón</strong> permite hacer una simulación con combinaciones del Euromillón</li>
      </ul>
    </div>
  )
}

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<PaginaInicio/>}></Route>
            <Route path="/ejercicio1" element={
              <section className="seccion">
                <h2>Ejercicio 1 - Array con useState</h2>
                <ArrayState/>
              </section>
              }/>
            <Route path="/ejercicio2" element={
                <section className="seccion">
                  <h2>Ejercico 2 - Jugando al Euromillón</h2>
                  <Euromillon/>
                </section>
              }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
