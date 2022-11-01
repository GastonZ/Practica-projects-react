import './index.css'
import NombreFoto from './components/NombreFoto'
import NextAndPrev from './components/NextAndPrev'
import Descripcion from './components/Descripcion'
import data from './data/events1'
import { useState } from 'react'


function App() {

  let [mostrarOcultar, setMostrarOcultar] = useState(false)

  let [numeroACambiar, setNumeroACambiar] = useState(0)

  let hide = () => {
    console.log(mostrarOcultar)
    setMostrarOcultar(!mostrarOcultar)
  }

  let next = () => {
    console.log('titties');
    if (numeroACambiar < data.length-1){
      setNumeroACambiar(++numeroACambiar)
    } else {
      setNumeroACambiar(0)
    }

  }
  let prev = () => {
    console.log('titties');
    if (numeroACambiar > 0){
      setNumeroACambiar(--numeroACambiar)
    } else {
      setNumeroACambiar(data.length-1)
    }
    
  }

  return (
    <div className="card-data">
      <NombreFoto category={data[numeroACambiar].category}  image={data[numeroACambiar].image} />
      {
        mostrarOcultar ?
        (<>
        <p className="m-10 bg-dark transition-ease " onClick={hide}> Ocultar descripcion </p>
        <Descripcion descripcion={data[numeroACambiar].description} />
        </>) : 
        (<p className="m-10 bg-dark" onClick={hide}> Mostrar descripcion </p>)
      }

      <div className="d-flex">
        <NextAndPrev verbo='anterior' siguienteOAnterior={prev}/>
        
        <NextAndPrev verbo='siguiente' siguienteOAnterior={next}/>
      </div>
    </div>
  )
}

export default App