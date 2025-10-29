import { BrowserRouter, Routes, Route} from "react-router-dom"
import modulosData from "./data/modulosData";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";

function App() {

  return (
    <div className="contenedor-portal">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"/>
            <Route index element={<Dashboard/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
