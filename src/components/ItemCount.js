import React from 'react'
import {useState} from "react"
import './NavBar.css';

export const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial)
  const handleClick = () => {setContador(contador + 1)
  }
  const restar = () => {
    setContador(contador - 1)
}
const resetear = () => {
  setContador(0)

}
  return (
    <main className='resaltar2'>
      <h2 className='resaltar2'>Bienvenido!</h2>
      <p className='resaltar'>Actualmente tengo este numero: {contador}</p>
            <button onClick={handleClick} className='resaltar1'>Aumentar</button>
            <button onClick={resetear} className='resaltar1'>Iniciar</button>
            <button onClick={restar} className='resaltar1'>Disminuir</button>
    </main>
  )
}
