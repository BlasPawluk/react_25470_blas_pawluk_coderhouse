import React from 'react'
import './Estilos.css'

export const Item = (props) => {
  const {title, price, stock} = props.producto
  console.log(props)
  return (
    <div className='resaltar'>
      <h4>{title}</h4>
      <div>${price}</div>
      <div>Actualmente nos quedan: {stock}</div>
    </div>
  )
}

export default Item
