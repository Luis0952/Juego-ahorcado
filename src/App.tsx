
import { useState } from 'react';
import HangImage from './components/HangImage'
import { letras } from './helpers/letras'
import { obtenerPalabras } from './helpers/obtenerPalabras';


function App() {

  const [palabras, setPalabras] = useState(obtenerPalabras)
  const [intentos, setIntentos] = useState(0);

  //Validacion de las palabras
  const validarPalabras=(letra: string)=>{
      console.log(letra)
  }


  return (
  <div className="text-center">

   <HangImage imagenNumero={3}/>
      
     

      <h3 
      className="font-bold text-4xl my-4 text-blue-600"> _ _ _ _ _ _ </h3>
      <h3 
      className="font-bold text-2xl my-4 text-blue-600">
      Intento: {intentos} </h3>
     {/* Mensaje si perdió */}       
      <h3 
      className="font-bold text-2xl my-4 text-red-600">
      😢 Perdió, su palabra es:  </h3> 
     {/* Mensaje si ganó */}       
        <h3 
        className="font-bold text-2xl my-4 text-green-600">
        🥳 Felicdades, usted Ganó! </h3> 
     {/* Teclado */}      
     {letras.map((letra) => ( 
       <button 
      className="bg-white p-4 rounded-full shadow-md m-2" 
      key={letra}
      onClick={()=>validarPalabras(letra)}//En el onClick tiene que ir como función
      >{letra}
      </button>  
      ))}

      {/* Boton de nuevo juego */}       
        <button 
        className="mt-6 bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl">
        ¿Nuevo Juego? </button> 
    </div>
  )
}

export default App
