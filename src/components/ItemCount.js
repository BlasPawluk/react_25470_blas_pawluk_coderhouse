import React from 'react'
import {useState} from "react"
import './Estilos.css';

export const ItemCount = (props) => {
  const [contador, setContador] = useState(props.inicial)
  const sumar = () => {
    if (props.stock> contador)
    setContador(contador + 1)
  }
  const restar = () => {
    if (contador > props.inicial){
      setContador(contador - 1)
    }
}
const resetear = () => {
  setContador(props.inicial)

}
  return (
    <main className='resaltar2'>
      <h2 className='resaltar2'>Contador</h2>
      <p className='resaltar'>Mi contador: {contador}</p>
            <button onClick={sumar} className='resaltar1'>Aumentar</button>
            <button onClick={resetear} className='resaltar1'>Iniciar</button>
            <button onClick={restar} className='resaltar1'>Disminuir</button>
    </main>
  )
}
