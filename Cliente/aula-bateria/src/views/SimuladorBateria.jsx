import { useEffect, useState } from "react";

function SimuladorBateria() {
  const [nivel, setNivel] = useState(100);
  const [estaDescargando, setEstaDescargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const manejarIniciar = () =>{
    //Si el nivel de batería es 0, mostramos un mensaje
    if(nivel === 0){
      setMensaje('La batería está al 0%. Cárgala antes de iniciar la descarga');
      return;
    }

    //Boleano pasamos a true
    setEstaDescargando(true);

    //Mensaje por pantalla
    setMensaje('Descarga iniciada.');
  }

  const manejarPausar = () => {
    //Boleano pasamos a false porque no está descargando
    setEstaDescargando(false);
    setMensaje('Descarga pausada');
  }

  const manejarCargar = () => {
    //Establecemos el nivel a 100
    setNivel(100);
    //Boleano a false porque no está descargando
    setEstaDescargando(false);
    //Mensaje
    setMensaje('La batería se ha cargado al 100%');
  }
  
  useEffect(() => {
    let idIntervalo = null;

    if(estaDescargando){
      idIntervalo = setInterval(() => {
        setNivel((nivelAnterior) => {const nuevoNivel = nivelAnterior - 1;
        if(nuevoNivel <= 0){
          setEstaDescargando(false);
          setMensaje('La batería ha llegado al 0%. Cárguela.');
          return 0;
        }
        return nuevoNivel;
        });
        },500);
      }

      return (() => {
        if(idIntervalo != null){
          clearInterval(idIntervalo);
        }
      });
  },[estaDescargando]);

  const estiloNivel = {
    width: `${nivel}%`
  };

  return (
    <div className='bateria-container'>
      <p className='bateria-texto'>Nivel de batería: {nivel}%</p>
      <div className='bateria-visual'>
        <div className='bateria-marco'>   
          <div className='bateria-nivel' style={estiloNivel}></div>
        </div>
      <div className='bateria-tapon'></div>
      </div>
      <div className="botones">
        <button onClick={manejarIniciar}>Iniciar descarga</button>
        <button onClick={manejarPausar}>Pausar descarga</button>
        <button onClick={manejarCargar}>Cargar al 100%</button>
      </div>
          {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  )

}

export default SimuladorBateria;
