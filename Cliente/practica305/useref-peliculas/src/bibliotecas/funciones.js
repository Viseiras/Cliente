//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};

//Función que añade o elimina la clase "oculto" a un elemento referenciado por un ref
const toggleOculto = (ref) => {
  if (!ref.current) return; //Verificamos que exista

  ref.current.classList.toggle("oculto"); //Añade o elimina la clase con Toggle
}

//Exportamos todos las funciones
export { generarUuidAleatorio , toggleOculto };

