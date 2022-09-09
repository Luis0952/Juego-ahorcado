
import { useEffect, useState } from 'react';
import HangImage from './components/HangImage'
import { letras } from './helpers/letras'
import { obtenerPalabras } from './helpers/obtenerPalabras';


function App() {

  const [palabras, setPalabras] = useState(obtenerPalabras)
  const [ocultarPalabra, setOcultarpalabra] = useState("_ ".repeat(palabras.length));
  const [intentos, setIntentos] = useState(0);
  const [gano, setGano] = useState(false);
  const [perdio, setPerdio] = useState(false);

  // Cuando la persona pierde

  useEffect(() => {
    if(intentos>=9){
      setPerdio(true);
    }
  }, [intentos])

  //Cuando la persona ganó

  useEffect(() => {
   const currentOcultarPalabra=ocultarPalabra.split(" ").join("");
   if(currentOcultarPalabra===palabras){
    setGano(true);
   }
  }, [ocultarPalabra])
  
  

  //Validacion de las palabras
  const validarPalabras=(letra: string)=>{
    if(gano){return}  
    if(perdio){return}

    
    if (!palabras.includes(letra)){
        setIntentos(Math.min(intentos+1,9))
        return;
      }

      const ocultarPalabraArray=ocultarPalabra.split(" ")

    for(let i=0; i<palabras.length; i++){
      if(palabras[i]===letra){
         ocultarPalabraArray[i] = letra;
      }
    }
    setOcultarpalabra(ocultarPalabraArray.join(" "));
  };

  //Para reiniciar el Juego
  const reiniciarJuego=()=>{
    const nuevaPalabra=obtenerPalabras();
    setPalabras(nuevaPalabra);
    setOcultarpalabra("_ ".repeat(nuevaPalabra.length));
    setIntentos(0);
    setGano(false);
    setPerdio(false);
  };

  return (
  <div className="text-center">
      {/* imagenes */}
      <div className='mx-auto flex flex-col justify-center items-center'>
      <HangImage imagenNumero={intentos}/>
      </div>

      {/* palabra oculta */}
      <h3 
      className="font-bold text-4xl my-4 text-blue-600">
      {ocultarPalabra}
      </h3>

      <h3 
      className="font-bold text-2xl my-4 text-blue-600">
      Intento: {intentos} </h3>

     {/* Mensaje si perdió */}   

      {perdio  ?  (
      <h3 
      className="font-bold text-2xl my-4 text-red-600">
      😢 Perdió, su palabra es:  {palabras}
      </h3> ):("")
      }

     {/* Mensaje si ganó */}       
        { gano ? (
          <h3 
        className="font-bold text-2xl my-4 text-green-600">
        🥳 Felicdades, usted Ganó! </h3>) : (""
        
        )}

     {/* Teclado */}      
     {letras.map((letra) => ( 
       <button 
      onClick={()=>validarPalabras(letra)}//En el onClick tiene que ir como función
      key={letra}
      className="bg-white p-4 rounded-full shadow-md m-2" 
      >
        {letra}
      </button>  
      ))}

       <br />
      <br />

      {/* Boton de nuevo juego */}       
        <button 
        onClick={reiniciarJuego}
        className="mt-6 bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl"
        >
        ¿Nuevo Juego?
        </button> 
    </div>
  );
}

export default App;
