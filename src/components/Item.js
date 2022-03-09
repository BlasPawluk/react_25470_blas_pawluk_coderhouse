import React from 'react'
import './Estilos.css'

export const Item = ({productos}) => {
  const {title, price, stock} = productos
  return (
    <div>
      <h4>{title}</h4>
      <p>${price}</p>
      <p>Actualmente nos quedan: {stock}</p>
    </div>
  )
}

export default Item
