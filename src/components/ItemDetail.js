import React from 'react'
import Item from './Item.js'
import './Estilos.css'

export const ItemDetail = ({productos =[]}) => {
  return (
    <div className='declarar'>
    {productos.map((elemen) => {
      return ((<Item key={elemen.id} producto={elemen}/>))})}
    </div>
  )
}
export default ItemDetail