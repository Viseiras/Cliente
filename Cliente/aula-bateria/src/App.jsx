import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/Navbar.jsx";
import AsignadorAsientos from "./views/AsignadorAsientos.jsx";
import SimuladorBateria from "./views/SimuladorBateria.jsx";


function PaginaInicio(){

  return(
    <div className="pagina-inicio">
      <h1>Gestión de aula y simulación de batería</h1>
      <p>Usa el menú para acceder a cada ejercicio</p>
      <ul>
        <li><strong>Ejercicio 1 - Asignador de asientos</strong> estado con arrays, eventos, objetos y generación aleatoria sin repetir</li>
        <li><strong>Ejercicio 2 - Simulador de batería</strong> Uso de useEffect, con setInterval y función de limpieza</li>
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
                <h2>Ejercicio 1 - Asignador de asientos</h2>
                <AsignadorAsientos/>
              </section>
              }/>
            <Route path="/ejercicio2" element={
                <section className="seccion">
                  <h2>Ejercico 2 - Simulador de batería</h2>
                  <SimuladorBateria/>
                </section>
              }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
